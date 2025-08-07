/*
 * League of Legends Draft Simulator
 *
 * This simple browser-based tool allows you to simulate a champion draft
 * between two teams. You can ban and pick champions from a curated pool
 * of 50 champions. After each selection the tool highlights champions
 * that share tags with the current team's existing picks, hinting at
 * potential synergies. Once all bans and picks are complete the draft
 * ends and no further selections can be made.
 */

// ==========================================
// GAME DATA DATABASE
// ==========================================

/**
 * Centralized game data configuration
 * Contains all constants and mappings used throughout the application
 */
const GAME_DATA = {
  // Lane definitions and their icons
  LANES: {
    TOP: {
      name: 'Top',
      icon: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-top.svg'
    },
    JUNGLE: {
      name: 'Jungle',
      icon: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-jungle.svg'
    },
    MID: {
      name: 'Mid',
      icon: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-middle.svg'
    },
    ADC: {
      name: 'ADC',
      icon: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-bottom.svg'
    },
    SUPPORT: {
      name: 'Support',
      icon: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-utility.svg'
    }
  },

  // Composition archetypes and their icons
  COMP_TAGS: {
    POKE: {
      name: 'Poke',
      icon: '🏹',
      description: 'Long-range damage to harass enemies'
    },
    PICK: {
      name: 'Pick',
      icon: '🎯',
      description: 'Isolating and catching single enemies'
    },
    WOMBO_COMBO: {
      name: 'Wombo Combo',
      icon: '💥',
      description: 'Area-of-effect team fight combinations'
    },
    FRONT_TO_BACK: {
      name: 'Front-to-Back',
      icon: '🛡️',
      description: 'Traditional frontline and backline positioning'
    },
    SPLIT_PUSH: {
      name: 'Split Push',
      icon: '⚔️',
      description: 'Side-lane pressure and dueling'
    },
    DIVE: {
      name: 'Dive',
      icon: '⚔️',
      description: 'Hard engage and tower diving'
    }
  },

  // Game phase classifications - now using championData instead of hardcoded sets
  GAME_PHASES: {
    EARLY_GAME: {
      name: 'Early Game'
    },
    LATE_GAME: {
      name: 'Late Game'
    }
  },

  // Special champion classifications
  SPECIAL_GROUPS: {
    GLOBAL_ULT_CHAMPIONS: new Set([
      'Twisted Fate', 'Pantheon', 'Shen', 'Karthus', 'Nocturne',
      'Taliyah', 'Galio', 'Ryze'
    ])
  },


  // Helper functions to get data
  getLaneIcon: (laneName) => {
    const lane = Object.values(GAME_DATA.LANES).find(l => l.name === laneName);
    return lane ? lane.icon : null;
  },

  getCompTagIcon: (tagName) => {
    const tag = Object.values(GAME_DATA.COMP_TAGS).find(t => t.name === tagName);
    return tag ? tag.icon : null;
  },

  getCompTagsList: () => {
    return Object.values(GAME_DATA.COMP_TAGS).map(tag => tag.name);
  },

  getLanesList: () => {
    return Object.values(GAME_DATA.LANES).map(lane => lane.name);
  },

  // Helper functions to access champion data
  isEarlyGameChamp: (championName) => {
    const champ = championData.find(c => c.name === championName);
    return champ ? champ.gamePhases.includes('Early Game') : false;
  },

  isLateGameChamp: (championName) => {
    const champ = championData.find(c => c.name === championName);
    return champ ? champ.gamePhases.includes('Late Game') : false;
  },

  hasGlobalUlt: (championName) => {
    const champ = championData.find(c => c.name === championName);
    return champ ? champ.hasGlobalUlt : false;
  },

  // Get champion composition data
  getChampionData: (championName) => {
    const champ = championData.find(c => c.name === championName);
    return champ ? { compTags: champ.compTags, abilityTagMap: champ.abilityTagMap } : null;
  },

  getChampionCompTags: (championName) => {
    const champ = championData.find(c => c.name === championName);
    return champ ? champ.compTags : [];
  },

  getChampionAbilityTagMap: (championName) => {
    const champ = championData.find(c => c.name === championName);
    return champ ? champ.abilityTagMap : {};
  }
};

// Legacy compatibility objects (to avoid breaking existing code)
const laneIcons = Object.fromEntries(
  Object.values(GAME_DATA.LANES).map(lane => [lane.name, lane.icon])
);

const compTagIcons = Object.fromEntries(
  Object.values(GAME_DATA.COMP_TAGS).map(tag => [tag.name, tag.icon])
);

const compTagsList = GAME_DATA.getCompTagsList();
const globalUltChamps = GAME_DATA.SPECIAL_GROUPS.GLOBAL_ULT_CHAMPIONS;

// Legacy compatibility for compData (now using GAME_DATA.CHAMPIONS)
const compData = GAME_DATA.CHAMPIONS;


// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Compute the number of champions picked by a team that contribute to each
 * composition archetype. Returns an object where keys are comp tag names and
 * values are counts. Only champions on the current team are considered.
 */
function getCompCountsForTeam(team) {
  const counts = {};
  compTagsList.forEach((tag) => {
    counts[tag] = 0;
  });
  
  const picks = state.picks[team] || [];
  picks.forEach((pick) => {
    // Handle both objects (new picks) and strings (legacy)
    const name = typeof pick === 'object' ? pick.name : pick;
    const champ = championData.find((c) => c.name === name);
    if (champ && champ.compTags) {
      champ.compTags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    }
  });
  
  return counts;
}

/**
 * Update the composition tracker display for both teams
 */
function updateCompTracker() {
  const blueContainer = document.getElementById('blue-comp-tracker');
  const redContainer = document.getElementById('red-comp-tracker');
  
  function renderCounts(container, counts) {
    if (!container) return;
    container.innerHTML = '';
    compTagsList.forEach((tag) => {
      const count = counts[tag];
      if (count > 0) {
        const div = document.createElement('div');
        div.classList.add('comp-entry');
        div.textContent = `${count}/5 ${tag}`;
        container.appendChild(div);
      }
    });
  }
  
  const countsBlue = getCompCountsForTeam(1);
  const countsRed = getCompCountsForTeam(2);
  renderCounts(blueContainer, countsBlue);
  renderCounts(redContainer, countsRed);
}

// Helper functions for lane display
function createLaneDisplay(lanes) {
  const container = document.createElement('span');
  lanes.forEach((lane, index) => {
    if (index > 0) {
      container.appendChild(document.createTextNode(', '));
    }
    
    const icon = GAME_DATA.getLaneIcon(lane);
    if (icon) {
      const iconEl = document.createElement('img');
      iconEl.src = icon;
      iconEl.width = 12;
      iconEl.height = 12;
      iconEl.alt = lane;
      iconEl.style.marginRight = '2px';
      iconEl.style.verticalAlign = 'text-bottom';
      iconEl.style.width = '10px';
      iconEl.style.height = '10px';
      container.appendChild(iconEl);
    }
    
    container.appendChild(document.createTextNode(lane));
  });
  return container;
}

function createLaneDisplayHTML(lanes) {
  return lanes.map(lane => {
    const icon = GAME_DATA.getLaneIcon(lane);
    if (icon) {
      return `<img src="${icon}" width="10" height="10" alt="${lane}" style="margin-right:2px;vertical-align:text-bottom;width:10px!important;height:10px!important;">${lane}`;
    }
    return lane;
  }).join(', ');
}

function createLaneDisplayText(lanes) {
  return lanes.join(', ');
}

// ==========================================
// CUSTOM TOOLTIP SYSTEM
// ==========================================

let currentTooltip = null;

function createCustomTooltip(event, champ) {
  removeCustomTooltip();
  
  const tooltip = document.createElement('div');
  tooltip.className = 'custom-tooltip';
  tooltip.style.position = 'fixed';
  tooltip.style.zIndex = '9999';
  tooltip.style.backgroundColor = 'rgba(40, 40, 40, 0.95)';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '8px 12px';
  tooltip.style.borderRadius = '6px';
  tooltip.style.fontSize = '12px';
  tooltip.style.lineHeight = '1.4';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
  tooltip.style.border = '1px solid #666';
  tooltip.style.maxWidth = '300px';
  tooltip.style.wordWrap = 'break-word';
  
  // Lanes line with icons
  const lanesLine = document.createElement('div');
  lanesLine.style.margin = '2px 0';
  lanesLine.innerHTML = '<strong>Lanes:</strong> ';
  
  // Handle both array and string lanes
  const lanes = Array.isArray(champ.lanes) ? champ.lanes : (champ.lane ? [champ.lane] : []);
  
  lanes.forEach((lane, index) => {
    if (index > 0) lanesLine.innerHTML += ', ';
    const icon = GAME_DATA.getLaneIcon(lane);
    if (icon) {
      lanesLine.innerHTML += `<img src="${icon}" style="width:12px;height:12px;display:inline-block;vertical-align:text-bottom;margin-right:3px;" alt="${lane}">`;
    }
    lanesLine.innerHTML += lane;
  });
  
  tooltip.appendChild(lanesLine);
  
  // Composition tags line
  if (champ.compTags && champ.compTags.length > 0) {
    const compLine = document.createElement('div');
    compLine.style.margin = '2px 0';
    compLine.innerHTML = '<strong>Comps:</strong> ';
    
    const compStrings = champ.compTags.map((tag) => {
      let ability = '';
      if (champ.abilityTagMap && champ.abilityTagMap[tag]) {
        const raw = champ.abilityTagMap[tag];
        if (Array.isArray(raw)) {
          ability = raw.join(', ');
        } else {
          ability = raw;
        }
      }
      const tagIcon = GAME_DATA.getCompTagIcon(tag);
      const tagWithIcon = tagIcon ? tagIcon + ' ' + tag : tag;
      return `${tagWithIcon}${ability ? ' (' + ability + ')' : ''}`;
    });
    
    compLine.innerHTML += compStrings.join(', ');
    tooltip.appendChild(compLine);
  }
  
  // Early/Late game tags line
  if (champ.gamePhases && champ.gamePhases.length > 0) {
    const gameLine = document.createElement('div');
    gameLine.style.margin = '2px 0';
    gameLine.innerHTML = '<strong>Phase:</strong> ' + champ.gamePhases.join(', ');
    tooltip.appendChild(gameLine);
  }
  
  document.body.appendChild(tooltip);
  currentTooltip = tooltip;
  updateTooltipPosition(event);
}

function removeCustomTooltip() {
  if (currentTooltip && currentTooltip.parentNode) {
    currentTooltip.parentNode.removeChild(currentTooltip);
    currentTooltip = null;
  }
}

function updateTooltipPosition(event) {
  if (!currentTooltip) return;
  
  const x = event.clientX + 10;
  const y = event.clientY + 10;
  
  // Prevent tooltip from going off-screen
  const rect = currentTooltip.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width - 10;
  const maxY = window.innerHeight - rect.height - 10;
  
  const finalX = Math.min(x, maxX);
  const finalY = Math.min(y, maxY);
  
  currentTooltip.style.left = finalX + 'px';
  currentTooltip.style.top = finalY + 'px';
}

// ==========================================
// DRAFT STATE MANAGEMENT
// ==========================================

// Audio elements and state for draft music and sound effects
let draftMusic;
let pickSound;
let banSound;
let musicStarted = false;

// Global state variables for draft progression
const state = {
  bans: { 1: [], 2: [] },
  picks: { 1: [], 2: [] },
  currentPhase: 'ban1', // possible values: ban1, pick1, ban2, pick2, done
  ban1Turn: 0,
  pick1Turn: 0,
  ban2Turn: 0,
  pick2Turn: 0
};

// Current lane filter
let laneFilter = 'All';

// Turn order arrays for draft phases
const banOrder1 = [1, 2, 1, 2, 1, 2];
const pickOrder1 = [1, 2, 2, 1, 1, 2];
const banOrder2 = [2, 1, 2, 1];
const pickOrder2 = [2, 1, 1, 2];

// DOM references
const phaseInfo = document.getElementById('phase-info');
const championsContainer = document.getElementById('champions-container');
const team1BanList = document.querySelector('#team1-bans ul');
const team2BanList = document.querySelector('#team2-bans ul');
const team1PickList = document.querySelector('#team1-picks ul');
const team2PickList = document.querySelector('#team2-picks ul');

// [Rest of the script.js content continues with the same functionality but better organized structure...]

/**
 * Initialize the app by rendering the champion grid and updating the phase
 * information. Should be called once on page load.
 */
function init() {
  renderChampions();
  updatePhaseInfo();
  updateTeamLists();
  updateSidePanels();
  updateCompTracker();
  setupLaneFilter();

  // Obtain audio elements for draft music and sound effects. These elements
  // reside in the HTML and reference audio files under the audio directory.
  draftMusic = document.getElementById('draft-music');
  pickSound = document.getElementById('pick-sfx');
  banSound = document.getElementById('ban-sfx');

  // Start background music immediately on page load. If autoplay is blocked,
  // catch the error silently. This ensures the draft music plays without
  // waiting for the first ban/pick action. The volume is lowered to
  // provide ambient background without overwhelming other sounds.
  try {
    if (draftMusic) {
      draftMusic.volume = 0.25;
      draftMusic.play().then(() => {
        musicStarted = true;
      }).catch((error) => {
        // Add click listener to start music on user interaction
        document.addEventListener('click', function startMusicOnClick() {
          if (!musicStarted && draftMusic) {
            draftMusic.play().then(() => {
              musicStarted = true;
            }).catch(console.error);
            document.removeEventListener('click', startMusicOnClick);
          }
        });
      });
    }
  } catch (err) {
    // Autoplay may be blocked; ignore errors and attempt again later
  }

  // Attach restart handler to the restart button for the finish screen
  const restartBtn = document.getElementById('restart-button');
  if (restartBtn) {
    restartBtn.addEventListener('click', restartDraft);
  }
}

/**
 * Setup click handlers for lane filter buttons. When a button is clicked the
 * laneFilter variable is updated, the active button styling is toggled and
 * the champion list is re-rendered to show only champions from the selected
 * lane. A value of 'All' will show every champion.
 */
function setupLaneFilter() {
  const buttons = document.querySelectorAll('#lane-filter .lane-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      laneFilter = btn.dataset.lane;
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderChampions();
    });
  });
}

/**
 * Render all champions into the champion container. Applies styling to
 * indicate synergy and disabled state.
 */
function renderChampions() {
  // Clear existing elements
  championsContainer.innerHTML = '';

  // Determine current synergy counts based on the active team's picks
  const currentTeam = getCurrentTeam();
  const compCounts = getCompCountsForTeam(currentTeam);
  // Determine if there is at least one comp picked to trigger synergy highlights
  const showSynergy = Object.values(compCounts).some((c) => c > 0);

  // Build each champion card
  championData.forEach((champ) => {
    // Apply lane filter: skip champions that do not match the selected filter
    if (laneFilter !== 'All' && !champ.lanes.includes(laneFilter)) return;

    const champDiv = document.createElement('div');
    champDiv.classList.add('champion');
    // Build champion contents: image and name
    const img = document.createElement('img');
    const version = '14.10.1';
    img.src = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`;
    img.alt = champ.name;
    champDiv.appendChild(img);
    const nameSpan = document.createElement('span');
    nameSpan.textContent = champ.name;
    champDiv.appendChild(nameSpan);

    // Setup custom HTML tooltip with SVG icons
    champDiv.removeAttribute('title');
    
    // Create custom tooltip content with icons
    champDiv.addEventListener('mouseenter', (e) => {
      createCustomTooltip(e, champ);
    });
    
    champDiv.addEventListener('mouseleave', () => {
      removeCustomTooltip();
    });
    
    champDiv.addEventListener('mousemove', (e) => {
      updateTooltipPosition(e);
    });

    // Determine synergy strength for this champion. Calculate the maximum
    // comp count among the champion's comps. Only highlight if there is at
    // least one pick in a comp the champion belongs to and the champion has
    // an open lane.
    let synergyStrength = 0;
    if (showSynergy && champ.compTags && champ.compTags.length > 0) {
      champ.compTags.forEach((tag) => {
        const count = compCounts[tag] || 0;
        if (count > synergyStrength) {
          synergyStrength = count;
        }
      });
    }

    // Determine if the champion has been banned or picked
    const isBanned =
      state.bans[1].includes(champ.name) || state.bans[2].includes(champ.name);
    const isPicked =
      (state.picks[1] || []).some(pick => pick.name === champ.name) || 
      (state.picks[2] || []).some(pick => pick.name === champ.name);

    if (isBanned || isPicked || state.currentPhase === 'done') {
      champDiv.classList.add('disabled');
    } else {
      // Champion is selectable
      champDiv.addEventListener('click', () => handleChampionClick(champ));
      if (synergyStrength > 0) {
        // Apply gradient synergy classes based on strength (1,2,3 or more)
        if (synergyStrength >= 3) {
          champDiv.classList.add('synergy3');
        } else if (synergyStrength === 2) {
          champDiv.classList.add('synergy2');
        } else {
          champDiv.classList.add('synergy1');
        }
      } else {
        champDiv.classList.add('available');
      }
    }

    championsContainer.appendChild(champDiv);
  });
}

/**
 * Determine which team is acting based on the current phase and turn counters.
 * @returns {number} 1 for Team 1 (blue), 2 for Team 2 (red), or 0 if draft is done.
 */
function getCurrentTeam() {
  switch (state.currentPhase) {
    case 'ban1':
      return banOrder1[state.ban1Turn];
    case 'pick1':
      return pickOrder1[state.pick1Turn];
    case 'ban2':
      return banOrder2[state.ban2Turn];
    case 'pick2':
      return pickOrder2[state.pick2Turn];
    default:
      return 0;
  }
}

/**
 * Aggregate synergy tags for all picks of a given team.
 * @param {number} team - The team to compute synergy for
 * @returns {Set<string>} a set of tags
 */
function getSynergyTagsForTeam(team) {
  const tagSet = new Set();
  const picks = state.picks[team] || [];
  picks.forEach((name) => {
    const champ = championData.find((c) => c.name === name);
    if (champ) {
      champ.tags.forEach((tag) => tagSet.add(tag));
    }
  });
  return tagSet;
}

/**
 * Check whether a champion has synergy with a set of tags.
 * @param {Object} champ - Champion object
 * @param {Set<string>} synergySet - Set of tags to compare against
 * @returns {boolean} true if there is any overlapping tag
 */
function hasSynergy(champ, synergySet) {
  return champ.tags.some((tag) => synergySet.has(tag));
}

/**
 * Update the display for picks and bans for both teams.
 */
function updateTeamLists() {
  // Clear existing list items
  team1BanList.innerHTML = '';
  team2BanList.innerHTML = '';
  team1PickList.innerHTML = '';
  team2PickList.innerHTML = '';

  // Helper to create list items with image and name
  function appendListItems(listEl, items) {
    items.forEach((item) => {
      const li = document.createElement('li');
      // Handle both objects (picks) and strings (bans)
      const name = typeof item === 'object' ? item.name : item;
      const champ = championData.find((c) => c.name === name);
      if (champ) {
        const img = document.createElement('img');
        const version = '14.10.1';
        img.src = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`;
        img.alt = name;
        li.appendChild(img);
      }
      const span = document.createElement('span');
      span.textContent = name;
      li.appendChild(span);
      listEl.appendChild(li);
    });
  }

  // Populate bans and picks using helper
  appendListItems(team1BanList, state.bans[1] || []);
  appendListItems(team2BanList, state.bans[2] || []);
  appendListItems(team1PickList, state.picks[1] || []);
  appendListItems(team2PickList, state.picks[2] || []);
}

/**
 * Update the large side panels showing picked champions for Blue and Red teams.
 * Each entry includes a bigger image, the champion name, and a summary of
 * lanes and tags. This provides better visibility of the draft composition.
 */
function updateSidePanels() {
  const blueContainer = document.getElementById('blue-side-picks');
  const redContainer = document.getElementById('red-side-picks');
  // Clear existing
  blueContainer.innerHTML = '';
  redContainer.innerHTML = '';
  const version = '14.10.1';
  // Helper to build pick entries
  function buildEntry(item) {
    // Handle both objects (new picks) and strings (legacy)
    const name = typeof item === 'object' ? item.name : item;
    const champ = championData.find((c) => c.name === name);
    if (!champ) return null;
    const div = document.createElement('div');
    div.classList.add('pick-entry');
    const img = document.createElement('img');
    img.src = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`;
    img.alt = name;
    div.appendChild(img);
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('champ-name');
    nameDiv.textContent = name;
    div.appendChild(nameDiv);
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('champ-info');
    // Create lanes display with icons
    const laneDisplay = createLaneDisplay(champ.lanes);
    infoDiv.appendChild(laneDisplay);
    
    // Build description lines. Always show lanes on the first line. If the
    // champion has composition tags, list them on a new line. If the
    // champion has early/late game tags, list them on a separate line.
    const compText = champ.compTags && champ.compTags.length > 0 ? 
      champ.compTags.map(tag => (compTagIcons[tag] ? compTagIcons[tag] + ' ' + tag : tag)).join(', ') : '';
    const gameText = champ.gamePhases && champ.gamePhases.length > 0 ? champ.gamePhases.join(', ') : '';
    
    if (compText) {
      infoDiv.appendChild(document.createElement('br'));
      const compSpan = document.createElement('span');
      compSpan.innerHTML = `Comps: ${compText}`;
      infoDiv.appendChild(compSpan);
    }
    
    if (gameText) {
      infoDiv.appendChild(document.createElement('br'));
      const gameSpan = document.createElement('span');
      gameSpan.textContent = `Game: ${gameText}`;
      infoDiv.appendChild(gameSpan);
    }
    div.appendChild(infoDiv);
    return div;
  }
  // Append picks for Blue team (team 1)
  (state.picks[1] || []).forEach((pick) => {
    const entry = buildEntry(pick);
    if (entry) blueContainer.appendChild(entry);
  });
  // Append picks for Red team (team 2)
  (state.picks[2] || []).forEach((pick) => {
    const entry = buildEntry(pick);
    if (entry) redContainer.appendChild(entry);
  });
}

/**
 * Helper to build a finish-entry element
 */
function buildFinishEntry(name, isDraggable = false, teamColor = null) {
  const champ = championData.find((c) => c.name === name);
  if (!champ) {
    return null;
  }
  const entry = document.createElement('div');
  entry.classList.add('finish-entry');
  if (isDraggable) {
    entry.classList.add('draggable');
    entry.draggable = true;
    entry.dataset.championName = name;
  }
  if (teamColor === 'blue') {
    entry.classList.add('blue-team');
    entry.dataset.team = '1';
  } else if (teamColor === 'red') {
    entry.classList.add('red-team');
    entry.dataset.team = '2';
  }
  const img = document.createElement('img');
  const version = '14.10.1';
  img.src = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png`;
  img.alt = name;
  entry.appendChild(img);
  const nameDiv = document.createElement('div');
  nameDiv.classList.add('finish-name');
  nameDiv.textContent = name;
  entry.appendChild(nameDiv);
  // Create tags container for TFT-style tags
  const tagsContainer = document.createElement('div');
  tagsContainer.classList.add('champion-tags');
  
  // Add comp tags (Poke, Pick, etc.) as small badges
  if (champ.compTags && champ.compTags.length > 0) {
    champ.compTags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.classList.add('comp-tag');
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });
  }
  
  // Add game tags if they exist
  if (champ.gamePhases && champ.gamePhases.length > 0) {
    champ.gamePhases.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.classList.add('game-tag');
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });
  }
  
  entry.appendChild(tagsContainer);
  return entry;
}

/**
 * Build and display the finish screen after the draft is complete. This
 * function hides the drafting interface and shows summaries of bans,
 * picks, composition progress and lane distribution. It creates larger
 * entries for each pick and ban and displays comp counts. A restart
 * button allows users to begin a new draft.
 */
function showFinishScreen() {
  // Hide the main drafting UI sections
  const championListSection = document.getElementById('champion-list');
  const statusSection = document.getElementById('status-panel');
  const teamsContainer = document.getElementById('teams-container');
  if (championListSection) championListSection.style.display = 'none';
  if (statusSection) statusSection.style.display = 'none';
  if (teamsContainer) teamsContainer.style.display = 'none';

  // Show the finish screen
  const finishScreen = document.getElementById('finish-screen');
  if (finishScreen) finishScreen.style.display = 'block';

  // Stop draft music and play finish music
  const draftMusic = document.getElementById('draft-music');
  const finishMusic = document.getElementById('finish-music');
  
  if (draftMusic) {
    draftMusic.pause();
    draftMusic.currentTime = 0;
  }
  
  if (finishMusic) {
    finishMusic.play().catch(error => {
      // Auto-play may be blocked
    });
  }

  // Hide bans section
  const bansSection = document.getElementById('finish-bans');
  if (bansSection) {
    bansSection.style.display = 'none'; // Hide bans section completely
  }

  // Populate picks section with side-by-side layout
  const picksSection = document.getElementById('finish-picks');
  if (picksSection) {
    picksSection.innerHTML = '';
    
    // Create main container
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('team-picks-container');
    
    // Create teams header
    const teamsHeader = document.createElement('div');
    teamsHeader.classList.add('team-picks-header');
    const blueTitle = document.createElement('h3');
    blueTitle.textContent = 'Blue Picks';
    blueTitle.style.color = '#2196f3';
    const redTitle = document.createElement('h3');
    redTitle.textContent = 'Red Picks';
    redTitle.style.color = '#f44336';
    teamsHeader.appendChild(blueTitle);
    teamsHeader.appendChild(redTitle);
    mainContainer.appendChild(teamsHeader);
    
    // Create side-by-side container for both teams
    const teamsContainer = document.createElement('div');
    teamsContainer.style.display = 'flex';
    teamsContainer.style.gap = '80px';
    teamsContainer.style.justifyContent = 'center';
    teamsContainer.style.alignItems = 'flex-start';
    
    // Blue team container
    const blueTeamContainer = document.createElement('div');
    blueTeamContainer.style.display = 'flex';
    blueTeamContainer.style.flexDirection = 'column';
    blueTeamContainer.style.alignItems = 'center';
    
    // Blue team position labels
    const bluePositionLabels = document.createElement('div');
    bluePositionLabels.classList.add('position-labels');
    ['Top', 'Jungle', 'Mid', 'ADC', 'Support'].forEach(pos => {
      const label = document.createElement('span');
      const icon = document.createElement('img');
      icon.src = laneIcons[pos];
      icon.width = 16;
      icon.height = 16;
      icon.alt = pos;
      icon.style.marginRight = '4px';
      label.appendChild(icon);
      label.appendChild(document.createTextNode(pos));
      bluePositionLabels.appendChild(label);
    });
    blueTeamContainer.appendChild(bluePositionLabels);
    
    const blueRow = document.createElement('div');
    blueRow.classList.add('team-picks-row');
    blueRow.id = 'blue-picks-row';
    blueTeamContainer.appendChild(blueRow);
    
    // Red team container
    const redTeamContainer = document.createElement('div');
    redTeamContainer.style.display = 'flex';
    redTeamContainer.style.flexDirection = 'column';
    redTeamContainer.style.alignItems = 'center';
    
    // Red team position labels
    const redPositionLabels = document.createElement('div');
    redPositionLabels.classList.add('position-labels');
    ['Top', 'Jungle', 'Mid', 'ADC', 'Support'].forEach(pos => {
      const label = document.createElement('span');
      const icon = document.createElement('img');
      icon.src = laneIcons[pos];
      icon.width = 16;
      icon.height = 16;
      icon.alt = pos;
      icon.style.marginRight = '4px';
      label.appendChild(icon);
      label.appendChild(document.createTextNode(pos));
      redPositionLabels.appendChild(label);
    });
    redTeamContainer.appendChild(redPositionLabels);
    
    const redRow = document.createElement('div');
    redRow.classList.add('team-picks-row');
    redRow.id = 'red-picks-row';
    redTeamContainer.appendChild(redRow);
    
    // Fill positions (5 slots each)
    for (let i = 0; i < 5; i++) {
      // Blue team
      if (state.picks[1] && state.picks[1][i]) {
        const entry = buildFinishEntry(state.picks[1][i].name, true, 'blue');
        entry.dataset.position = i.toString();
        blueRow.appendChild(entry);
      } else {
        const dropZone = document.createElement('div');
        dropZone.classList.add('drop-zone', 'blue-drop');
        dropZone.textContent = 'Empty';
        dropZone.dataset.team = '1';
        dropZone.dataset.position = i.toString();
        blueRow.appendChild(dropZone);
      }
      
      // Red team
      if (state.picks[2] && state.picks[2][i]) {
        const entry = buildFinishEntry(state.picks[2][i].name, true, 'red');
        entry.dataset.position = i.toString();
        redRow.appendChild(entry);
      } else {
        const dropZone = document.createElement('div');
        dropZone.classList.add('drop-zone', 'red-drop');
        dropZone.textContent = 'Empty';
        dropZone.dataset.team = '2';
        dropZone.dataset.position = i.toString();
        redRow.appendChild(dropZone);
      }
    }
    
    teamsContainer.appendChild(blueTeamContainer);
    teamsContainer.appendChild(redTeamContainer);
    mainContainer.appendChild(teamsContainer);
    picksSection.appendChild(mainContainer);
    
    // Add drag and drop functionality
    setupDragAndDrop();
  }

  // Populate compositions summary - HIDDEN as per user request
  const compsSection = document.getElementById('finish-comps');
  if (compsSection) {
    compsSection.style.display = 'none'; // Hide composition summary section
  }
}

/**
 * Setup drag and drop functionality for champion entries in finish screen
 */
function setupDragAndDrop() {
  let draggedElement = null;
  let draggedFromTeam = null;
  let draggedFromIndex = null;
  
  function handleDragStart(e) {
    if (!e.target.classList.contains('draggable')) return;
    
    draggedElement = e.target;
    e.target.classList.add('dragging');
    
    draggedFromTeam = parseInt(e.target.dataset.team);
    draggedFromIndex = parseInt(e.target.dataset.position);
    
    e.dataTransfer.effectAllowed = 'move';
  }
  
  function handleDragEnd(e) {
    if (e.target.classList.contains('draggable')) {
      e.target.classList.remove('dragging');
    }
    document.querySelectorAll('.drop-zone').forEach(zone => {
      zone.classList.remove('drag-over');
    });
    
    // Reset drag state
    draggedElement = null;
    draggedFromTeam = null;
    draggedFromIndex = null;
  }
  
  function handleDragOver(e) {
    e.preventDefault();
    const target = e.target.closest('.finish-entry, .drop-zone');
    if (target) {
      e.dataTransfer.dropEffect = 'move';
    }
  }
  
  function handleDrop(e) {
    e.preventDefault();
    
    if (!draggedElement || draggedFromTeam === null || draggedFromIndex === null) {
      return;
    }
    
    const target = e.target.closest('.finish-entry, .drop-zone');
    if (!target) return;
    
    let targetTeam, targetIndex;
    
    // Determine target position
    if (target.classList.contains('drop-zone')) {
      targetTeam = parseInt(target.dataset.team);
      targetIndex = parseInt(target.dataset.position);
    } else if (target.classList.contains('finish-entry')) {
      targetTeam = parseInt(target.dataset.team);
      targetIndex = parseInt(target.dataset.position);
    } else {
      return;
    }
    
    // Only allow drops within the same team
    if (draggedFromTeam !== targetTeam) {
      return;
    }
    
    // Don't drop on same position
    if (draggedFromIndex === targetIndex) {
      return;
    }
    
    // Get the champion being dragged
    const draggedChampionName = draggedElement.dataset.championName;
    if (!draggedChampionName) return;
    
    // Find the actual champion object
    const draggedChampion = championData.find(ch => ch.name === draggedChampionName);
    if (!draggedChampion) return;
    
    // Perform the swap in state
    const picks = state.picks[draggedFromTeam];
    if (!picks) return;
    
    // Ensure array has enough elements
    while (picks.length <= Math.max(draggedFromIndex, targetIndex)) {
      picks.push(null);
    }
    
    // Get target champion (might be null for empty slot)
    const targetChampion = picks[targetIndex] || null;
    
    // Perform the swap
    picks[draggedFromIndex] = targetChampion;
    picks[targetIndex] = draggedChampion;
    
    // Refresh only the picks section
    refreshPicksSection();
  }
  
  // Remove existing listeners first to prevent duplicates
  const existingElements = document.querySelectorAll('.draggable');
  existingElements.forEach(el => {
    el.removeEventListener('dragstart', handleDragStart);
    el.removeEventListener('dragend', handleDragEnd);
  });
  
  // Add new event listeners to draggable elements
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach(el => {
    el.addEventListener('dragstart', handleDragStart);
    el.addEventListener('dragend', handleDragEnd);
  });
  
  // Add global drag over listener
  document.addEventListener('dragover', handleDragOver);
  document.addEventListener('drop', handleDrop);
}

/**
 * Refresh only the picks section without re-rendering the entire finish screen
 */
function refreshPicksSection() {
  const picksSection = document.getElementById('finish-picks');
  if (!picksSection) return;
  
  // Clear and rebuild picks section
  picksSection.innerHTML = '';
  
  // Create main container
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('team-picks-container');
  
  // Create teams header
  const teamsHeader = document.createElement('div');
  teamsHeader.classList.add('team-picks-header');
  const blueTitle = document.createElement('h3');
  blueTitle.textContent = 'Blue Picks';
  blueTitle.style.color = '#2196f3';
  const redTitle = document.createElement('h3');
  redTitle.textContent = 'Red Picks';
  redTitle.style.color = '#f44336';
  teamsHeader.appendChild(blueTitle);
  teamsHeader.appendChild(redTitle);
  mainContainer.appendChild(teamsHeader);
  
  // Create side-by-side container for both teams
  const teamsContainer = document.createElement('div');
  teamsContainer.style.display = 'flex';
  teamsContainer.style.gap = '80px';
  teamsContainer.style.justifyContent = 'center';
  teamsContainer.style.alignItems = 'flex-start';
  
  // Blue team container
  const blueTeamContainer = document.createElement('div');
  blueTeamContainer.style.display = 'flex';
  blueTeamContainer.style.flexDirection = 'column';
  blueTeamContainer.style.alignItems = 'center';
  
  // Blue team position labels
  const bluePositionLabels = document.createElement('div');
  bluePositionLabels.classList.add('position-labels');
  ['Top', 'Jungle', 'Mid', 'ADC', 'Support'].forEach(pos => {
    const label = document.createElement('span');
    const icon = document.createElement('img');
    icon.src = laneIcons[pos];
    icon.width = 16;
    icon.height = 16;
    icon.alt = pos;
    icon.style.marginRight = '4px';
    label.appendChild(icon);
    label.appendChild(document.createTextNode(pos));
    bluePositionLabels.appendChild(label);
  });
  blueTeamContainer.appendChild(bluePositionLabels);
  
  const blueRow = document.createElement('div');
  blueRow.classList.add('team-picks-row');
  blueRow.id = 'blue-picks-row';
  blueTeamContainer.appendChild(blueRow);
  
  // Red team container
  const redTeamContainer = document.createElement('div');
  redTeamContainer.style.display = 'flex';
  redTeamContainer.style.flexDirection = 'column';
  redTeamContainer.style.alignItems = 'center';
  
  // Red team position labels
  const redPositionLabels = document.createElement('div');
  redPositionLabels.classList.add('position-labels');
  ['Top', 'Jungle', 'Mid', 'ADC', 'Support'].forEach(pos => {
    const label = document.createElement('span');
    const icon = document.createElement('img');
    icon.src = laneIcons[pos];
    icon.width = 16;
    icon.height = 16;
    icon.alt = pos;
    icon.style.marginRight = '4px';
    label.appendChild(icon);
    label.appendChild(document.createTextNode(pos));
    redPositionLabels.appendChild(label);
  });
  redTeamContainer.appendChild(redPositionLabels);
  
  const redRow = document.createElement('div');
  redRow.classList.add('team-picks-row');
  redRow.id = 'red-picks-row';
  redTeamContainer.appendChild(redRow);
  
  // Fill positions (5 slots each)
  for (let i = 0; i < 5; i++) {
    // Blue team
    if (state.picks[1] && state.picks[1][i]) {
      const entry = buildFinishEntry(state.picks[1][i].name, true, 'blue');
      entry.dataset.position = i.toString();
      blueRow.appendChild(entry);
    } else {
      const dropZone = document.createElement('div');
      dropZone.classList.add('drop-zone', 'blue-drop');
      dropZone.textContent = 'Empty';
      dropZone.dataset.team = '1';
      dropZone.dataset.position = i.toString();
      blueRow.appendChild(dropZone);
    }
    
    // Red team
    if (state.picks[2] && state.picks[2][i]) {
      const entry = buildFinishEntry(state.picks[2][i].name, true, 'red');
      entry.dataset.position = i.toString();
      redRow.appendChild(entry);
    } else {
      const dropZone = document.createElement('div');
      dropZone.classList.add('drop-zone', 'red-drop');
      dropZone.textContent = 'Empty';
      dropZone.dataset.team = '2';
      dropZone.dataset.position = i.toString();
      redRow.appendChild(dropZone);
    }
  }
  
  teamsContainer.appendChild(blueTeamContainer);
  teamsContainer.appendChild(redTeamContainer);
  mainContainer.appendChild(teamsContainer);
  picksSection.appendChild(mainContainer);
  
  // Re-setup drag and drop after refresh
  setupDragAndDrop();
}

/**
 * Reset the draft state and UI to begin a new draft. This function clears
 * picks and bans, resets phase counters, shows the drafting interface,
 * hides the finish screen, and re-renders all UI components.
 */
function restartDraft() {
  // Reset state values
  state.bans = { 1: [], 2: [] };
  state.picks = { 1: [], 2: [] };
  state.currentPhase = 'ban1';
  state.ban1Turn = 0;
  state.pick1Turn = 0;
  state.ban2Turn = 0;
  state.pick2Turn = 0;

  // Stop finish music and restart draft music
  const finishMusic = document.getElementById('finish-music');
  const draftMusic = document.getElementById('draft-music');
  
  if (finishMusic) {
    finishMusic.pause();
    finishMusic.currentTime = 0;
  }
  
  if (draftMusic) {
    draftMusic.play().catch(error => {
      // Auto-play may be blocked
    });
  }

  // Hide finish screen and show draft UI
  const finishScreen = document.getElementById('finish-screen');
  if (finishScreen) finishScreen.style.display = 'none';
  const championListSection = document.getElementById('champion-list');
  const statusSection = document.getElementById('status-panel');
  const teamsContainer = document.getElementById('teams-container');
  const bansSection = document.getElementById('finish-bans');
  if (championListSection) championListSection.style.display = '';
  if (statusSection) statusSection.style.display = '';
  if (teamsContainer) teamsContainer.style.display = '';
  if (bansSection) bansSection.style.display = ''; // Re-show bans section for next draft

  // Re-render UI
  updateTeamLists();
  updatePhaseInfo();
  renderChampions();
  updateSidePanels();
  updateCompTracker();
}

/**
 * Display the current phase and which team's turn it is.
 */
function updatePhaseInfo() {
  if (state.currentPhase === 'done') {
    phaseInfo.textContent = 'Draft complete!';
    return;
  }
  const team = getCurrentTeam();
  // Map numeric team ID to human-readable name
  const teamName = team === 1 ? 'Blue' : team === 2 ? 'Red' : '';
  let phaseLabel;
  switch (state.currentPhase) {
    case 'ban1':
      phaseLabel = 'Ban Phase 1';
      break;
    case 'pick1':
      phaseLabel = 'Pick Phase 1';
      break;
    case 'ban2':
      phaseLabel = 'Ban Phase 2';
      break;
    case 'pick2':
      phaseLabel = 'Pick Phase 2';
      break;
    default:
      phaseLabel = '';
  }
  phaseInfo.textContent = `${phaseLabel}: ${teamName} Team's turn`;
}

/**
 * Handle a champion being clicked. Adds the champion to the appropriate
 * collection (ban or pick) and advances to the next turn or phase. Once
 * complete, triggers a re-render.
 * @param {Object} champ - Champion object selected by the user
 */
function handleChampionClick(champ) {
  if (state.currentPhase === 'done') return;

  const team = getCurrentTeam();

  // Capture the phase before modifying state so that we can play the correct
  // sound effect after processing. The phase string indicates whether the
  // selection is a ban or a pick.
  const phaseBefore = state.currentPhase;

  // Determine whether we are banning or picking and update state accordingly
  if (state.currentPhase === 'ban1') {
    state.bans[team].push(champ.name);
    state.ban1Turn++;
    if (state.ban1Turn >= banOrder1.length) {
      // Transition to first pick phase
      state.currentPhase = 'pick1';
    }
  } else if (state.currentPhase === 'pick1') {
    state.picks[team].push(champ);
    state.pick1Turn++;
    if (state.pick1Turn >= pickOrder1.length) {
      // Transition to second ban phase
      state.currentPhase = 'ban2';
    }
  } else if (state.currentPhase === 'ban2') {
    state.bans[team].push(champ.name);
    state.ban2Turn++;
    if (state.ban2Turn >= banOrder2.length) {
      // Transition to second pick phase
      state.currentPhase = 'pick2';
    }
  } else if (state.currentPhase === 'pick2') {
    state.picks[team].push(champ);
    state.pick2Turn++;
    if (state.pick2Turn >= pickOrder2.length) {
      // Draft complete
      state.currentPhase = 'done';
      // Trigger finish screen display after setting phase to done. This will
      // hide the drafting UI and show the summary screen with picks, bans
      // and comp counts. The finish screen is only shown once at the end.
      showFinishScreen();
    }
  }

  // Play appropriate sound after updating the draft state. Only play music
  // once on the first user interaction. We check the phase captured before
  // the update to determine whether the selection was a ban or a pick.
  try {
    if (!musicStarted && draftMusic) {
      draftMusic.volume = 0.25;
      draftMusic.play().then(() => {
        musicStarted = true;
      }).catch(console.error);
    }
    if (phaseBefore.startsWith('ban')) {
      if (banSound) {
        banSound.currentTime = 0;
        banSound.play().catch(console.error);
      }
    } else if (phaseBefore.startsWith('pick')) {
      if (pickSound) {
        pickSound.currentTime = 0;
        pickSound.play().catch(console.error);
      }
    }
  } catch (err) {
    // Autoplay may be blocked; ignore errors
  }

  // After updating, refresh UI
  updateTeamLists();
  updatePhaseInfo();
  renderChampions();
  updateSidePanels();
  updateCompTracker();
}

// Initialize the UI when DOM is ready
document.addEventListener('DOMContentLoaded', init);
  // After updating, refresh UI
  updateTeamLists();
  updatePhaseInfo();
  renderChampions();
  updateSidePanels();
  updateCompTracker();


// Initialize the UI when DOM is ready
document.addEventListener('DOMContentLoaded', init);
