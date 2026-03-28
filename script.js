const SKINS = [
  { id: "classic", name: "Classic", icon: "🦆", price: 0, rarity: "common", from: "default" },
  { id: "baby", name: "Baby", icon: "🐥", price: 120, rarity: "common", from: "shop" },
  { id: "chick", name: "Chick", icon: "🐤", price: 150, rarity: "common", from: "shop" },
  { id: "goose", name: "Goose", icon: "🪿", price: 220, rarity: "rare", from: "shop" },
  { id: "egg", name: "Egg Duck", icon: "🐣", price: 260, rarity: "rare", from: "shop" },
  { id: "flame", name: "Flame", icon: "🔥🦆", price: 0, rarity: "epic", from: "spin" },
  { id: "royal", name: "Royal", icon: "👑🦆", price: 0, rarity: "epic", from: "spin" },
  { id: "rainbow", name: "Rainbow", icon: "🌈🦆", price: 0, rarity: "legendary", from: "spin" },
  { id: "legend", name: "Vật phẩm hiếm", icon: "✨🦆", price: 0, rarity: "legendary", from: "spin" }
];

const AI_ICONS = ["🦆", "🐥", "🐤", "🪿", "🐣", "🦆", "🐤", "🪿"];
const DUCK_NAMES = [
  "Vịt Sấm Sét",
  "Vịt Thần Tốc",
  "Vịt Lửa",
  "Vịt Hoàng Gia",
  "Vịt Cầu Vồng",
  "Vịt Băng",
  "Vịt Bóng Đêm"
];

const SEASON_RANKS = [
  { min: 0, name: "Đồng V" },
  { min: 100, name: "Đồng IV" },
  { min: 200, name: "Đồng III" },
  { min: 300, name: "Đồng II" },
  { min: 400, name: "Đồng I" },
  { min: 500, name: "Bạc V" },
  { min: 600, name: "Bạc IV" },
  { min: 700, name: "Bạc III" },
  { min: 800, name: "Bạc II" },
  { min: 900, name: "Bạc I" },
  { min: 1000, name: "Vàng V" },
  { min: 1100, name: "Vàng IV" },
  { min: 1200, name: "Vàng III" },
  { min: 1300, name: "Vàng II" },
  { min: 1400, name: "Vàng I" },
  { min: 1500, name: "Bạch Kim V" },
  { min: 1600, name: "Bạch Kim IV" },
  { min: 1700, name: "Bạch Kim III" },
  { min: 1800, name: "Bạch Kim II" },
  { min: 1900, name: "Bạch Kim I" },
  { min: 2000, name: "Kim Cương V" },
  { min: 2100, name: "Kim Cương IV" },
  { min: 2200, name: "Kim Cương III" },
  { min: 2300, name: "Kim Cương II" },
  { min: 2400, name: "Kim Cương I" },
  { min: 2500, name: "Cao Thủ V" },
  { min: 2600, name: "Cao Thủ IV" },
  { min: 2700, name: "Cao Thủ III" },
  { min: 2800, name: "Cao Thủ II" },
  { min: 2900, name: "Cao Thủ I" },
  { min: 3000, name: "Quán Quân" }
];

const DAILY_QUESTS_TEMPLATE = [
  { id: "play3", title: "Chơi 3 trận", goal: 3, reward: 120, progress: 0, claimed: false },
  { id: "spin1", title: "Quay 1 lần", goal: 1, reward: 80, progress: 0, claimed: false },
  { id: "win1", title: "Top 1 một trận", goal: 1, reward: 150, progress: 0, claimed: false }
];

const ACHIEVEMENTS = [
  { id: "firstRace", title: "Khởi đầu", desc: "Chơi 1 trận", check: d => d.totalRaces >= 1 },
  { id: "fiveWins", title: "Tay đua xịn", desc: "Đạt 5 lần top 1", check: d => d.wins >= 5 },
  { id: "rich", title: "Đại gia vịt", desc: "Có 3000 xu", check: d => d.coins >= 3000 },
  { id: "collector", title: "Nhà sưu tập", desc: "Sở hữu 5 skin", check: d => d.ownedSkins.length >= 5 },
  { id: "streak3", title: "Chuỗi mạnh", desc: "Chuỗi thắng đạt 3", check: d => d.bestStreak >= 3 }
];

const SPIN_REWARDS = [
  { type: "coins", value: 30, label: "30 xu" },
  { type: "coins", value: 50, label: "50 xu" },
  { type: "skin", value: "royal", label: "Skin Royal" },
  { type: "skin", value: "flame", label: "Skin Flame" },
  { type: "skin", value: "rainbow", label: "Skin Rainbow" },
  { type: "skin", value: "legend", label: "Vật phẩm hiếm" }
];

const AVATAR_FRAMES = [
  { id: "common", name: "Khung thường", price: 0, className: "frame-common" },
  { id: "silver", name: "Khung bạc", price: 120, className: "frame-silver" },
  { id: "gold", name: "Khung vàng", price: 260, className: "frame-gold" },
  { id: "diamond", name: "Khung kim cương", price: 480, className: "frame-diamond" },
  { id: "fire", name: "Khung lửa", price: 680, className: "frame-fire" },
  { id: "neon", name: "Khung neon", price: 900, className: "frame-neon" }
];

const DEFAULT_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%23ffe29a'/%3E%3Ctext x='50' y='58' text-anchor='middle' font-size='42'%3E🦆%3C/text%3E%3C/svg%3E";
const FIXED_RACE_DISTANCE = 1800;

const playerNameInput = document.getElementById("playerNameInput");
const duckCountSelect = document.getElementById("duckCountSelect");
const betDuckSelect = document.getElementById("betDuckSelect");
const speedModeSelect = document.getElementById("speedModeSelect");
const fpsModeSelect = document.getElementById("fpsModeSelect");

const settingsFpsSelect = document.getElementById("settingsFpsSelect");
const settingsSpeedSelect = document.getElementById("settingsSpeedSelect");
const bgThemeSelect = document.getElementById("bgThemeSelect");
const effectsToggleBtn = document.getElementById("effectsToggleBtn");
const shakeToggleBtn = document.getElementById("shakeToggleBtn");

const coinsText = document.getElementById("coinsText");
const levelText = document.getElementById("levelText");
const streakText = document.getElementById("streakText");
const popupWinRateText = document.getElementById("popupWinRateText");
const popupWinsText = document.getElementById("popupWinsText");
const popupLossesText = document.getElementById("popupLossesText");
const popupProfitText = document.getElementById("popupProfitText");
const statusText = document.getElementById("statusText");

const trackLanes = document.getElementById("trackLanes");
const trackWrap = document.getElementById("trackWrap");
const trackScroll = document.getElementById("trackScroll");
const confettiLayer = document.getElementById("confettiLayer");
const countdownOverlay = document.getElementById("countdownOverlay");
const bossBanner = document.getElementById("bossBanner");

const questsList = document.getElementById("questsList");
const historyList = document.getElementById("historyList");
const shopGrid = document.getElementById("shopGrid");
const inventoryGrid = document.getElementById("inventoryGrid");
const achievementsGrid = document.getElementById("achievementsGrid");
const seasonBoard = document.getElementById("seasonBoard");
const seasonPointsText = document.getElementById("seasonPointsText");
const seasonRankText = document.getElementById("seasonRankText");
const seasonResetNote = document.getElementById("seasonResetNote");

const resultTitle = document.getElementById("resultTitle");
const resultReward = document.getElementById("resultReward");
const resultRanking = document.getElementById("resultRanking");

const wheelCore = document.getElementById("wheelCore");

const previewSkinIcon = document.getElementById("previewSkinIcon");
const previewSkinName = document.getElementById("previewSkinName");
const previewSkinRarity = document.getElementById("previewSkinRarity");
const previewSkinPrice = document.getElementById("previewSkinPrice");
const previewBuyBtn = document.getElementById("previewBuyBtn");

const openProfileBtn = document.getElementById("openProfileBtn");
const openProfileBtnBottom = document.getElementById("openProfileBtnBottom");
const openRaceBtn = document.getElementById("openRaceBtn");
const openHistoryBtn = document.getElementById("openHistoryBtn");
const openQuestBtn = document.getElementById("openQuestBtn");
const openShopBtn = document.getElementById("openShopBtn");
const openInventoryBtn = document.getElementById("openInventoryBtn");
const openSpinBtn = document.getElementById("openSpinBtn");
const openAchievementsBtn = document.getElementById("openAchievementsBtn");
const openSeasonBtn = document.getElementById("openSeasonBtn");
const openSettingsBtn = document.getElementById("openSettingsBtn");
const backHomeBtn = document.getElementById("backHomeBtn");

const startRaceBtn = document.getElementById("startRaceBtn");
const resetRaceBtn = document.getElementById("resetRaceBtn");
const spinOnceBtn = document.getElementById("spinOnceBtn");
const saveSettingsBtn = document.getElementById("saveSettingsBtn");
const resetDataBtn = document.getElementById("resetDataBtn");
const resetRankBtn = document.getElementById("resetRankBtn");

const raceSection = document.getElementById("raceSection");
const avatarInput = document.getElementById("avatarInput");
const playerAvatarTop = document.getElementById("playerAvatarTop");
const playerAvatarHome = document.getElementById("playerAvatarHome");
const playerAvatarProfile = document.getElementById("playerAvatarProfile");
const profileRankText = document.getElementById("profileRankText");
const profileRankPointsText = document.getElementById("profileRankPointsText");
const homeAvatarFrame = document.getElementById("homeAvatarFrame");
const topAvatarFrame = document.getElementById("topAvatarFrame");
const profileAvatarFrame = document.getElementById("profileAvatarFrame");
const avatarFrameGrid = document.getElementById("avatarFrameGrid");
const openAvatarPickerBtn = document.getElementById("openAvatarPickerBtn");
const openAvatarPickerBtnProfile = document.getElementById("openAvatarPickerBtnProfile");
const openAvatarFrameShopBtn = document.getElementById("openAvatarFrameShopBtn");

let ducks = [];
let ranking = [];
let raceRunning = false;
let animationId = null;
let lastFrameTime = 0;
let accumulator = 0;
let spinCooldown = false;
let selectedPreviewSkinId = null;
let bossDuckId = null;

let gameData = {
  playerName: "Người chơi",
  coins: 1000,
  exp: 0,
  totalRaces: 0,
  wins: 0,
  losses: 0,
  winStreak: 0,
  bestStreak: 0,
  profit: 0,
  ownedSkins: ["classic"],
  equippedSkin: "classic",
  history: [],
  fpsMode: "60",
  speedMode: "normal",
  bgTheme: "theme-default",
  effectsEnabled: true,
  shakeEnabled: true,
  questsDate: "",
  dailyQuests: [],
  seasonPoints: 0,
  weeklyResetAt: 0,
  avatar: DEFAULT_AVATAR,
  ownedAvatarFrames: ["common"],
  equippedAvatarFrame: "common"
};

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function saveGame() {
  localStorage.setItem("duckRaceMainScreenData", JSON.stringify(gameData));
}

function loadGame() {
  const raw = localStorage.getItem("duckRaceMainScreenData");
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    gameData = {
      ...gameData,
      ...parsed,
      ownedSkins: Array.isArray(parsed.ownedSkins) && parsed.ownedSkins.length ? parsed.ownedSkins : ["classic"],
      history: Array.isArray(parsed.history) ? parsed.history : [],
      dailyQuests: Array.isArray(parsed.dailyQuests) ? parsed.dailyQuests : [],
      ownedAvatarFrames: Array.isArray(parsed.ownedAvatarFrames) && parsed.ownedAvatarFrames.length ? parsed.ownedAvatarFrames : ["common"]
    };
  } catch (err) {
    console.log("Lỗi load save:", err);
  }
}

function ensureDailySystems() {
  const today = todayKey();
  if (gameData.questsDate !== today || !gameData.dailyQuests.length) {
    gameData.questsDate = today;
    gameData.dailyQuests = JSON.parse(JSON.stringify(DAILY_QUESTS_TEMPLATE));
  }
}

function ensureWeeklyReset() {
  const now = Date.now();
  const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  if (!gameData.weeklyResetAt) {
    gameData.weeklyResetAt = now + WEEK_MS;
    return;
  }
  if (now >= gameData.weeklyResetAt) {
    gameData.seasonPoints = 0;
    gameData.winStreak = 0;
    gameData.history = [];
    gameData.dailyQuests = JSON.parse(JSON.stringify(DAILY_QUESTS_TEMPLATE));
    gameData.questsDate = todayKey();
    gameData.weeklyResetAt = now + WEEK_MS;
    saveGame();
    setStatus("🔄 BXH mùa đã reset tuần mới.");
  }
}

function formatResetCountdown() {
  if (!gameData.weeklyResetAt) return "7 ngày";
  const diff = Math.max(0, gameData.weeklyResetAt - Date.now());
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  return `${days} ngày ${hours} giờ ${mins} phút`;
}

function applyTheme(theme) {
  document.body.classList.remove("theme-default", "theme-sunset", "theme-night", "theme-candy");
  document.body.classList.add(theme || "theme-default");
}

function getLevel() {
  return Math.floor(gameData.exp / 100) + 1;
}

function getSeasonRank(points) {
  let rank = SEASON_RANKS[0].name;
  for (const item of SEASON_RANKS) {
    if (points >= item.min) rank = item.name;
  }
  return rank;
}

function addExp(amount) {
  const before = getLevel();
  gameData.exp += amount;
  const after = getLevel();
  if (after > before) {
    const reward = (after - before) * 100;
    gameData.coins += reward;
    setStatus(`🎉 Lên level ${after}! Bạn nhận ${reward} xu.`);
  }
}

function getSkinById(id) {
  return SKINS.find(s => s.id === id) || SKINS[0];
}

function getAvatarFrameById(id) {
  return AVATAR_FRAMES.find(f => f.id === id) || AVATAR_FRAMES[0];
}

function rarityLabel(rarity) {
  if (rarity === "rare") return "Hiếm";
  if (rarity === "epic") return "Sử thi";
  if (rarity === "legendary") return "Huyền thoại";
  return "Thường";
}

function rarityClass(rarity) {
  if (rarity === "legendary") return "legendary";
  if (rarity === "epic") return "epic";
  if (rarity === "rare") return "rare";
  return "";
}

function speakBeep(freq = 500, duration = 100, type = "square", volume = 0.03) {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    setTimeout(() => {
      osc.stop();
      ctx.close();
    }, duration);
  } catch (e) {
    console.log("Audio lỗi:", e);
  }
}

function playWinSound() {
  speakBeep(700, 120, "triangle", 0.04);
  setTimeout(() => speakBeep(900, 140, "triangle", 0.04), 140);
  setTimeout(() => speakBeep(1100, 180, "triangle", 0.04), 300);
}

function playLoseSound() {
  speakBeep(320, 160, "sawtooth", 0.03);
  setTimeout(() => speakBeep(240, 220, "sawtooth", 0.03), 170);
}

function setStatus(message) {
  if (statusText) statusText.textContent = message;
}

function applyAvatar() {
  const src = gameData.avatar || DEFAULT_AVATAR;
  if (playerAvatarTop) playerAvatarTop.src = src;
  if (playerAvatarHome) playerAvatarHome.src = src;
  if (playerAvatarProfile) playerAvatarProfile.src = src;
}

function applyAvatarFrame() {
  const frame = getAvatarFrameById(gameData.equippedAvatarFrame);
  if (homeAvatarFrame) homeAvatarFrame.className = `avatar-frame-wrap ${frame.className}`;
  if (topAvatarFrame) topAvatarFrame.className = `avatar-frame-wrap ${frame.className}`;
  if (profileAvatarFrame) profileAvatarFrame.className = `avatar-frame-wrap ${frame.className}`;
}

function showRankUpPopup(oldRank, newRank) {
  const popup = document.createElement("div");
  popup.className = "rank-up-popup";
  popup.innerHTML = `
    <div class="rank-up-card">
      <h3>🎉 Chúc mừng!</h3>
      <p>Bạn đã lên từ ${oldRank} → ${newRank}</p>
    </div>
  `;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 2200);
}

function showRankPointFx(amount) {
  const layer = document.createElement("div");
  layer.className = "rank-points-layer";
  const el = document.createElement("div");
  el.className = "rank-point-fx";
  el.textContent = `${amount > 0 ? "+" : ""}${amount} RP`;
  el.style.left = `${46 + Math.random() * 8}%`;
  el.style.top = `${46 + Math.random() * 6}%`;
  layer.appendChild(el);
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 1100);
}

function addSeasonPointsByPlace(place) {
  let delta = 0;
  if (place === 1) delta = 20;
  else if (place === 2) delta = 15;
  else if (place === 3) delta = 10;
  else if (place === 4) delta = -5;
  else if (place === 5) delta = -10;
  else if (place === 6) delta = -15;
  else delta = -20;

  const oldPoints = gameData.seasonPoints;
  const oldRank = getSeasonRank(oldPoints);
  gameData.seasonPoints = Math.max(0, gameData.seasonPoints + delta);
  const newRank = getSeasonRank(gameData.seasonPoints);

  showRankPointFx(delta);

  if (newRank !== oldRank) {
    showRankUpPopup(oldRank, newRank);
    speakBeep(950, 140, "triangle", 0.05);
    setTimeout(() => speakBeep(1200, 180, "triangle", 0.05), 170);
  }

  return delta;
}

function updateUI() {
  const level = getLevel();
  const winRate = gameData.totalRaces === 0 ? 0 : Math.round((gameData.wins / gameData.totalRaces) * 100);
  const rankName = getSeasonRank(gameData.seasonPoints);

  if (coinsText) coinsText.textContent = gameData.coins;
  if (levelText) levelText.textContent = level;
  if (streakText) streakText.textContent = gameData.winStreak;

  if (popupWinRateText) popupWinRateText.textContent = `${winRate}%`;
  if (popupWinsText) popupWinsText.textContent = gameData.wins;
  if (popupLossesText) popupLossesText.textContent = gameData.losses;
  if (popupProfitText) popupProfitText.textContent = gameData.profit >= 0 ? `+${gameData.profit}` : `${gameData.profit}`;

  if (seasonPointsText) seasonPointsText.textContent = gameData.seasonPoints;
  if (seasonRankText) seasonRankText.textContent = rankName;
  if (profileRankText) profileRankText.textContent = rankName;
  if (profileRankPointsText) profileRankPointsText.textContent = `${gameData.seasonPoints} RP`;
  if (seasonResetNote) seasonResetNote.textContent = formatResetCountdown();

  if (fpsModeSelect) fpsModeSelect.value = gameData.fpsMode;
  if (speedModeSelect) speedModeSelect.value = gameData.speedMode;
  if (settingsFpsSelect) settingsFpsSelect.value = gameData.fpsMode;
  if (settingsSpeedSelect) settingsSpeedSelect.value = gameData.speedMode;
  if (bgThemeSelect) bgThemeSelect.value = gameData.bgTheme || "theme-default";
  if (effectsToggleBtn) effectsToggleBtn.textContent = gameData.effectsEnabled ? "Bật" : "Tắt";
  if (shakeToggleBtn) shakeToggleBtn.textContent = gameData.shakeEnabled ? "Bật" : "Tắt";

  applyTheme(gameData.bgTheme || "theme-default");
  applyAvatar();
  applyAvatarFrame();
}

function populateDuckOptions() {
  if (!betDuckSelect || !duckCountSelect) return;
  const count = Number(duckCountSelect.value);
  const oldValue = betDuckSelect.value;
  betDuckSelect.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const duckName = DUCK_NAMES[i] || `Vịt ${i + 1}`;
    const option = document.createElement("option");
    option.value = i;
    option.textContent = duckName;
    betDuckSelect.appendChild(option);
  }
  if (oldValue && Number(oldValue) < count) betDuckSelect.value = oldValue;
}

function createTrack() {
  if (!trackLanes || !trackWrap || !duckCountSelect || !betDuckSelect) return;

  const count = Number(duckCountSelect.value);
  const chosenDuck = Number(betDuckSelect.value || 0);
  const equippedSkin = getSkinById(gameData.equippedSkin);

  ducks = [];
  ranking = [];
  trackLanes.innerHTML = "";
  trackWrap.style.minHeight = `${count * 82}px`;

  bossDuckId = Math.random() < 0.22 ? Math.floor(Math.random() * count) : null;
  if (bossBanner) bossBanner.classList.toggle("hidden", bossDuckId === null);

  for (let i = 0; i < count; i++) {
    const lane = document.createElement("div");
    lane.className = "lane";

    const label = document.createElement("div");
    label.className = "lane-label";
    const duckName = DUCK_NAMES[i] || `Vịt ${i + 1}`;
    label.textContent = i === bossDuckId ? `${duckName} 👑 Boss` : duckName;

    const duck = document.createElement("div");
    duck.className = "duck";
    duck.style.left = "18px";

    const playerDuck = i === chosenDuck;
    let icon = playerDuck ? equippedSkin.icon : AI_ICONS[i % AI_ICONS.length];
    if (i === bossDuckId) icon = "👑🦆";

    duck.textContent = icon;

    if (playerDuck && (equippedSkin.rarity === "epic" || equippedSkin.rarity === "legendary")) duck.classList.add("rare");
    if (i === bossDuckId) duck.classList.add("rare");

    const basePower = 0.9 + Math.random() * 0.35;
    const sprintChance = 0.08 + Math.random() * 0.15;
    const sprintPower = 1.6 + Math.random() * 2.8;
    const stability = 0.82 + Math.random() * 0.45;
    const startBurstDuration = 70 + Math.floor(Math.random() * 90);
    const startBurstPower = 0.8 + Math.random() * 2.6;
    const startBurstType = Math.random();

    ducks.push({
      id: i,
      name: duckName,
      icon,
      el: duck,
      pos: 18,
      finished: false,
      playerDuck,
      isBoss: i === bossDuckId,
      basePower: i === bossDuckId ? basePower + 0.12 : basePower,
      sprintChance: i === bossDuckId ? sprintChance + 0.03 : sprintChance,
      sprintPower: i === bossDuckId ? sprintPower + 0.5 : sprintPower,
      stability: i === bossDuckId ? stability + 0.08 : stability,
      aiPhase: 0,
      startBurstDuration,
      startBurstPower: i === bossDuckId ? startBurstPower + 0.35 : startBurstPower,
      startBurstType,
      pacingSeed: Math.random() * 1000,
      catchupSkill: 0.7 + Math.random() * 0.8,
      fatiguePoint: 0.52 + Math.random() * 0.22
    });

    lane.appendChild(label);
    lane.appendChild(duck);
    trackLanes.appendChild(lane);
  }
}

function getFinishPos() {
  return FIXED_RACE_DISTANCE;
}

function getVisibleFinishPos() {
  return trackWrap ? trackWrap.scrollWidth - 130 : 1000;
}

function getRaceTick() {
  const mobile = window.innerWidth <= 768;
  if (mobile) return 1000 / 60;
  return gameData.fpsMode === "120" ? 1000 / 120 : 1000 / 60;
}

function speedMultiplier() {
  if (gameData.speedMode === "slow") return 0.8;
  if (gameData.speedMode === "fast") return 1.25;
  if (gameData.speedMode === "crazy") return 1.6;
  return 1;
}

function launchConfetti() {
  if (!gameData.effectsEnabled || !confettiLayer) return;
  confettiLayer.innerHTML = "";
  const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#8338ec", "#ff9f1c"];
  const count = window.innerWidth <= 768 ? 16 : 42;

  for (let i = 0; i < count; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = `${Math.random() * 100}%`;
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = `${Math.random() * 0.45}s`;
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(c);
  }

  setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 3200);
}

function spawnDust(duck) {
  if (!gameData.effectsEnabled || !trackWrap) return;
  if (window.innerWidth <= 768 && Math.random() < 0.7) return;

  const dust = document.createElement("div");
  dust.className = "dust";
  dust.style.left = `${Math.max(0, duck.el.offsetLeft)}px`;
  dust.style.top = `${duck.el.offsetTop + 32}px`;
  trackWrap.appendChild(dust);
  setTimeout(() => dust.remove(), 380);
}

function renderHistory() {
  if (!historyList) return;
  if (!gameData.history.length) {
    historyList.innerHTML = `<div class="history-item">Chưa có hoạt động nào</div>`;
    return;
  }

  historyList.innerHTML = gameData.history.slice(0, 12).map(item => `
    <div class="history-item">
      <strong>${item.title}</strong>
      <div class="muted">${item.desc}</div>
    </div>
  `).join("");
}

function addHistory(title, desc) {
  gameData.history.unshift({ title, desc, time: Date.now() });
  if (gameData.history.length > 30) gameData.history = gameData.history.slice(0, 30);
  renderHistory();
}

function renderQuests() {
  if (!questsList) return;
  questsList.innerHTML = gameData.dailyQuests.map(q => {
    const percent = Math.min(100, Math.round((q.progress / q.goal) * 100));
    return `
      <div class="quest-item">
        <div class="quest-top">
          <strong>${q.title}</strong>
          <span>${q.progress}/${q.goal}</span>
        </div>
        <div class="progress-mini">
          <div class="progress-mini-fill" style="width:${percent}%"></div>
        </div>
        <button class="card-btn ${q.claimed || q.progress < q.goal ? "gray" : ""}"
          ${q.claimed || q.progress < q.goal ? "disabled" : ""}
          onclick="claimQuestReward('${q.id}')">
          ${q.claimed ? "Đã nhận" : `Nhận ${q.reward} xu`}
        </button>
      </div>
    `;
  }).join("");
}

window.claimQuestReward = function (id) {
  const quest = gameData.dailyQuests.find(q => q.id === id);
  if (!quest || quest.claimed || quest.progress < quest.goal) return;
  quest.claimed = true;
  gameData.coins += quest.reward;
  gameData.profit += quest.reward;
  addHistory("🎁 Nhiệm vụ ngày", `Nhận ${quest.reward} xu từ nhiệm vụ "${quest.title}"`);
  setStatus(`✅ Đã nhận ${quest.reward} xu từ nhiệm vụ ngày.`);
  speakBeep(820, 120, "triangle", 0.04);
  updateUI();
  renderQuests();
  saveGame();
};

function incrementQuest(id, amount = 1) {
  const quest = gameData.dailyQuests.find(q => q.id === id);
  if (!quest || quest.claimed) return;
  quest.progress = Math.min(quest.goal, quest.progress + amount);
}

function renderShop() {
  if (!shopGrid) return;
  const skins = SKINS.filter(s => s.from === "shop");
  shopGrid.innerHTML = skins.map(skin => {
    const owned = gameData.ownedSkins.includes(skin.id);
    return `
      <div class="shop-item ${rarityClass(skin.rarity)}">
        <div class="skin-icon">${skin.icon}</div>
        <div class="skin-name">${skin.name}</div>
        <div class="skin-rarity">${rarityLabel(skin.rarity)}</div>
        <div class="skin-price">${skin.price} xu</div>
        <button class="card-btn preview" onclick="previewSkin('${skin.id}')">👀 Xem trước</button>
        <button class="card-btn ${owned ? "gray" : ""}" ${owned ? "disabled" : ""} onclick="buySkin('${skin.id}')">
          ${owned ? "Đã sở hữu" : "Mua skin"}
        </button>
      </div>
    `;
  }).join("");
}

function renderInventory() {
  if (!inventoryGrid) return;
  const skins = SKINS.filter(s => gameData.ownedSkins.includes(s.id));
  inventoryGrid.innerHTML = skins.map(skin => {
    const equipped = gameData.equippedSkin === skin.id;
    return `
      <div class="inventory-item ${rarityClass(skin.rarity)}">
        <div class="skin-icon">${skin.icon}</div>
        <div class="skin-name">${skin.name}</div>
        <div class="skin-rarity">${rarityLabel(skin.rarity)}</div>
        <button class="card-btn ${equipped ? "gray" : "secondary"}" ${equipped ? "disabled" : ""} onclick="equipSkin('${skin.id}')">
          ${equipped ? "Đang dùng" : "Trang bị"}
        </button>
      </div>
    `;
  }).join("");
}

function renderAvatarFrameShop() {
  if (!avatarFrameGrid) return;
  avatarFrameGrid.innerHTML = AVATAR_FRAMES.map(frame => {
    const owned = gameData.ownedAvatarFrames.includes(frame.id);
    const equipped = gameData.equippedAvatarFrame === frame.id;
    return `
      <div class="avatar-frame-item">
        <div class="avatar-frame-preview avatar-frame-wrap ${frame.className}">
          <img class="round-avatar" src="${gameData.avatar || DEFAULT_AVATAR}" alt="${frame.name}">
        </div>
        <div class="avatar-frame-name">${frame.name}</div>
        <div class="avatar-frame-price">${frame.price === 0 ? "Miễn phí" : `${frame.price} xu`}</div>
        <button class="card-btn ${equipped ? "gray" : owned ? "secondary" : ""}"
          ${equipped ? "disabled" : ""}
          onclick="${owned ? `equipAvatarFrame('${frame.id}')` : `buyAvatarFrame('${frame.id}')`}">
          ${equipped ? "Đang dùng" : owned ? "Trang bị" : "Mua"}
        </button>
      </div>
    `;
  }).join("");
}

window.previewSkin = function (skinId) {
  const skin = getSkinById(skinId);
  selectedPreviewSkinId = skinId;
  if (previewSkinIcon) previewSkinIcon.textContent = skin.icon;
  if (previewSkinName) previewSkinName.textContent = skin.name;
  if (previewSkinRarity) previewSkinRarity.textContent = rarityLabel(skin.rarity);
  if (previewSkinPrice) previewSkinPrice.textContent = skin.price ? `${skin.price} xu` : "Skin đặc biệt";
  if (previewBuyBtn) {
    previewBuyBtn.disabled = gameData.ownedSkins.includes(skin.id);
    previewBuyBtn.textContent = gameData.ownedSkins.includes(skin.id) ? "Đã sở hữu" : "🛍️ Mua ngay";
  }
  openModal("previewModal");
};

window.buySkin = function (skinId) {
  const skin = getSkinById(skinId);
  if (!skin || gameData.ownedSkins.includes(skin.id)) return;
  if (gameData.coins < skin.price) {
    setStatus("Không đủ xu để mua skin này.");
    return;
  }
  gameData.coins -= skin.price;
  gameData.profit -= skin.price;
  gameData.ownedSkins.push(skin.id);
  addHistory("🛒 Mua skin", `Đã mua skin ${skin.name}`);
  setStatus(`🛍️ Đã mua skin ${skin.name}.`);
  speakBeep(700, 120, "triangle", 0.04);
  updateUI();
  renderShop();
  renderInventory();
  saveGame();
};

window.equipSkin = function (skinId) {
  if (!gameData.ownedSkins.includes(skinId)) return;
  gameData.equippedSkin = skinId;
  createTrack();
  addHistory("✨ Trang bị skin", `Đang dùng skin ${getSkinById(skinId).name}`);
  setStatus(`✨ Đã trang bị skin ${getSkinById(skinId).name}.`);
  renderInventory();
  saveGame();
};

window.buyAvatarFrame = function (frameId) {
  const frame = getAvatarFrameById(frameId);
  if (!frame || gameData.ownedAvatarFrames.includes(frame.id)) return;
  if (gameData.coins < frame.price) {
    setStatus("Không đủ xu để mua khung avatar.");
    return;
  }
  gameData.coins -= frame.price;
  gameData.profit -= frame.price;
  gameData.ownedAvatarFrames.push(frame.id);
  gameData.equippedAvatarFrame = frame.id;
  applyAvatarFrame();
  updateUI();
  renderAvatarFrameShop();
  saveGame();
  setStatus(`🖼️ Đã mua ${frame.name}.`);
};

window.equipAvatarFrame = function (frameId) {
  if (!gameData.ownedAvatarFrames.includes(frameId)) return;
  gameData.equippedAvatarFrame = frameId;
  applyAvatarFrame();
  renderAvatarFrameShop();
  saveGame();
  setStatus(`✨ Đã trang bị ${getAvatarFrameById(frameId).name}.`);
};

function renderAchievements() {
  if (!achievementsGrid) return;
  achievementsGrid.innerHTML = ACHIEVEMENTS.map(a => {
    const unlocked = a.check(gameData);
    return `
      <div class="achievement-item ${unlocked ? "" : "locked"}">
        <div class="achievement-title">${unlocked ? "🏆" : "🔒"} ${a.title}</div>
        <div class="achievement-desc">${a.desc}</div>
      </div>
    `;
  }).join("");
}

function renderSeasonBoard() {
  if (!seasonBoard) return;
  const playerPoints = gameData.seasonPoints;
  const playerName = gameData.playerName || "Bạn";
  const board = [
    { name: "Duck Master", points: 3400 },
    { name: "Golden Goose", points: 2900 },
    { name: "Rainbow Rider", points: 2400 },
    { name: playerName, points: playerPoints },
    { name: "Tiny Quack", points: 520 },
    { name: "Lucky Wing", points: 310 }
  ].sort((a, b) => b.points - a.points);

  seasonBoard.innerHTML = board.map((item, index) => `
    <div class="season-item">
      <strong>#${index + 1} ${item.name}</strong>
      <span>${item.points} điểm</span>
    </div>
  `).join("");
}

function getRewardByPlace(place) {
  if (place === 1) return 100;
  if (place === 2) return 50;
  if (place === 3) return 25;
  return 10;
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("hidden");
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

function showRacePanel() {
  if (!raceSection) return;
  raceSection.classList.remove("hidden-panel");
  raceSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function hideRacePanel() {
  if (!raceSection) return;
  raceSection.classList.add("hidden-panel");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResultModal(playerPlace, reward, rankDelta) {
  if (resultTitle) resultTitle.textContent = `Vịt bạn chọn về hạng ${playerPlace}!`;
  if (resultReward) resultReward.textContent = `${reward > 0 ? "+" : ""}${reward} xu | ${rankDelta > 0 ? "+" : ""}${rankDelta} RP`;
  if (resultRanking) {
    resultRanking.innerHTML = ranking.map((duck) => {
      const mark = duck.playerDuck ? "⭐ " : "";
      const boss = duck.isBoss ? "👑 " : "";
      return `<li>${mark}${boss}${duck.icon} ${duck.name}</li>`;
    }).join("");
  }
  openModal("resultModal");
}

function resetAllData() {
  localStorage.removeItem("duckRaceMainScreenData");
  gameData = {
    playerName: "Người chơi",
    coins: 1000,
    exp: 0,
    totalRaces: 0,
    wins: 0,
    losses: 0,
    winStreak: 0,
    bestStreak: 0,
    profit: 0,
    ownedSkins: ["classic"],
    equippedSkin: "classic",
    history: [],
    fpsMode: "60",
    speedMode: "normal",
    bgTheme: "theme-default",
    effectsEnabled: true,
    shakeEnabled: true,
    questsDate: "",
    dailyQuests: [],
    seasonPoints: 0,
    weeklyResetAt: 0,
    avatar: DEFAULT_AVATAR,
    ownedAvatarFrames: ["common"],
    equippedAvatarFrame: "common"
  };
  ensureDailySystems();
  ensureWeeklyReset();
  if (playerNameInput) playerNameInput.value = "";
  updateUI();
  renderHistory();
  renderQuests();
  renderShop();
  renderInventory();
  renderAchievements();
  renderSeasonBoard();
  renderAvatarFrameShop();
  createTrack();
  saveGame();
  setStatus("Đã xóa toàn bộ dữ liệu game.");
}

function resetRankOnly() {
  gameData.seasonPoints = 0;
  gameData.weeklyResetAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  saveGame();
  updateUI();
  renderSeasonBoard();
  setStatus("🔄 Đã reset rank mùa.");
}

function countdownSequence(callback) {
  if (!countdownOverlay) {
    callback();
    return;
  }
  const steps = ["3", "2", "1", "GO!"];
  let i = 0;
  countdownOverlay.style.display = "grid";

  function next() {
    countdownOverlay.textContent = steps[i];
    if (gameData.shakeEnabled && i < 3 && trackWrap) {
      trackWrap.classList.remove("shake");
      void trackWrap.offsetWidth;
      trackWrap.classList.add("shake");
    }
    speakBeep(550 + i * 120, 120, "square", 0.03);
    i++;
    if (i < steps.length) {
      setTimeout(next, 650);
    } else {
      setTimeout(() => {
        countdownOverlay.style.display = "none";
        callback();
      }, 500);
    }
  }

  next();
}

function finishRace() {
  raceRunning = false;
  cancelAnimationFrame(animationId);
  ducks.forEach(d => d.el.classList.remove("running", "boosted"));

  const playerDuckId = Number(betDuckSelect?.value || 0);
  const playerPlace = ranking.findIndex(d => d.id === playerDuckId) + 1 || ducks.length;
  const reward = getRewardByPlace(playerPlace);
  const winner = ranking[0];
  const playerDuck = ducks.find(d => d.id === playerDuckId);

  gameData.totalRaces += 1;
  gameData.coins += reward;
  gameData.profit += reward;
  addExp(playerPlace === 1 ? 30 : playerPlace === 2 ? 20 : 10);

  const rankDelta = addSeasonPointsByPlace(playerPlace);

  if (playerPlace === 1) {
    gameData.wins += 1;
    gameData.winStreak += 1;
    gameData.bestStreak = Math.max(gameData.bestStreak, gameData.winStreak);
    incrementQuest("win1");
    setStatus(`🎉 ${playerDuck.name} về nhất! Bạn nhận ${reward} xu và ${rankDelta} RP!`);
    launchConfetti();
    playWinSound();
  } else {
    gameData.losses += 1;
    gameData.winStreak = 0;
    setStatus(`🏁 ${playerDuck.name} về hạng ${playerPlace}! ${rankDelta > 0 ? "Nhận" : "Bị trừ"} ${Math.abs(rankDelta)} RP.`);
    playLoseSound();
  }

  if (winner) winner.el.classList.add("winner");

  incrementQuest("play3");
  addHistory("🏁 Kết thúc trận", `${playerDuck.icon} ${playerDuck.name} về hạng ${playerPlace}, ${rankDelta > 0 ? "+" : ""}${rankDelta} RP`);
  updateUI();
  renderQuests();
  renderAchievements();
  renderSeasonBoard();
  showResultModal(playerPlace, reward, rankDelta);
  saveGame();

  if (startRaceBtn) startRaceBtn.disabled = false;
  if (resetRaceBtn) resetRaceBtn.disabled = false;
}

function getAIMove(duck, finishPos, mult) {
  duck.aiPhase += 1;
  const progress = duck.pos / finishPos;
  const placeNow = 1 + ducks.filter(d => d !== duck && d.pos > duck.pos).length;
  const total = ducks.length || 1;
  const behindRatio = (placeNow - 1) / Math.max(1, total - 1);

  let step = (1.1 + Math.random() * 3.2) * duck.basePower * duck.stability;
  let luckyBoost = false;

  if (duck.aiPhase <= duck.startBurstDuration) {
    const burstRemain = 1 - duck.aiPhase / duck.startBurstDuration;
    let burstFactor = duck.startBurstPower * burstRemain;

    if (duck.startBurstType < 0.33) {
      burstFactor *= 1.15;
    } else if (duck.startBurstType < 0.66) {
      burstFactor *= 0.85 + Math.sin(duck.aiPhase * 0.12) * 0.35;
    } else {
      burstFactor *= 0.7 + burstRemain * 0.9;
    }

    step += Math.max(0, burstFactor);
    luckyBoost = true;
  }

  const pacing = Math.sin((duck.aiPhase + duck.pacingSeed) * 0.09) * 0.42;
  step += pacing;

  if (progress > 0.18 && progress < duck.fatiguePoint) {
    step += (Math.random() - 0.5) * 0.9;
  }

  if (progress >= 0.55 && behindRatio > 0.45) {
    step += duck.catchupSkill * behindRatio * (0.8 + Math.random() * 1.6);
  }

  if (Math.random() < duck.sprintChance) {
    step += duck.sprintPower * (0.7 + Math.random() * 0.7);
    luckyBoost = true;
  }

  if (duck.isBoss) {
    step += 0.3 + Math.random() * 0.5;
  }

  if (progress > 0.82) {
    step += (0.4 + Math.random() * 1.2) * (1 - progress + 0.25);
  }

  step *= mult;
  return { step: Math.max(0.6, step), luckyBoost };
}

function raceStep() {
  const finishPos = FIXED_RACE_DISTANCE;
  const visibleFinish = trackWrap ? trackWrap.scrollWidth - 130 : 1000;
  const mult = speedMultiplier();

  ducks.forEach((duck) => {
    if (duck.finished) return;
    duck.el.classList.remove("boosted");
    const move = getAIMove(duck, finishPos, mult);
    duck.pos += move.step;
    if (move.luckyBoost) duck.el.classList.add("boosted");

    const visiblePos = Math.min((duck.pos / finishPos) * visibleFinish, visibleFinish);
    duck.el.style.left = `${visiblePos}px`;

    if (Math.random() < (window.innerWidth <= 768 ? 0.08 : 0.22)) spawnDust(duck);

    if (duck.pos >= finishPos) {
      duck.pos = finishPos;
      duck.finished = true;
      ranking.push(duck);
      speakBeep(600 + ranking.length * 100, 70, "triangle", 0.025);
      duck.el.style.left = `${visibleFinish}px`;
    }
  });

  const playerDuck = ducks.find(d => d.playerDuck);
  if (playerDuck && trackScroll) {
    const visiblePos = Math.min((playerDuck.pos / finishPos) * visibleFinish, visibleFinish);
    const target = Math.max(0, visiblePos - trackScroll.clientWidth * 0.35);
    trackScroll.scrollLeft += (target - trackScroll.scrollLeft) * 0.08;
  }

  if (ranking.length === ducks.length) finishRace();
}

function raceLoop(timestamp) {
  if (!raceRunning) return;
  if (!lastFrameTime) lastFrameTime = timestamp;
  const delta = timestamp - lastFrameTime;
  lastFrameTime = timestamp;
  accumulator += delta;

  const tick = getRaceTick();
  while (accumulator >= tick) {
    raceStep();
    accumulator -= tick;
    if (!raceRunning) break;
  }

  if (raceRunning) animationId = requestAnimationFrame(raceLoop);
}

function startActualRace() {
  raceRunning = true;
  ranking = [];
  lastFrameTime = 0;
  accumulator = 0;

  ducks.forEach(d => {
    d.pos = 18;
    d.finished = false;
    d.aiPhase = 0;
    d.el.style.left = "18px";
    d.el.classList.add("running");
    d.el.classList.remove("winner");
  });

  if (trackScroll) trackScroll.scrollLeft = 0;
  setStatus(`🚀 Cuộc đua bắt đầu ở ${gameData.fpsMode} FPS!`);
  animationId = requestAnimationFrame(raceLoop);
}

function startRace() {
  if (raceRunning) return;
  gameData.playerName = (playerNameInput?.value || "").trim() || "Người chơi";
  createTrack();

  if (startRaceBtn) startRaceBtn.disabled = true;
  if (resetRaceBtn) resetRaceBtn.disabled = true;

  countdownSequence(() => {
    startActualRace();
    if (startRaceBtn) startRaceBtn.disabled = true;
    if (resetRaceBtn) resetRaceBtn.disabled = false;
  });

  saveGame();
}

function resetRace() {
  cancelAnimationFrame(animationId);
  raceRunning = false;
  ranking = [];
  createTrack();
  if (trackScroll) trackScroll.scrollLeft = 0;
  setStatus("Đã reset đường đua.");
  if (startRaceBtn) startRaceBtn.disabled = false;
}

function claimSpinReward(reward) {
  let rewardMessage = "";
  if (reward.type === "coins") {
    gameData.coins += reward.value;
    gameData.profit += reward.value;
    rewardMessage = `🎡 Bạn nhận ${reward.value} xu từ vòng quay.`;
    addHistory("🎡 Vòng quay", `Nhận ${reward.value} xu`);
  } else {
    const skin = getSkinById(reward.value);
    if (!gameData.ownedSkins.includes(skin.id)) {
      gameData.ownedSkins.push(skin.id);
      rewardMessage = `🎡 Bạn quay trúng skin ${skin.name}!`;
      addHistory("🎡 Vòng quay", `Nhận skin ${skin.name}`);
    } else {
      gameData.coins += 80;
      gameData.profit += 80;
      rewardMessage = `🎡 Trùng skin ${skin.name}, đổi thành 80 xu.`;
      addHistory("🎡 Vòng quay", `Trùng skin ${skin.name}, đổi thành 80 xu`);
    }
  }

  const bonusGift = Math.floor(Math.random() * 71) + 30;
  gameData.coins += bonusGift;
  gameData.profit += bonusGift;
  addHistory("🎁 Quà tự nhận", `Nhận thêm ${bonusGift} xu sau vòng quay`);

  incrementQuest("spin1");
  updateUI();
  renderQuests();
  renderShop();
  renderInventory();
  renderAchievements();
  saveGame();
  setStatus(`${rewardMessage} + Quà thêm ${bonusGift} xu.`);
}

function spinWheel() {
  if (raceRunning || spinCooldown || !spinOnceBtn || !wheelCore) return;
  spinCooldown = true;
  spinOnceBtn.disabled = true;

  const rewardIndex = Math.floor(Math.random() * SPIN_REWARDS.length);
  const reward = SPIN_REWARDS[rewardIndex];

  const segmentAngle = 360 / SPIN_REWARDS.length;
  const centerAngle = rewardIndex * segmentAngle + segmentAngle / 2;
  const extra = 360 * (5 + Math.floor(Math.random() * 3));
  const final = extra + (360 - centerAngle);

  wheelCore.style.transform = `rotate(${final}deg)`;
  speakBeep(500, 110, "square", 0.03);

  setTimeout(() => {
    claimSpinReward(reward);
    spinCooldown = false;
    spinOnceBtn.disabled = false;
    speakBeep(920, 140, "triangle", 0.04);
  }, 4300);
}

function saveSettings() {
  if (settingsFpsSelect) gameData.fpsMode = settingsFpsSelect.value;
  if (settingsSpeedSelect) gameData.speedMode = settingsSpeedSelect.value;
  if (bgThemeSelect) gameData.bgTheme = bgThemeSelect.value;
  applyTheme(gameData.bgTheme);
  saveGame();
  setStatus("⚙️ Đã lưu cài đặt game.");
  closeModal("settingsModal");
}

function bindModalButtons() {
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });

  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.classList.add("hidden");
    });
  });
}

function syncControlValuesToSettings() {
  if (settingsFpsSelect && fpsModeSelect) settingsFpsSelect.value = fpsModeSelect.value;
  if (settingsSpeedSelect && speedModeSelect) settingsSpeedSelect.value = speedModeSelect.value;
  if (bgThemeSelect) bgThemeSelect.value = gameData.bgTheme || "theme-default";
}

function bindAvatarInputs() {
  const openPicker = () => avatarInput?.click();
  openAvatarPickerBtn?.addEventListener("click", openPicker);
  openAvatarPickerBtnProfile?.addEventListener("click", openPicker);
  playerAvatarHome?.addEventListener("click", openPicker);

  avatarInput?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      gameData.avatar = String(reader.result);
      applyAvatar();
      renderAvatarFrameShop();
      saveGame();
      setStatus("📸 Đã đổi avatar.");
    };
    reader.readAsDataURL(file);
  });
}

function init() {
  loadGame();
  ensureDailySystems();
  ensureWeeklyReset();

  if (playerNameInput) {
    playerNameInput.value = gameData.playerName && gameData.playerName !== "Người chơi"
      ? gameData.playerName
      : "";
  }

  updateUI();
  renderHistory();
  renderQuests();
  renderShop();
  renderInventory();
  renderAchievements();
  renderSeasonBoard();
  renderAvatarFrameShop();
  bindModalButtons();
  bindAvatarInputs();

  if (duckCountSelect) duckCountSelect.value = "4";
  populateDuckOptions();
  createTrack();

  openProfileBtn?.addEventListener("click", () => openModal("profileModal"));
  openProfileBtnBottom?.addEventListener("click", () => openModal("profileModal"));

  openRaceBtn?.addEventListener("click", showRacePanel);
  backHomeBtn?.addEventListener("click", hideRacePanel);

  openHistoryBtn?.addEventListener("click", () => {
    renderHistory();
    openModal("historyModal");
  });

  openQuestBtn?.addEventListener("click", () => {
    renderQuests();
    openModal("questModal");
  });

  openShopBtn?.addEventListener("click", () => {
    renderShop();
    renderAvatarFrameShop();
    openModal("shopModal");
  });

  openInventoryBtn?.addEventListener("click", () => {
    renderInventory();
    openModal("inventoryModal");
  });

  openSpinBtn?.addEventListener("click", () => openModal("spinModal"));

  openAchievementsBtn?.addEventListener("click", () => {
    renderAchievements();
    openModal("achievementsModal");
  });

  openSeasonBtn?.addEventListener("click", () => {
    renderSeasonBoard();
    if (seasonResetNote) seasonResetNote.textContent = formatResetCountdown();
    openModal("seasonModal");
  });

  openSettingsBtn?.addEventListener("click", () => {
    syncControlValuesToSettings();
    openModal("settingsModal");
  });

  openAvatarFrameShopBtn?.addEventListener("click", () => {
    renderAvatarFrameShop();
    openModal("avatarFrameModal");
  });

  playerNameInput?.addEventListener("input", () => {
    gameData.playerName = playerNameInput.value;
    saveGame();
  });

  duckCountSelect?.addEventListener("change", () => {
    populateDuckOptions();
    createTrack();
  });

  betDuckSelect?.addEventListener("change", createTrack);

  fpsModeSelect?.addEventListener("change", () => {
    gameData.fpsMode = fpsModeSelect.value;
    if (settingsFpsSelect) settingsFpsSelect.value = gameData.fpsMode;
    saveGame();
    setStatus(`⚙️ Đã chuyển sang ${gameData.fpsMode} FPS.`);
  });

  speedModeSelect?.addEventListener("change", () => {
    gameData.speedMode = speedModeSelect.value;
    if (settingsSpeedSelect) settingsSpeedSelect.value = gameData.speedMode;
    saveGame();
    setStatus(`⚙️ Tốc độ đua: ${gameData.speedMode}.`);
  });

  effectsToggleBtn?.addEventListener("click", () => {
    gameData.effectsEnabled = !gameData.effectsEnabled;
    effectsToggleBtn.textContent = gameData.effectsEnabled ? "Bật" : "Tắt";
    saveGame();
  });

  shakeToggleBtn?.addEventListener("click", () => {
    gameData.shakeEnabled = !gameData.shakeEnabled;
    shakeToggleBtn.textContent = gameData.shakeEnabled ? "Bật" : "Tắt";
    saveGame();
  });

  startRaceBtn?.addEventListener("click", startRace);
  resetRaceBtn?.addEventListener("click", resetRace);
  spinOnceBtn?.addEventListener("click", spinWheel);
  saveSettingsBtn?.addEventListener("click", saveSettings);
  resetDataBtn?.addEventListener("click", resetAllData);
  resetRankBtn?.addEventListener("click", resetRankOnly);

  previewBuyBtn?.addEventListener("click", () => {
    if (selectedPreviewSkinId) {
      window.buySkin(selectedPreviewSkinId);
      window.previewSkin(selectedPreviewSkinId);
    }
  });

  window.addEventListener("resize", () => {
    const finishPos = FIXED_RACE_DISTANCE;
    const visibleFinish = trackWrap ? trackWrap.scrollWidth - 130 : 1000;
    ducks.forEach(duck => {
      const visiblePos = Math.min((duck.pos / finishPos) * visibleFinish, visibleFinish);
      duck.el.style.left = `${visiblePos}px`;
    });
  });

  setStatus("Sẵn sàng chơi.");
  setInterval(() => {
    ensureWeeklyReset();
    if (seasonResetNote) seasonResetNote.textContent = formatResetCountdown();
  }, 60000);
}

init();