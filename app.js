const STORAGE_KEY = "golf-stats-tracker-rounds-v4";
const MISS_DIRECTIONS = ["left", "right", "short", "long"];

const WENATCHEE_BLACK_BLUE_SCORECARD = {
  courseKey: "wenatchee golf and country club",
  tees: "Black/Blue Combo",
  totalYards: 6089,
  totalPar: 72,
  holes: [
    { hole: 1, yards: 527, par: 5, strokeIndex: 13 },
    { hole: 2, yards: 147, par: 3, strokeIndex: 17 },
    { hole: 3, yards: 389, par: 4, strokeIndex: 3 },
    { hole: 4, yards: 331, par: 4, strokeIndex: 15 },
    { hole: 5, yards: 356, par: 4, strokeIndex: 5 },
    { hole: 6, yards: 193, par: 3, strokeIndex: 11 },
    { hole: 7, yards: 550, par: 5, strokeIndex: 9 },
    { hole: 8, yards: 353, par: 4, strokeIndex: 1 },
    { hole: 9, yards: 347, par: 4, strokeIndex: 7 },
    { hole: 10, yards: 460, par: 5, strokeIndex: 12 },
    { hole: 11, yards: 425, par: 4, strokeIndex: 2 },
    { hole: 12, yards: 281, par: 4, strokeIndex: 14 },
    { hole: 13, yards: 482, par: 5, strokeIndex: 10 },
    { hole: 14, yards: 163, par: 3, strokeIndex: 6 },
    { hole: 15, yards: 279, par: 4, strokeIndex: 18 },
    { hole: 16, yards: 362, par: 4, strokeIndex: 4 },
    { hole: 17, yards: 122, par: 3, strokeIndex: 16 },
    { hole: 18, yards: 322, par: 4, strokeIndex: 8 },
  ],
};
const WENATCHEE_HOLE_MAP = new Map(WENATCHEE_BLACK_BLUE_SCORECARD.holes.map((hole) => [hole.hole, hole]));


const PALOUSE_BLUE_GRAY_SCORECARD = {
  courseKey: "palouse ridge golf course",
  aliases: ["palouse ridge golf course", "palouse ridge"],
  displayName: "Palouse Ridge Golf Club",
  tees: "Blue/Gray Combo",
  imagePrefix: "palouse",
  totalYards: 6412,
  totalPar: 72,
  holes: [
    { hole: 1, yards: 378, par: 4, strokeIndex: 3 },
    { hole: 2, yards: 369, par: 4, strokeIndex: 17 },
    { hole: 3, yards: 414, par: 4, strokeIndex: 5 },
    { hole: 4, yards: 159, par: 3, strokeIndex: 9 },
    { hole: 5, yards: 536, par: 5, strokeIndex: 1 },
    { hole: 6, yards: 216, par: 3, strokeIndex: 7 },
    { hole: 7, yards: 355, par: 4, strokeIndex: 15 },
    { hole: 8, yards: 380, par: 4, strokeIndex: 11 },
    { hole: 9, yards: 485, par: 5, strokeIndex: 13 },
    { hole: 10, yards: 574, par: 5, strokeIndex: 8 },
    { hole: 11, yards: 156, par: 3, strokeIndex: 10 },
    { hole: 12, yards: 386, par: 4, strokeIndex: 4 },
    { hole: 13, yards: 181, par: 3, strokeIndex: 2 },
    { hole: 14, yards: 399, par: 4, strokeIndex: 14 },
    { hole: 15, yards: 306, par: 4, strokeIndex: 18 },
    { hole: 16, yards: 118, par: 3, strokeIndex: 16 },
    { hole: 17, yards: 508, par: 5, strokeIndex: 12 },
    { hole: 18, yards: 492, par: 5, strokeIndex: 6 },
  ],
};

const ROCK_ISLAND_SCORECARD = {
  courseKey: "rock island golf course",
  aliases: ["rock island golf course", "rock island"],
  displayName: "Rock Island Golf Course",
  tees: "Scorecard Tees",
  imagePrefix: "rock",
  totalYards: 6637,
  totalPar: 72,
  holes: [
    { hole: 1, yards: 348, par: 4, strokeIndex: 9 },
    { hole: 2, yards: 426, par: 4, strokeIndex: 5 },
    { hole: 3, yards: 160, par: 3, strokeIndex: 17 },
    { hole: 4, yards: 407, par: 4, strokeIndex: 15 },
    { hole: 5, yards: 570, par: 5, strokeIndex: 7 },
    { hole: 6, yards: 403, par: 4, strokeIndex: 3 },
    { hole: 7, yards: 195, par: 3, strokeIndex: 13 },
    { hole: 8, yards: 532, par: 5, strokeIndex: 1 },
    { hole: 9, yards: 312, par: 4, strokeIndex: 11 },
    { hole: 10, yards: 380, par: 4, strokeIndex: 4 },
    { hole: 11, yards: 320, par: 4, strokeIndex: 14 },
    { hole: 12, yards: 544, par: 5, strokeIndex: 2 },
    { hole: 13, yards: 357, par: 4, strokeIndex: 12 },
    { hole: 14, yards: 187, par: 3, strokeIndex: 16 },
    { hole: 15, yards: 491, par: 5, strokeIndex: 8 },
    { hole: 16, yards: 418, par: 4, strokeIndex: 6 },
    { hole: 17, yards: 411, par: 4, strokeIndex: 10 },
    { hole: 18, yards: 176, par: 3, strokeIndex: 18 },
  ],
};

WENATCHEE_BLACK_BLUE_SCORECARD.aliases = [WENATCHEE_BLACK_BLUE_SCORECARD.courseKey, "wenatchee golf and country club", "wenatchee"];
WENATCHEE_BLACK_BLUE_SCORECARD.displayName = "Wenatchee Golf & Country Club";
WENATCHEE_BLACK_BLUE_SCORECARD.imagePrefix = "wenatchee";

const COURSE_SCORECARDS = [WENATCHEE_BLACK_BLUE_SCORECARD, PALOUSE_BLUE_GRAY_SCORECARD, ROCK_ISLAND_SCORECARD];
const COURSE_HOLE_MAPS = new Map(COURSE_SCORECARDS.map((course) => [course.courseKey, new Map(course.holes.map((hole) => [hole.hole, hole]))]));


const defaultRounds = [
  {
    id: "r21",
    label: "R21 - 18",
    date: "2026-05-02",
    course: "Palouse Ridge GC",
    tees: "Blue/Gray",
    mode: "advanced",
    holes: makeRound([
      [4, 4, 1, true, "hit", 0],
      [4, 4, 2, true, "hit", 0],
      [3, 2, 1, true, null, 0],
      [4, 4, 2, true, "right", 0],
      [5, 5, 2, true, "hit", 0],
      [4, 4, 2, false, "hit", 0],
      [3, 3, 2, true, null, 0],
      [5, 4, 1, true, "hit", 0],
      [4, 4, 2, false, "left", 0],
      [5, 5, 2, true, "hit", 0],
      [4, 4, 1, false, "hit", 0],
      [4, 4, 2, true, "right", 0],
      [5, 4, 1, true, "hit", 0],
      [3, 3, 2, true, null, 0],
      [4, 4, 2, false, "hit", 0],
      [4, 5, 2, false, "right", 1],
      [3, 3, 1, true, null, 0],
      [4, 4, 1, false, "hit", 0],
    ]),
  },
  {
    id: "r24",
    label: "R24 - 18",
    date: "2026-05-11",
    course: "Wenatchee G&CC",
    tees: "Black/Blue",
    mode: "basic",
    holes: makeRound([
      [5, 5, 2, true, "hit", 0],
      [3, 3, 1, true, null, 0],
      [4, 4, 2, true, "hit", 0],
      [4, 5, 2, false, "left", 0],
      [4, 4, 1, true, "hit", 0],
      [3, 3, 2, true, null, 0],
      [5, 5, 2, false, "hit", 0],
      [4, 4, 2, true, "hit", 0],
      [4, 5, 2, false, "right", 0],
      [5, 5, 2, true, "hit", 0],
      [4, 5, 2, false, "left", 0],
      [4, 4, 1, true, "hit", 0],
      [5, 6, 2, false, "right", 1],
      [3, 3, 2, true, null, 0],
      [4, 4, 1, true, "hit", 0],
      [4, 5, 2, false, "right", 0],
      [3, 3, 2, true, null, 0],
      [4, 5, 2, false, "hit", 0],
    ]),
  },
  {
    id: "r28",
    label: "R28 - 18",
    date: "2026-05-17",
    course: "Wenatchee G&CC",
    tees: "Black/Blue",
    mode: "basic",
    holes: makeRound([
      [5, 5, 2, true, "hit", 0],
      [3, 4, 2, false, null, 0],
      [4, 5, 2, false, "right", 0],
      [4, 4, 2, true, "hit", 0],
      [4, 5, 3, false, "left", 0],
      [3, 3, 2, true, null, 0],
      [5, 5, 1, false, "hit", 0],
      [4, 5, 2, false, "right", 0],
      [4, 4, 2, true, "hit", 0],
      [5, 6, 2, false, "hit", 1],
      [4, 5, 3, false, "left", 0],
      [4, 5, 2, false, "hit", 0],
      [5, 5, 2, true, "hit", 0],
      [3, 4, 2, false, null, 0],
      [4, 4, 1, true, "hit", 0],
      [4, 5, 2, false, "right", 0],
      [3, 3, 2, true, null, 0],
      [4, 6, 3, false, "hit", 1],
    ]),
  },
];

const goalTargets = [
  {
    title: "Average Score",
    stat: "scoringAverage",
    target: 79,
    lowerIsBetter: true,
    unit: "",
    note: "Sub-5 path starts with living in the high 70s.",
  },
  {
    title: "Fairway Accuracy",
    stat: "fairwayPercent",
    target: 51,
    lowerIsBetter: false,
    unit: "%",
    note: "Your spreadsheet showed this as the biggest trend to protect.",
  },
  {
    title: "GIR",
    stat: "girPercent",
    target: 46,
    lowerIsBetter: false,
    unit: "%",
    note: "A clean app benchmark that maps directly to your current tracker.",
  },
  {
    title: "Three-Putts",
    stat: "threePuttsPerRound",
    target: 1.5,
    lowerIsBetter: true,
    unit: " / round",
    note: "This is calculated automatically from putts.",
  },
];

const postedScores = [
  { score: 40, type: "N", date: "05/19/2026", course: "Wenatchee Golf & Country Club", crSlope: "36.1/135", pcc: "-", differential: 7.8 },
  { score: 84, type: "H", date: "05/17/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 11.6 },
  { score: 84, type: "H", date: "05/17/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 11.6 },
  { score: 85, type: "H", date: "05/15/2026", course: "Wenatchee Golf & Country Club", crSlope: "69.7/130", pcc: "-", differential: 13.3 },
  { score: 36, type: "N", date: "05/12/2026", course: "Wenatchee Golf & Country Club", crSlope: "36.1/135", pcc: "-", differential: 4.7 },
  { score: 78, type: "H", date: "05/11/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 6.5 },
  { score: 78, type: "H", date: "05/10/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 6.5 },
  { score: 78, type: "A", date: "05/09/2026", course: "Rock Island Golf Course", crSlope: "71.6/124", pcc: "-", differential: 5.8 },
  { score: 41, type: "N", date: "05/07/2026", course: "Wenatchee Golf & Country Club", crSlope: "36.6/136", pcc: "-", differential: 8.4 },
  { score: 72, type: "A", date: "05/02/2026", course: "Palouse Ridge Golf Club", crSlope: "71.2/133", pcc: "-1", differential: 1.5 },
  { score: 43, type: "N", date: "04/30/2026", course: "Wenatchee Golf & Country Club", crSlope: "36.6/136", pcc: "-", differential: 10.3 },
  { score: 87, type: "H", date: "04/21/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 14.2 },
  { score: 86, type: "A", date: "04/13/2026", course: "Rock Island Golf Course", crSlope: "71.6/124", pcc: "-", differential: 13.1 },
  { score: 81, type: "H", date: "04/12/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 9.1 },
  { score: 83, type: "H", date: "04/11/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 10.8 },
  { score: 44, type: "N", date: "04/09/2026", course: "Wenatchee Golf & Country Club", crSlope: "36.1/135", pcc: "-", differential: 10.8 },
  { score: 82, type: "H", date: "04/05/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 9.9 },
  { score: 82, type: "H", date: "04/04/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 9.9 },
  { score: 82, type: "H", date: "03/31/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 9.9 },
  { score: 81, type: "H", date: "03/30/2026", course: "Wenatchee Golf & Country Club", crSlope: "69.7/130", pcc: "-", differential: 9.8 },
  { score: 84, type: "H", date: "03/29/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 11.6 },
  { score: 41, type: "N", date: "03/27/2026", course: "Wenatchee Golf & Country Club", crSlope: "34.2/131", pcc: "-", differential: 9.5 },
  { score: 41, type: "N", date: "03/26/2026", course: "Wenatchee Golf & Country Club", crSlope: "36.1/135", pcc: "-", differential: 7.7 },
  { score: 82, type: "A", date: "03/24/2026", course: "Rock Island Golf Course", crSlope: "71.6/124", pcc: "-", differential: 9.5 },
  { score: 81, type: "H", date: "03/22/2026", course: "Wenatchee Golf & Country Club", crSlope: "70.3/133", pcc: "-", differential: 9.1 },
];

const supplementalRounds = [
  {
    id: "ghin-2026-05-07-f9",
    label: "05/07 - F9",
    date: "05/07/2026",
    course: "Wenatchee Golf & Country Club",
    tees: "Black/Blue",
    mode: "advanced",
    source: "ghin",
    holes: [
      { hole: 1, yards: 537, strokeIndex: 13, par: 5, score: 6, putts: 2, gir: false, girMiss: "left", fairway: "left" },
      { hole: 2, yards: 149, strokeIndex: 17, par: 3, score: 3, putts: 1, gir: false, girMiss: "left", fairway: null },
      { hole: 3, yards: 398, strokeIndex: 3, par: 4, score: 6, putts: 2, gir: false, girMiss: "short", fairway: "left" },
      { hole: 4, yards: 356, strokeIndex: 15, par: 4, score: 4, putts: 1, gir: false, girMiss: "left", fairway: "left" },
      { hole: 5, yards: 376, strokeIndex: 5, par: 4, score: 5, putts: 2, gir: false, girMiss: "long", fairway: "left" },
      { hole: 6, yards: 218, strokeIndex: 11, par: 3, score: 3, putts: 1, gir: false, girMiss: "right", fairway: null },
      { hole: 7, yards: 582, strokeIndex: 9, par: 5, score: 5, putts: 2, gir: true, girMiss: null, fairway: "hit" },
      { hole: 8, yards: 397, strokeIndex: 1, par: 4, score: 5, putts: 2, gir: false, girMiss: "short", fairway: "left" },
      { hole: 9, yards: 356, strokeIndex: 7, par: 4, score: 4, putts: 2, gir: true, girMiss: null, fairway: "right" },
    ],
  },
];

let rounds = loadRounds();

const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");
const courseFilter = document.querySelector("#course-filter");
const roundFilter = document.querySelector("#round-filter");
const roundHistory = document.querySelector("#round-history");
const roundDetailModal = document.querySelector("#round-detail-modal");
const roundDetailContent = document.querySelector("#round-detail-content");
const roundDetailTitle = document.querySelector("#round-detail-title");
const roundDetailEyebrow = document.querySelector("#round-detail-eyebrow");
const holeStatsCourse = document.querySelector("#hole-stats-course");
const holeStatsHole = document.querySelector("#hole-stats-hole");
const holeContextToggle = document.querySelector("#hole-context-toggle");
const holeStatsHistory = document.querySelector("#hole-stats-history");
const holeCount = document.querySelector("#hole-count");
const trackingMode = document.querySelector("#tracking-mode");
const prepCourseFilter = document.querySelector("#prep-course-filter");
const recordsCourseFilter = document.querySelector("#records-course-filter");
const overviewCourseFilter = document.querySelector("#overview-course-filter");
const seasonYearFilter = document.querySelector("#season-year-filter");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    views.forEach((view) => view.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.view}`).classList.add("active");
  });
});

courseFilter.addEventListener("change", render);
roundFilter.addEventListener("change", render);
prepCourseFilter?.addEventListener("change", () => renderTournamentPrep(rounds));
recordsCourseFilter?.addEventListener("change", () => renderRecordsPage(rounds));
overviewCourseFilter?.addEventListener("change", () => renderCourseOverview(rounds));
seasonYearFilter?.addEventListener("change", () => renderSeasonPage(rounds));
roundHistory.addEventListener("click", handleRoundDetailClick);
document.querySelectorAll("[data-round-detail-close]").forEach((button) => {
  button.addEventListener("click", closeRoundDetail);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !roundDetailModal.classList.contains("hidden")) closeRoundDetail();
});
holeStatsCourse.addEventListener("change", () => renderHoleStats(rounds));
holeStatsHole.addEventListener("change", () => renderHoleStats(rounds));
holeContextToggle.addEventListener("change", updateHoleContextColumns);
holeCount.addEventListener("change", buildHoleInputs);
trackingMode.addEventListener("change", updateModeNote);
document.querySelector("#load-sample-round").addEventListener("click", loadExampleRound);
document.querySelector("#round-form").addEventListener("submit", saveRound);

buildHoleInputs();
updateModeNote();
render();

function makeRound(rows) {
  return rows.map(([par, score, putts, gir, fairway, legacyValue, girMiss], index) => ({
    hole: index + 1,
    par,
    score,
    putts,
    gir,
    girMiss: gir ? null : girMiss || (typeof legacyValue === "string" ? legacyValue : null),
    fairway,
  }));
}

function loadRounds() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const imports = window.GHIN_IMPORTS || [];
  if (imports.length) {
    const storedRounds = stored ? JSON.parse(stored) : [];
    const userSavedRounds = storedRounds.filter((round) => !["workbook", "ghin", "ghin-screenshot"].includes(round.source));
    return mergeSupplementalRounds(userSavedRounds);
  }

  const baseRounds = stored ? JSON.parse(stored) : window.WORKBOOK_DATA?.workbookRounds || defaultRounds;
  return mergeSupplementalRounds(baseRounds);
}

function mergeSupplementalRounds(baseRounds) {
  const imports = window.GHIN_IMPORTS || [];
  const supplementalToUse = supplementalRounds.filter(
    (round) => !imports.some((imported) => roundOverrideKey(imported) === roundOverrideKey(round)),
  );
  const externalRounds = [...supplementalToUse, ...imports];
  const overrideKeys = new Set(externalRounds.map(roundOverrideKey));
  const keptBaseRounds = baseRounds.filter((round) => !overrideKeys.has(roundOverrideKey(round)));
  return [...keptBaseRounds, ...externalRounds].sort((a, b) => toIsoDate(b.date).localeCompare(toIsoDate(a.date)));
}

function roundMergeKey(round) {
  const summary = summarizeRound(round);
  return `${toIsoDate(round.date)}|${normalizeCourse(round.course)}|${summary.score}`;
}

function roundOverrideKey(round) {
  const summary = summarizeRound(round);
  return `${toIsoDate(round.date)}|${normalizeCourse(round.course)}|${summary.holesPlayed}`;
}

function persistRounds() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rounds));
}

function summarizeRound(round) {
  const holes = Array.isArray(round.holes) ? round.holes : [];
  const scoreOnly = !holes.length;
  const holesPlayed = scoreOnly ? Number(round.holesPlayed || round.numberOfHoles || round.number_of_holes || 0) : holes.length;
  const score = scoreOnly ? Number(round.score || round.adjustedGrossScore || 0) : sum(holes, "score");
  const adjustedScore = round.adjustedScore ?? null;
  const par = scoreOnly ? Number(round.par || expectedParForRound(round, holesPlayed) || 0) : sum(holes, "par");
  const hasPuttingStats = holes.some((hole) => hole.putts !== undefined && hole.putts !== null && hole.putts !== "");
  const hasGirStats = holes.some((hole) => typeof hole.gir === "boolean");
  const hasFairwayStats = holes.some((hole) => hole.fairway !== undefined && hole.fairway !== null);
  const hasAdvancedStats = hasPuttingStats || hasGirStats || hasFairwayStats;
  const putts = hasPuttingStats ? sum(holes, "putts") : null;
  const threePutts = hasPuttingStats ? holes.filter((hole) => Number(hole.putts || 0) >= 3).length : null;
  const gir = hasGirStats ? holes.filter((hole) => hole.gir).length : null;
  const fairwayAttempts = hasFairwayStats ? holes.filter((hole) => hole.fairway !== null && hole.fairway !== undefined).length : 0;
  const fairways = hasFairwayStats ? holes.filter((hole) => hole.fairway === "hit").length : null;
  const girMisses = countBy(holes.filter((hole) => !hole.gir && isMissDirection(hole.girMiss)).map((hole) => hole.girMiss));
  const fairwayMisses = countBy(
    holes.filter((hole) => isMissDirection(hole.fairway)).map((hole) => hole.fairway),
  );
  const scoring = holes.reduce(
    (acc, hole) => {
      const diff = hole.score - hole.par;
      if (diff <= -2) acc.eagles += 1;
      else if (diff === -1) acc.birdies += 1;
      else if (diff === 0) acc.pars += 1;
      else if (diff === 1) acc.bogeys += 1;
      else if (diff === 2) acc.doubles += 1;
      else acc.triples += 1;
      return acc;
    },
    { eagles: 0, birdies: 0, pars: 0, bogeys: 0, doubles: 0, triples: 0 },
  );

  return {
    ...round,
    holes,
    holesPlayed,
    score,
    adjustedScore,
    par,
    overPar: par ? score - par : Number(round.overPar || 0),
    adjustedOverPar: adjustedScore === null || !par ? null : adjustedScore - par,
    putts,
    threePutts,
    gir,
    fairways,
    fairwayAttempts,
    girMisses,
    fairwayMisses,
    girPercent: hasGirStats ? percent(gir, holes.length) : null,
    fairwayPercent: hasFairwayStats ? percent(fairways, fairwayAttempts) : null,
    scoring,
    scoreOnly: scoreOnly || !hasAdvancedStats,
    hasAdvancedStats,
    hasPuttingStats,
    hasGirStats,
    hasFairwayStats,
  };
}

function summarizeAll(sourceRounds, filter = "all") {
  const summaries = sourceRounds.map(summarizeRound);
  const holes = summaries.flatMap((round) => round.holes || []);
  const girHoles = holes.filter((hole) => typeof hole.gir === "boolean");
  const puttingHoles = holes.filter((hole) => hole.putts !== undefined && hole.putts !== null && hole.putts !== "");
  const fairwayAttempts = summaries.reduce((total, round) => total + Number(round.fairwayAttempts || 0), 0);
  const fairways = summaries.reduce((total, round) => total + Number(round.fairways || 0), 0);
  const girMisses = countBy(holes.filter((hole) => !hole.gir && isMissDirection(hole.girMiss)).map((hole) => hole.girMiss));
  const fairwayMisses = countBy(
    holes.filter((hole) => isMissDirection(hole.fairway)).map((hole) => hole.fairway),
  );
  const roundsPlayed = summaries.length || 1;
  const averageBasis = getAverageBasis(summaries, filter);
  const scoringAverage = summaries.reduce((total, round) => total + basisValue(round.score, round, averageBasis), 0) / roundsPlayed;
  const puttingRounds = summaries.filter((round) => round.hasPuttingStats && Number.isFinite(Number(round.putts)));
  const puttingDenominator = puttingRounds.length || 1;
  const threePuttRounds = summaries.filter((round) => round.hasPuttingStats && Number.isFinite(Number(round.threePutts)));
  const threePuttDenominator = threePuttRounds.length || 1;

  return {
    rounds: summaries,
    roundsPlayed: summaries.length,
    holesPlayed: summaries.reduce((total, round) => total + Number(round.holesPlayed || 0), 0),
    averageBasis,
    scoringAverage,
    puttsPerRound: puttingRounds.length ? puttingRounds.reduce((total, round) => total + basisValue(round.putts, round, averageBasis), 0) / puttingDenominator : null,
    threePutts: threePuttRounds.reduce((total, round) => total + Number(round.threePutts || 0), 0),
    threePuttsPerRound: threePuttRounds.length ? threePuttRounds.reduce((total, round) => total + basisValue(round.threePutts, round, averageBasis), 0) / threePuttDenominator : null,
    threePuttPercent: puttingHoles.length ? percent(puttingHoles.filter((hole) => Number(hole.putts || 0) >= 3).length, puttingHoles.length) : null,
    girPercent: girHoles.length ? percent(girHoles.filter((hole) => hole.gir).length, girHoles.length) : null,
    fairwayPercent: fairwayAttempts ? percent(fairways, fairwayAttempts) : null,
    girMisses,
    fairwayMisses,
    birdies: summaries.reduce((total, round) => total + round.scoring.birdies, 0),
    pars: summaries.reduce((total, round) => total + round.scoring.pars, 0),
    bogeys: summaries.reduce((total, round) => total + round.scoring.bogeys, 0),
    doublesPlus: summaries.reduce(
      (total, round) => total + round.scoring.doubles + round.scoring.triples,
      0,
    ),
    fullStatRounds: summaries.filter((round) => round.hasAdvancedStats).length,
    scoreOnlyRounds: summaries.filter((round) => round.scoreOnly).length,
  };
}

function estimateStrokesGained(round) {
  const summary = summarizeRound(round);
  const scale = summary.holesPlayed / 18;
  const baselineScore = summary.par + 5 * scale;
  const sgTotal = baselineScore - summary.score;
  const sgPutting = 32.5 * scale - summary.putts;
  const sgTeeToGreen = sgTotal - sgPutting;
  const expectedFairways = 0.51 * summary.fairwayAttempts;
  const expectedGir = 0.46 * summary.holesPlayed;
  const sgOffTee = (summary.fairways - expectedFairways) * 0.18;
  const sgApproach = (summary.gir - expectedGir) * 0.4;
  const sgAroundGreen = sgTeeToGreen - sgOffTee - sgApproach;

  return {
    label: round.label,
    sgTotal,
    sgPutting,
    sgTeeToGreen,
    sgOffTee,
    sgApproach,
    sgAroundGreen,
  };
}

function render() {
  renderCourseFilterOptions(rounds);
  const filter = roundFilter.value;
  const selectedCourse = courseFilter.value;
  const filtered = rounds.filter((round) => {
    const roundTypeMatches = filter === "all" || round.holes.length === Number(filter);
    const courseMatches = selectedCourse === "all" || normalizeCourse(round.course) === selectedCourse;
    return roundTypeMatches && courseMatches;
  });
  const activeRounds = filtered.length ? filtered : [];
  const stats = summarizeAll(activeRounds, filter);
  renderKpis(stats);
  renderRollingForm(activeRounds, filter);
  renderHoleLengthSplits(activeRounds);
  renderThreePuttPerformance(activeRounds, stats, filter);
  renderCourseOverview(rounds);
  renderSeasonPage(rounds);
  renderHistory(stats.rounds);
  renderInsights(stats);
  renderMissDirections(stats);
  renderGoals(stats);
  renderHoleStats(rounds);
  renderTournamentPrep(rounds);
  renderRecordsPage(rounds);
  renderStrokesGained(activeRounds);
}

function renderCourseFilterOptions(sourceRounds) {
  const current = courseFilter.value || "all";
  const courses = Array.from(
    sourceRounds.reduce((map, round) => {
      map.set(normalizeCourse(round.course), displayCourseName(round.course));
      return map;
    }, new Map()),
  ).sort((a, b) => a[1].localeCompare(b[1]));

  courseFilter.innerHTML = [
    `<option value="all">All courses</option>`,
    ...courses.map(([value, label]) => `<option value="${value}">${label}</option>`),
  ].join("");

  courseFilter.value = courses.some(([value]) => value === current) ? current : "all";
}

function renderKpis(stats) {
  const basisLabel = stats.averageBasis.label;
  const kpis = [
    ["Rounds", stats.roundsPlayed, `${stats.holesPlayed} holes tracked`],
    ["Scoring Avg", formatNumber(stats.scoringAverage, 1), basisLabel],
    ["Putts / Round", stats.puttsPerRound === null ? "—" : formatNumber(stats.puttsPerRound, 1), stats.puttsPerRound === null ? "No putting stats" : basisLabel],
    ["3-Putts / Round", stats.threePuttsPerRound === null ? "—" : formatNumber(stats.threePuttsPerRound, 1), stats.threePuttsPerRound === null ? "No putting stats" : basisLabel],
    ["3-Putt Rate", stats.threePuttPercent === null ? "—" : `${formatNumber(stats.threePuttPercent, 0)}%`, "Holes with 3+ putts"],
    ["GIR", stats.girPercent === null ? "—" : `${formatNumber(stats.girPercent, 0)}%`, "Greens in regulation"],
    ["Fairways", stats.fairwayPercent === null ? "—" : `${formatNumber(stats.fairwayPercent, 0)}%`, "Par 3s excluded"],
    ["Doubles+", stats.doublesPlus, "Total blow-up holes"],
  ];

  document.querySelector("#kpi-grid").innerHTML = kpis
    .map(
      ([label, value, detail]) => `
        <article class="kpi">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${detail}</small>
        </article>
      `,
    )
    .join("");
}


function renderRollingForm(sourceRounds, filter) {
  const sorted = [...sourceRounds].sort((a, b) => toIsoDate(b.date).localeCompare(toIsoDate(a.date)));
  const windows = [
    ["Last 5", sorted.slice(0, 5)],
    ["Last 10", sorted.slice(0, 10)],
    ["Last 20", sorted.slice(0, 20)],
    ["Lifetime", sorted],
  ];

  document.querySelector("#rolling-form").innerHTML = windows
    .map(([label, windowRounds]) => {
      const stats = summarizeAll(windowRounds, filter);
      return `
        <article class="split-card">
          <span>${label}</span>
          <strong>${windowRounds.length ? formatNumber(stats.scoringAverage, 1) : "-"}</strong>
          <small>${stats.averageBasis.label} · ${windowRounds.length} rounds</small>
          <div class="mini-metrics">
            <b>GIR ${formatNumber(stats.girPercent, 0)}%</b>
            <b>FW ${formatNumber(stats.fairwayPercent, 0)}%</b>
            <b>3P ${formatNumber(stats.threePuttsPerRound, 1)}</b>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderHoleLengthSplits(sourceRounds) {
  const groups = [
    ["18 Hole Stats", sourceRounds.filter((round) => round.holes.length === 18), "True full-round averages"],
    ["9 Hole Stats", sourceRounds.filter((round) => round.holes.length === 9), "True nine-hole averages"],
  ];

  document.querySelector("#hole-length-splits").innerHTML = groups
    .map(([label, groupRounds, detail]) => {
      const filter = label.startsWith("18") ? "18" : "9";
      const stats = summarizeAll(groupRounds, filter);
      return `
        <article class="split-card wide">
          <span>${label}</span>
          <strong>${groupRounds.length ? formatNumber(stats.scoringAverage, 1) : "-"}</strong>
          <small>${detail} · ${groupRounds.length} rounds</small>
          <div class="mini-metrics">
            <b>Putts ${formatNumber(stats.puttsPerRound, 1)}</b>
            <b>3P ${formatNumber(stats.threePuttsPerRound, 1)}</b>
            <b>3P Rate ${formatNumber(stats.threePuttPercent, 0)}%</b>
            <b>GIR ${formatNumber(stats.girPercent, 0)}%</b>
            <b>FW ${formatNumber(stats.fairwayPercent, 0)}%</b>
          </div>
        </article>
      `;
    })
    .join("");
}


function renderThreePuttPerformance(sourceRounds, stats, filter) {
  const container = document.querySelector("#three-putt-performance");
  if (!container) return;

  const sorted = [...sourceRounds].sort((a, b) => toIsoDate(b.date).localeCompare(toIsoDate(a.date)));
  const last5 = summarizeAll(sorted.slice(0, 5), filter);
  const last10 = summarizeAll(sorted.slice(0, 10), filter);
  const holeRows = buildTournamentHoleRows(sourceRounds)
    .filter((row) => row.threePutts > 0)
    .sort((a, b) => (b.threePuttPercent - a.threePuttPercent) || (b.threePutts - a.threePutts) || (b.avgPutts - a.avgPutts))
    .slice(0, 5);

  container.innerHTML = `
    <div class="split-stat-grid">
      ${[
        ["3-Putts / Round", formatNumber(stats.threePuttsPerRound, 1), stats.averageBasis.label],
        ["3-Putt Rate", `${formatNumber(stats.threePuttPercent, 0)}%`, `${stats.threePutts} total 3-putt holes`],
        ["Last 5", sorted.length ? formatNumber(last5.threePuttsPerRound, 1) : "-", "3-putts / round"],
        ["Last 10", sorted.length ? formatNumber(last10.threePuttsPerRound, 1) : "-", "3-putts / round"],
      ].map(([label, value, detail]) => `
        <article class="split-card">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${detail}</small>
        </article>
      `).join("")}
    </div>
    <div class="table-wrap compact-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Highest 3-Putt Risk</th>
            <th>3-Putts</th>
            <th>3-Putt %</th>
            <th>Avg Putts</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          ${holeRows.length ? holeRows.map((row) => `
            <tr>
              <td>${row.hole}</td>
              <td>${row.threePutts}</td>
              <td>${formatNumber(row.threePuttPercent, 0)}%</td>
              <td>${formatNumber(row.avgPutts, 2)}</td>
              <td>${puttingPlanForHole(row)}</td>
            </tr>
          `).join("") : `<tr><td colspan="5">No 3-putt holes in this filter.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function renderPrepScorecard(selectedCourse) {
  const container = document.querySelector("#prep-scorecard");
  if (!container) return;
  const scorecard = selectedCourse === "all" ? null : getScorecardSummaryForCourse(selectedCourse);
  if (!scorecard) {
    container.innerHTML = `<p class="muted-note">Select Wenatchee, Palouse Ridge, or Rock Island to show scorecard yardages.</p>`;
    return;
  }

  const front = scorecard.holes.slice(0, 9);
  const back = scorecard.holes.slice(9);
  const renderNine = (title, holes) => `
    <div class="scorecard-nine">
      <h4>${title}</h4>
      <div class="table-wrap compact-table-wrap">
        <table>
          <thead><tr><th>Hole</th>${holes.map((hole) => `<th>${hole.hole}</th>`).join("")}<th>${title === "Front 9" ? "Out" : "In"}</th></tr></thead>
          <tbody>
            <tr><td>Yards</td>${holes.map((hole) => `<td>${hole.yards}</td>`).join("")}<td>${sum(holes, "yards")}</td></tr>
            <tr><td>Par</td>${holes.map((hole) => `<td>${hole.par}</td>`).join("")}<td>${sum(holes, "par")}</td></tr>
            <tr><td>HCP</td>${holes.map((hole) => `<td>${hole.strokeIndex}</td>`).join("")}<td>—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  container.innerHTML = `
    <div class="prep-scorecard-header">
      <strong>${scorecard.displayName} · ${scorecard.tees}</strong>
      <span>${scorecard.totalYards.toLocaleString()} yards · Par ${scorecard.totalPar}</span>
    </div>
    ${renderNine("Front 9", front)}
    ${renderNine("Back 9", back)}
  `;
}

function renderTournamentPrep(sourceRounds) {
  if (!prepCourseFilter) return;
  renderPrepCourseOptions(sourceRounds);

  const selectedCourse = prepCourseFilter.value || "all";
  renderPrepScorecard(selectedCourse);
  const prepRounds = sourceRounds.filter((round) => selectedCourse === "all" || normalizeCourse(round.course) === selectedCourse);
  const sortedPrepRounds = [...prepRounds].sort((a, b) => toIsoDate(b.date).localeCompare(toIsoDate(a.date)));
  const recentRounds = sortedPrepRounds.slice(0, Math.min(10, sortedPrepRounds.length));
  const stats = summarizeAll(prepRounds, "all");
  const recentStats = summarizeAll(recentRounds, "all");
  const holeRows = buildTournamentHoleRows(prepRounds);
  const priorityHoles = holeRows.slice(0, 9);
  const opportunityHoles = [...holeRows]
    .filter((row) => row.rounds >= 1)
    .sort((a, b) => (b.birdiePercent - a.birdiePercent) || (b.girPercent - a.girPercent) || (a.avgOverPar - b.avgOverPar))
    .slice(0, 6);
  const girMiss = topDirection(stats.girMisses);
  const fairwayMiss = topDirection(stats.fairwayMisses);
  const blowupRate = percent(stats.doublesPlus, Math.max(stats.holesPlayed, 1));

  document.querySelector("#prep-kpis").innerHTML = [
    ["Rounds Used", prepRounds.length, selectedCourse === "all" ? "All courses" : displayCourseName(prepRounds[0]?.course || "Selected course")],
    ["Scoring Avg", prepRounds.length ? formatNumber(stats.scoringAverage, 1) : "-", stats.averageBasis.label],
    ["Recent Form", recentRounds.length ? formatNumber(recentStats.scoringAverage, 1) : "-", `${recentRounds.length} most recent`],
    ["Blow-Up Rate", `${formatNumber(blowupRate, 0)}%`, "Double bogey or worse holes"],
  ].map(([label, value, detail]) => `
    <article class="kpi">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
    </article>
  `).join("");

  document.querySelector("#prep-snapshot").innerHTML = [
    ["Driving", `${formatNumber(stats.fairwayPercent, 0)}%`, `Main miss: ${humanDirection(fairwayMiss, "none")}`, `Fairways: ${formatNumber(stats.fairwayPercent, 0)}%`],
    ["Approach", `${formatNumber(stats.girPercent, 0)}%`, `Main miss: ${humanDirection(girMiss, "none")}`, `Short/long/side pattern below`],
    ["Putting", formatNumber(stats.puttsPerRound, 1), `${stats.averageBasis.label}`, `3-putts: ${formatNumber(stats.threePuttsPerRound, 1)} / ${stats.averageBasis.label.replace(" average", "")} · ${formatNumber(stats.threePuttPercent, 0)}% rate`],
  ].map(([label, value, detail, extra]) => `
    <article class="split-card wide">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
      <div class="mini-metrics"><b>${extra}</b></div>
    </article>
  `).join("");

  document.querySelector("#prep-plan").innerHTML = [
    {
      title: "Tee Shot Plan",
      body: fairwayMiss
        ? `Your most common fairway miss is ${humanDirection(fairwayMiss)}. Start lines should leave room for that miss; club down when the trouble side matches your miss.`
        : "No strong fairway miss pattern yet. Choose conservative start lines until the sample grows.",
    },
    {
      title: "Approach Plan",
      body: girMiss
        ? `Your most common green miss is ${humanDirection(girMiss)}. Default to center-green targets and only fire at pins when the safe miss matches your pattern.`
        : "No strong approach miss pattern yet. Center-green targets are the safest tournament baseline.",
    },
    {
      title: "Damage Control",
      body: `Protect the card from doubles. This sample has ${stats.doublesPlus} doubles+; on red-flag holes, bogey is acceptable if the aggressive play brings short-side, water/tree trouble, or three-putt risk.`,
    },
    {
      title: "Warmup Focus",
      body: `Spend extra time on ${stats.threePuttsPerRound > 1.3 ? "lag putting and 3-5 footers" : "speed control, wedges, and first-tee driver rhythm"}. Match warmup reps to the miss patterns below.`,
    },
  ].map((card) => `
    <article class="prep-card">
      <strong>${card.title}</strong>
      <p>${card.body}</p>
    </article>
  `).join("");

  document.querySelector("#prep-patterns").innerHTML = [
    renderPrepPatternCard("Fairway Misses", stats.fairwayMisses, "Use this for tee-shot aim and club selection."),
    renderPrepPatternCard("Green Misses", stats.girMisses, "Use this for approach targets and pin decisions."),
    renderPrepPatternCard("Priority Hole Misses", combineCounts(priorityHoles.map((row) => row.girMisses)), "Approach pattern only on your hardest holes."),
    renderPrepPatternCard("Priority Tee Misses", combineCounts(priorityHoles.map((row) => row.fairwayMisses)), "Tee pattern only on your hardest holes."),
    renderPuttingRiskCard(priorityHoles),
  ].join("");

  document.querySelector("#prep-hole-table").innerHTML = priorityHoles.length
    ? priorityHoles.map((row, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${row.hole}</td>
        <td>${row.par}</td>
        <td>${row.yards || "—"}</td>
        <td>${row.strokeIndex || "—"}</td>
        <td>${signed(row.avgOverPar, 1)}</td>
        <td>${row.rounds}</td>
        <td>${renderMissTendency(row)}</td>
        <td>${formatNumber(row.threePuttPercent, 0)}%</td>
        <td>${renderRiskBadges(row)}</td>
        <td>${prepStrategyForHole(row)}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="9">No hole data available yet.</td></tr>`;

  document.querySelector("#prep-opportunity-table").innerHTML = opportunityHoles.length
    ? opportunityHoles.map((row, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${row.hole}</td>
        <td>${row.par}</td>
        <td>${row.yards || "—"}</td>
        <td>${row.strokeIndex || "—"}</td>
        <td>${signed(row.avgOverPar, 1)}</td>
        <td>${formatNumber(row.birdiePercent, 0)}%</td>
        <td>${formatNumber(row.girPercent, 0)}%</td>
        <td>${formatNumber(row.threePuttPercent, 0)}%</td>
        <td>${opportunityStrategyForHole(row)}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="8">No scoring opportunity data available yet.</td></tr>`;
}

function renderPrepPatternCard(title, counts, note) {
  const total = totalCounts(counts);
  const top = topDirection(counts);
  const rows = MISS_DIRECTIONS.map((direction) => {
    const count = counts?.[direction] || 0;
    const pct = total ? Math.round((count / total) * 100) : 0;
    return `<b>${humanDirection(direction)} ${pct}%</b>`;
  }).join("");

  return `
    <article class="prep-card">
      <strong>${title}</strong>
      <p>Main pattern: ${humanDirection(top, "none")} · ${total} total</p>
      <div class="mini-metrics">${rows}</div>
      <small>${note}</small>
    </article>
  `;
}

function renderPuttingRiskCard(rows) {
  const riskRows = [...rows]
    .filter((row) => row.threePutts > 0)
    .sort((a, b) => (b.threePuttPercent - a.threePuttPercent) || (b.threePutts - a.threePutts))
    .slice(0, 4);
  const detail = riskRows.length
    ? riskRows.map((row) => `<b>${row.hole}: ${formatNumber(row.threePuttPercent, 0)}%</b>`).join("")
    : `<b>No 3-putt pattern</b>`;
  return `
    <article class="prep-card">
      <strong>3-Putt Risk Holes</strong>
      <p>Use this for lag-putt and conservative approach targets.</p>
      <div class="mini-metrics">${detail}</div>
      <small>Prioritize leaving uphill first putts on these holes.</small>
    </article>
  `;
}

function combineCounts(countList) {
  return countList.reduce((acc, counts) => {
    Object.entries(counts || {}).forEach(([key, value]) => {
      acc[key] = (acc[key] || 0) + value;
    });
    return acc;
  }, {});
}

function renderRiskBadges(row) {
  const badges = [];
  if (row.doublesPlus) badges.push(`${row.doublesPlus} doubles+`);
  if (row.threePutts) badges.push(`${row.threePutts} 3-putts`);
  if (row.girPercent < 35) badges.push(`GIR ${formatNumber(row.girPercent, 0)}%`);
  return badges.length ? badges.map((badge) => `<span class="match-badge match-missing">${badge}</span>`).join(" ") : `<span class="match-badge">Manageable</span>`;
}

function opportunityStrategyForHole(row) {
  if (row.par === 5 && row.birdiePercent >= 20) return "Green light: play to your best wedge number and avoid the big-miss side.";
  if (row.girPercent >= 55) return "Attack with discipline: center of green first, pin second.";
  if (row.avgOverPar <= 0) return "Keep the same plan. This hole is already helping the card.";
  return "Opportunity only with a good tee shot. Take par and move on if position is poor.";
}

function renderPrepCourseOptions(sourceRounds) {
  const current = prepCourseFilter.value || "all";
  const courses = Array.from(
    sourceRounds.reduce((map, round) => {
      map.set(normalizeCourse(round.course), displayCourseName(round.course));
      return map;
    }, new Map()),
  ).sort((a, b) => a[1].localeCompare(b[1]));

  prepCourseFilter.innerHTML = [
    `<option value="all">All courses</option>`,
    ...courses.map(([value, label]) => `<option value="${value}">${label}</option>`),
  ].join("");
  prepCourseFilter.value = courses.some(([value]) => value === current) ? current : "all";
}

function buildTournamentHoleRows(sourceRounds) {
  const map = new Map();
  sourceRounds.forEach((round) => {
    round.holes.forEach((hole) => {
      const key = `${normalizeCourse(round.course)}|${hole.hole}`;
      if (!map.has(key)) {
        map.set(key, {
          hole: `${displayCourseName(round.course)} #${hole.hole}`,
          rounds: 0,
          par: getScorecardHole(round.course, hole.hole)?.par || hole.par,
          yards: getScorecardHole(round.course, hole.hole)?.yards || Number(hole.yards || 0),
          strokeIndex: getScorecardHole(round.course, hole.hole)?.strokeIndex || null,
          scoreTotal: 0,
          overParTotal: 0,
          puttTotal: 0,
          threePutts: 0,
          gir: 0,
          fairways: 0,
          fairwayAttempts: 0,
          girMisses: {},
          fairwayMisses: {},
          scoring: { eagles: 0, birdies: 0, pars: 0, bogeys: 0, doubles: 0, triples: 0 },
        });
      }
      const row = map.get(key);
      const scorecardHole = getScorecardHole(round.course, hole.hole);
      if (scorecardHole) {
        row.par = scorecardHole.par;
        row.yards = scorecardHole.yards;
        row.strokeIndex = scorecardHole.strokeIndex;
      }
      const diff = hole.score - hole.par;
      row.rounds += 1;
      row.scoreTotal += hole.score;
      row.overParTotal += diff;
      row.puttTotal += hole.putts;
      if (hole.putts >= 3) row.threePutts += 1;
      if (hole.gir) row.gir += 1;
      if (hole.fairway !== null) row.fairwayAttempts += 1;
      if (hole.fairway === "hit") row.fairways += 1;
      if (!hole.gir && isMissDirection(hole.girMiss)) row.girMisses[hole.girMiss] = (row.girMisses[hole.girMiss] || 0) + 1;
      if (isMissDirection(hole.fairway)) row.fairwayMisses[hole.fairway] = (row.fairwayMisses[hole.fairway] || 0) + 1;
      if (diff <= -2) row.scoring.eagles += 1;
      else if (diff === -1) row.scoring.birdies += 1;
      else if (diff === 0) row.scoring.pars += 1;
      else if (diff === 1) row.scoring.bogeys += 1;
      else if (diff === 2) row.scoring.doubles += 1;
      else row.scoring.triples += 1;
    });
  });

  return Array.from(map.values())
    .map((row) => ({
      ...row,
      avgScore: row.scoreTotal / row.rounds,
      avgOverPar: row.overParTotal / row.rounds,
      avgPutts: row.puttTotal / row.rounds,
      girPercent: percent(row.gir, row.rounds),
      fairwayPercent: percent(row.fairways, row.fairwayAttempts),
      doublesPlus: row.scoring.doubles + row.scoring.triples,
      threePuttPercent: percent(row.threePutts, row.rounds),
      birdiePercent: percent(row.scoring.birdies + row.scoring.eagles, row.rounds),
      parOrBetterPercent: percent(row.scoring.eagles + row.scoring.birdies + row.scoring.pars, row.rounds),
    }))
    .sort((a, b) => (b.avgOverPar - a.avgOverPar) || (b.doublesPlus - a.doublesPlus) || (b.threePutts - a.threePutts));
}

function prepStrategyForHole(row) {
  const fairwayMiss = topDirection(row.fairwayMisses);
  const girMiss = topDirection(row.girMisses);
  if (row.avgOverPar >= 1.2 || row.doublesPlus >= 2) {
    return `Red flag hole: play for bogey at worst. Favor safe tee shot${fairwayMiss ? ` away from ${humanDirection(fairwayMiss)}` : ""}.`;
  }
  if (row.girPercent < 35 && girMiss) {
    return `Approach focus: aim away from ${humanDirection(girMiss)} and take center green.`;
  }
  if (row.threePutts >= 2) {
    return "Putting focus: leave uphill looks and avoid long first putts above the hole.";
  }
  return "Normal plan: commit to target, avoid the big-miss side, and take par when available.";
}

function puttingPlanForHole(row) {
  if (row.threePuttPercent >= 35) return "Lag putting priority: play approaches to the fattest green section and leave uphill first putts.";
  if (row.avgPutts >= 2.1) return "Speed control focus: avoid short-siding and long downhill first putts.";
  return "Keep the same putting plan; this hole is not a major 3-putt leak.";
}

function renderStrokesLost(stats) {
  const cards = [
    ["3-Putts / Round", formatNumber(stats.threePuttsPerRound, 1), `${stats.averageBasis.label}`],
    ["3-Putt Rate", `${formatNumber(stats.threePuttPercent, 0)}%`, "Holes with 3+ putts"],
    ["Total 3-Putts", stats.threePutts, "In current filter"],
  ];

  document.querySelector("#strokes-lost").innerHTML = cards
    .map(
      ([label, value, detail]) => `
        <article class="split-card">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${detail}</small>
        </article>
      `,
    )
    .join("");
}

function renderHistory(summaries) {
  const filter = roundFilter.value;
  const selectedCourse = courseFilter.value;
  const visibleScores = getPostedScores().filter((score) => {
    const roundTypeMatches = filter === "all" || (filter === "9" ? score.type === "N" : score.type !== "N");
    const courseMatches = selectedCourse === "all" || normalizeCourse(score.course) === selectedCourse;
    return roundTypeMatches && courseMatches;
  });

  document.querySelector("#round-history").innerHTML = visibleScores
    .map(
      (posted) => {
        const match = findWorkbookMatch(posted, summaries);
        const detailButton = match
          ? `<button class="stats-icon round-detail-button" type="button" data-round-id="${match.id}" aria-label="View ${match.label} details">chart</button>`
          : `<button class="stats-icon round-detail-button" type="button" disabled aria-label="Round details unavailable">chart</button>`;
        return `
        <tr>
          <td>R${posted.roundNumber}</td>
          <td>${formatDate(posted.date)}</td>
          <td><span class="score-chip">${renderCardScore(posted, match)}${posted.type}</span></td>
          <td>${renderAdjustedScore(posted, match)}</td>
          <td>${posted.crSlope}</td>
          <td>${posted.pcc}</td>
          <td>${formatOptionalNumber(posted.differential, 1)}</td>
          <td>${posted.course}</td>
          <td>${renderMatch(match, posted)}</td>
          <td>${detailButton}</td>
        </tr>
      `;
      },
    )
    .join("");
}

function handleRoundDetailClick(event) {
  const button = event.target.closest("[data-round-id]");
  if (!button || button.disabled) return;
  openRoundDetail(button.dataset.roundId);
}

function openRoundDetail(roundId) {
  const round = rounds.find((item) => item.id === roundId);
  if (!round) return;

  const summary = summarizeRound(round);
  roundDetailTitle.textContent = `${summary.label} Round Breakdown`;
  roundDetailEyebrow.textContent = `${formatDate(summary.date)} · ${displayCourseName(summary.course)} · ${summary.tees || "Tees not set"}`;
  roundDetailContent.innerHTML = renderRoundDetail(summary);
  roundDetailModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  roundDetailModal.querySelector(".modal-header [data-round-detail-close]").focus();
}

function closeRoundDetail() {
  roundDetailModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function renderRoundDetail(summary) {
  return `
    <div class="round-detail-kpis">
      ${renderRoundDetailKpis(summary)}
    </div>
    <div class="round-detail-layout">
      <section class="round-detail-section round-detail-read">
        <h3>Round Read</h3>
        ${renderRoundTakeaways(summary)}
      </section>
      <section class="round-detail-section">
        <h3>Score By Hole</h3>
        ${renderScoreSwingChart(summary.holes)}
      </section>
      <section class="round-detail-section">
        <h3>Putts By Hole</h3>
        ${renderPuttingChart(summary.holes)}
      </section>
      <section class="round-detail-section round-detail-misses">
        <h3>Miss Directions</h3>
        <div class="round-miss-grid">
          ${renderDirectionGroup("Green Misses", summary.girMisses, "Approach miss direction")}
          ${renderDirectionGroup("Fairway Misses", summary.fairwayMisses, "Tee-shot miss direction")}
        </div>
      </section>
      <section class="round-detail-section round-detail-holes">
        <h3>Hole Breakdown</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Hole</th>
                <th>Yards</th>
                <th>Par</th>
                <th>Score</th>
                <th>+/-</th>
                <th>Putts</th>
                <th>GIR</th>
                <th>Green Miss</th>
                <th>Fairway</th>
                <th>Fairway Miss</th>
              </tr>
            </thead>
            <tbody>${renderRoundHoleRows(summary.holes)}</tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function renderRoundDetailKpis(summary) {
  const cards = [
    ["Score", `${summary.score}${summary.postedType || ""}`, summary.adjustedScore ? `Adjusted ${summary.adjustedScore}` : `${summary.holesPlayed} holes`],
    ["To Par", signed(summary.overPar, 0), `${summary.par} par`],
    ["Putts", summary.putts, `${summary.threePutts} three-putts`],
    ["GIR", `${formatNumber(summary.girPercent, 0)}%`, `${summary.gir}/${summary.holesPlayed} greens`],
    ["Fairways", `${formatNumber(summary.fairwayPercent, 0)}%`, `${summary.fairways}/${summary.fairwayAttempts} attempts`],
    ["Doubles+", summary.scoring.doubles + summary.scoring.triples, renderScoreMix(summary)],
  ];

  return cards
    .map(
      ([label, value, detail]) => `
        <article class="round-detail-kpi">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${detail}</small>
        </article>
      `,
    )
    .join("");
}

function renderRoundTakeaways(summary) {
  const holes = summary.holes.map((hole) => ({ ...hole, diff: Number(hole.score || 0) - Number(hole.par || 0) }));
  const costlyHoles = holes
    .filter((hole) => hole.diff > 0)
    .sort((a, b) => b.diff - a.diff || b.putts - a.putts)
    .slice(0, 3);
  const threePutts = holes.filter((hole) => Number(hole.putts || 0) >= 3);
  const girMiss = topDirection(summary.girMisses);
  const fairwayMiss = topDirection(summary.fairwayMisses);
  const cleanHoles = holes.filter((hole) => hole.diff <= 0).length;
  const notes = [
    {
      label: "Score leak",
      text: costlyHoles.length
        ? `Biggest damage came on ${costlyHoles.map((hole) => `hole ${hole.hole} (${signed(hole.diff, 0)})`).join(", ")}.`
        : "No holes over par in this round.",
    },
    {
      label: "Putting",
      text: threePutts.length
        ? `${threePutts.length} three-putt hole${threePutts.length === 1 ? "" : "s"}: ${threePutts.map((hole) => hole.hole).join(", ")}.`
        : "No three-putts.",
    },
    {
      label: "Direction",
      text: `Most common green miss was ${humanDirection(girMiss, "none")}; most common fairway miss was ${humanDirection(fairwayMiss, "none")}.`,
    },
    {
      label: "Keep",
      text: `${cleanHoles}/${summary.holesPlayed} holes were par-or-better against the card.`,
    },
  ];

  return notes
    .map(
      (note) => `
        <div class="round-note">
          <strong>${note.label}</strong>
          <p>${note.text}</p>
        </div>
      `,
    )
    .join("");
}

function renderScoreSwingChart(holes) {
  const maxDiff = Math.max(1, ...holes.map((hole) => Math.abs(Number(hole.score || 0) - Number(hole.par || 0))));
  return `
    <div class="round-chart round-score-chart" aria-label="Score versus par by hole">
      ${holes.map((hole) => {
        const diff = Number(hole.score || 0) - Number(hole.par || 0);
        const height = Math.max(12, (Math.abs(diff) / maxDiff) * 100);
        const status = diff <= 0 ? "good" : "cost";
        return `
          <div class="round-chart-column">
            <div class="round-bar-space">
              <span class="round-bar ${status}" style="height:${height}%"></span>
            </div>
            <strong>${diff === 0 ? "E" : signed(diff, 0)}</strong>
            <small>${hole.hole}</small>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderPuttingChart(holes) {
  const maxPutts = Math.max(1, ...holes.map((hole) => Number(hole.putts || 0)));
  return `
    <div class="round-chart round-putt-chart" aria-label="Putts by hole">
      ${holes.map((hole) => {
        const putts = Number(hole.putts || 0);
        const height = Math.max(8, (putts / maxPutts) * 100);
        return `
          <div class="round-chart-column">
            <div class="round-bar-space">
              <span class="round-bar putts" style="height:${height}%"></span>
            </div>
            <strong>${putts}</strong>
            <small>${hole.hole}</small>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderRoundHoleRows(holes) {
  return holes
    .map((hole) => {
      const score = Number(hole.score || 0);
      const par = Number(hole.par || 0);
      const diff = score - par;
      return `
        <tr>
          <td>${hole.hole}</td>
          <td>${formatYards(hole.yards)}</td>
          <td>${par}</td>
          <td>${score}</td>
          <td class="${diff > 0 ? "sg-negative" : "sg-positive"}">${signed(diff, 0)}</td>
          <td>${hole.putts}</td>
          <td>${hole.gir ? "Hit" : "Miss"}</td>
          <td>${hole.gir ? "-" : humanDirection(hole.girMiss, "Direction missing")}</td>
          <td>${renderFairwayResult(hole.fairway)}</td>
          <td>${renderFairwayMiss(hole.fairway)}</td>
        </tr>
      `;
    })
    .join("");
}

function getPostedScores() {
  const importedScores = (window.GHIN_IMPORTS || []).map((round) => {
    const summary = summarizeRound(round);
    const postedScore = summary.adjustedScore ?? summary.score;
    return {
      score: postedScore,
      cardScore: summary.score,
      adjustedScore: summary.adjustedScore,
      type: round.postedType || (summary.holesPlayed === 9 ? "N" : "H"),
      date: round.date,
      course: displayCourseName(round.course),
      crSlope: round.crSlope || "",
      pcc: round.pcc || "-",
      differential: round.differential ?? "",
    };
  });

  const baseScores = postedScores.map((score, overviewOrder) => ({ ...score, overviewOrder }));
  const baseKeys = new Set(baseScores.map(postedScoreKey));
  const newImportedScores = importedScores
    .filter((score) => !baseKeys.has(postedScoreKey(score)))
    .map((score, index) => ({ ...score, overviewOrder: baseScores.length + index }));
  const combined = [...baseScores, ...newImportedScores];
  const chronological = combined
    .slice()
    .sort(
      (a, b) =>
        toIsoDate(a.date).localeCompare(toIsoDate(b.date)) ||
        b.overviewOrder - a.overviewOrder,
    )
    .map((score, index) => ({ ...score, roundNumber: index + 1 }));

  return chronological.sort(
    (a, b) =>
      toIsoDate(b.date).localeCompare(toIsoDate(a.date)) ||
      a.overviewOrder - b.overviewOrder,
  );
}

function postedScoreKey(score) {
  return `${toIsoDate(score.date)}|${normalizeCourse(score.course)}|${score.score}|${score.type}`;
}

function renderCardScore(posted, match) {
  return match?.score ?? posted.cardScore ?? posted.score;
}

function renderAdjustedScore(posted, match) {
  const cardScore = renderCardScore(posted, match);
  const adjustedScore = match?.adjustedScore ?? posted.adjustedScore;
  if (adjustedScore === undefined || adjustedScore === null || adjustedScore === "" || Number(adjustedScore) === Number(cardScore)) {
    return `<span class="muted-value">Same</span>`;
  }
  return adjustedScore;
}

function renderHoleStats(sourceRounds) {
  const holePlays = buildHolePlays(sourceRounds);
  updateHoleContextColumns();
  renderHoleCourseOptions(holePlays);

  const selectedCourse = holeStatsCourse.value;
  const coursePlays = selectedCourse === "all"
    ? holePlays
    : holePlays.filter((play) => play.courseKey === selectedCourse);
  renderHoleNumberOptions(coursePlays);

  const selectedHole = Number(holeStatsHole.value);
  const visiblePlays = coursePlays
    .filter((play) => play.hole === selectedHole)
    .sort((a, b) => toIsoDate(b.date).localeCompare(toIsoDate(a.date)) || b.roundNumber - a.roundNumber);

  renderHoleStatsSummary(visiblePlays, selectedHole, selectedCourse);
  document.querySelector("#hole-stats-table").innerHTML = visiblePlays
    .map(
      (play) => `
        <tr>
          <td>${play.roundLabel}</td>
          <td>${formatDate(play.date)}</td>
          <td class="context-column">${play.courseName}</td>
          <td class="context-column">${play.tees || "-"}</td>
          <td class="context-column">${play.hole}</td>
          <td class="context-column">${formatYards(play.yards)}</td>
          <td>${play.par}</td>
          <td>${play.score}</td>
          <td class="${play.overPar > 0 ? "sg-negative" : "sg-positive"}">${signed(play.overPar, 0)}</td>
          <td>${play.putts}</td>
          <td>${play.gir ? "Hit" : "Miss"}</td>
          <td>${play.gir ? "-" : humanDirection(play.girMiss, "Direction missing")}</td>
          <td>${renderFairwayResult(play.fairway)}</td>
          <td>${renderFairwayMiss(play.fairway)}</td>
        </tr>
      `,
    )
    .join("");
}


function renderCourseOverview(sourceRounds) {
  const panel = document.querySelector("#course-overview-list");
  if (!panel || !overviewCourseFilter) return;
  renderGenericCourseOptions(overviewCourseFilter, sourceRounds);
  const selectedCourse = overviewCourseFilter.value || "all";

  const summaries = sourceRounds.map((round) => ({
    ...summarizeRound(round),
    courseKey: normalizeCourse(round.course),
    courseName: displayCourseName(round.course),
  })).filter((round) => round.holesPlayed >= 9);

  const filtered = selectedCourse === "all" ? summaries : summaries.filter((round) => round.courseKey === selectedCourse);
  if (!filtered.length) {
    panel.innerHTML = `<article class="panel empty"><p class="muted-value">No course history yet.</p></article>`;
    return;
  }

  const byCourse = Array.from(filtered.reduce((map, round) => {
    if (!map.has(round.courseKey)) map.set(round.courseKey, []);
    map.get(round.courseKey).push(round);
    return map;
  }, new Map())).sort((a, b) => displayCourseName(a[1][0]?.courseName || a[0]).localeCompare(displayCourseName(b[1][0]?.courseName || b[0])));

  panel.innerHTML = byCourse.map(([courseKey, courseRounds]) => renderCourseOverviewCard(courseKey, courseRounds)).join("");
}

function renderCourseOverviewCard(courseKey, rounds) {
  const sorted = rounds.slice().sort((a, b) => toIsoDate(b.date).localeCompare(toIsoDate(a.date)));
  const courseName = sorted[0]?.courseName || displayCourseName(courseKey);
  const totalRounds = sorted.length;
  const rounds18 = sorted.filter((round) => Number(round.holesPlayed) === 18);
  const rounds9 = sorted.filter((round) => Number(round.holesPlayed) === 9);
  const overall = summarizeSummaryRows(sorted);
  const recent = summarizeSummaryRows(sorted.slice(0, Math.min(5, sorted.length)));
  const best = minBy(sorted, (round) => round.score);
  const worst = maxBy(sorted, (round) => round.score);

  return `
    <article class="course-overview-card panel">
      <div class="course-overview-header">
        <div>
          <span class="eyebrow">${courseName}</span>
          <h3>${totalRounds} round${totalRounds === 1 ? "" : "s"} tracked</h3>
        </div>
        <div class="course-overview-pill-row">
          <span>${rounds18.length} 18-hole</span>
          <span>${rounds9.length} 9-hole</span>
        </div>
      </div>
      <div class="course-overview-stats">
        ${renderOverviewMetric("Avg Score", formatNumber(overall.avgScore, 1), `${formatNumber(recent.avgScore, 1)} last ${Math.min(5, sorted.length)}`)}
        ${renderOverviewMetric("Avg To Par", signed(overall.avgOverPar, 1), `${signed(recent.avgOverPar, 1)} recent`)}
        ${renderOverviewMetric("GIR", `${formatNumber(overall.girPercent, 0)}%`, `${overall.gir}/${overall.holes} greens`)}
        ${renderOverviewMetric("Fairways", `${formatNumber(overall.fairwayPercent, 0)}%`, `${overall.fairways}/${overall.fairwayAttempts}`)}
        ${renderOverviewMetric("3-Putt Rate", `${formatNumber(overall.threePuttPercent, 0)}%`, `${overall.threePutts}/${overall.holes} holes`)}
        ${renderOverviewMetric("Putts/Round", formatNumber(overall.avgPutts, 1), "all tracked rounds")}
      </div>
      <div class="course-overview-splits">
        ${renderOverviewSplit("18-Hole Split", rounds18)}
        ${renderOverviewSplit("9-Hole Split", rounds9)}
      </div>
      <div class="course-overview-record-strip">
        ${renderRecordMini("Best", best, `${best.score} (${signed(best.overPar, 0)})`)}
        ${renderRecordMini("Worst", worst, `${worst.score} (${signed(worst.overPar, 0)})`)}
      </div>
    </article>
  `;
}

function summarizeSummaryRows(rows) {
  const holes = rows.reduce((total, round) => total + round.holesPlayed, 0) || 1;
  const fairwayAttempts = rows.reduce((total, round) => total + round.fairwayAttempts, 0);
  return {
    rounds: rows.length,
    holes,
    avgScore: average(rows, (round) => round.score),
    avgOverPar: average(rows, (round) => round.overPar),
    avgPutts: average(rows, (round) => round.putts),
    gir: rows.reduce((total, round) => total + round.gir, 0),
    fairways: rows.reduce((total, round) => total + round.fairways, 0),
    fairwayAttempts,
    threePutts: rows.reduce((total, round) => total + round.threePutts, 0),
    girPercent: percent(rows.reduce((total, round) => total + round.gir, 0), holes),
    fairwayPercent: percent(rows.reduce((total, round) => total + round.fairways, 0), fairwayAttempts),
    threePuttPercent: percent(rows.reduce((total, round) => total + round.threePutts, 0), holes),
  };
}

function average(rows, getValue) {
  return rows.length ? rows.reduce((total, row) => total + Number(getValue(row) || 0), 0) / rows.length : 0;
}

function renderOverviewMetric(label, value, note) {
  return `
    <div class="overview-metric">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </div>
  `;
}

function renderOverviewSplit(title, rows) {
  if (!rows.length) {
    return `
      <div class="overview-split empty">
        <strong>${title}</strong>
        <span>No rounds yet</span>
      </div>
    `;
  }
  const summary = summarizeSummaryRows(rows);
  return `
    <div class="overview-split">
      <strong>${title}</strong>
      <span>${rows.length} rounds</span>
      <div>${formatNumber(summary.avgScore, 1)} avg score</div>
      <small>${formatNumber(summary.girPercent, 0)}% GIR • ${formatNumber(summary.threePuttPercent, 0)}% 3-putt</small>
    </div>
  `;
}

function renderRecordMini(label, round, value) {
  return `
    <div class="record-mini">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${formatDate(round.date)}${round.tees ? ` • ${round.tees}` : ""}</small>
    </div>
  `;
}

function renderSeasonPage(sourceRounds) {
  if (!seasonYearFilter) return;
  renderYearOptions(seasonYearFilter, sourceRounds);
  const selectedYear = seasonYearFilter.value || "all";
  const seasonRounds = filterRoundsByYear(sourceRounds, selectedYear).map(summarizeRound);
  const panel = document.querySelector("#season-summary");
  const highlights = document.querySelector("#season-highlights");
  const table = document.querySelector("#season-course-table");
  const scoreTable = document.querySelector("#season-score-table");
  if (!panel || !table || !scoreTable) return;

  if (!seasonRounds.length) {
    if (highlights) highlights.innerHTML = "";
    panel.innerHTML = `<article class="kpi-card"><span>No rounds</span><strong>—</strong><small>No scores found for this year.</small></article>`;
    table.innerHTML = "";
    scoreTable.innerHTML = "";
    return;
  }

  const rounds18 = seasonRounds.filter((round) => round.holesPlayed === 18);
  const rounds9 = seasonRounds.filter((round) => round.holesPlayed === 9);
  const best18 = rounds18.length ? minBy(rounds18, (round) => round.score) : null;
  const best9 = rounds9.length ? minBy(rounds9, (round) => round.score) : null;
  const fullStats = seasonRounds.filter((round) => round.hasAdvancedStats).length;
  const scoreOnly = seasonRounds.filter((round) => round.scoreOnly).length;
  if (highlights) {
    renderSeasonHighlights(highlights, seasonRounds, selectedYear);
  }
  panel.innerHTML = [
    renderSeasonKpi("Season", selectedYear === "all" ? "All Years" : selectedYear, `${seasonRounds.length} total rounds`),
    renderSeasonKpi("18-Hole Rounds", rounds18.length, best18 ? `Best ${best18.score} on ${formatDate(best18.date)}` : "No 18-hole scores"),
    renderSeasonKpi("9-Hole Rounds", rounds9.length, best9 ? `Best ${best9.score} on ${formatDate(best9.date)}` : "No 9-hole scores"),
    renderSeasonKpi("Score-Only Rounds", scoreOnly, "Counts for score history, not advanced stat averages"),
    renderSeasonKpi("Full-Stat Rounds", fullStats, "Includes putts, GIR, fairways, and hole stats"),
    renderSeasonKpi("Avg 18 / 9", `${rounds18.length ? formatNumber(avg(rounds18, 'score'), 1) : "—"} / ${rounds9.length ? formatNumber(avg(rounds9, 'score'), 1) : "—"}`, "Raw scoring averages"),
  ].join("");

  const byCourse = Array.from(seasonRounds.reduce((map, round) => {
    const key = normalizeCourse(round.course);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(round);
    return map;
  }, new Map())).sort((a, b) => displayCourseName(a[1][0]?.course || a[0]).localeCompare(displayCourseName(b[1][0]?.course || b[0])));

  table.innerHTML = byCourse.map(([courseKey, courseRounds]) => {
    const c18 = courseRounds.filter((round) => round.holesPlayed === 18);
    const c9 = courseRounds.filter((round) => round.holesPlayed === 9);
    const cBest18 = c18.length ? minBy(c18, (round) => round.score) : null;
    const cBest9 = c9.length ? minBy(c9, (round) => round.score) : null;
    return `
      <tr>
        <td>${displayCourseName(courseRounds[0]?.course || courseKey)}</td>
        <td>${courseRounds.length}</td>
        <td>${c18.length}</td>
        <td>${c9.length}</td>
        <td>${courseRounds.filter((round) => round.scoreOnly).length}</td>
        <td>${cBest18 ? `${cBest18.score} <small>${formatDate(cBest18.date)}</small>` : "—"}</td>
        <td>${cBest9 ? `${cBest9.score} <small>${formatDate(cBest9.date)}</small>` : "—"}</td>
        <td>${c18.length ? formatNumber(avg(c18, "score"), 1) : "—"}</td>
        <td>${c9.length ? formatNumber(avg(c9, "score"), 1) : "—"}</td>
        <td>${courseRounds.filter((round) => round.hasAdvancedStats).length}/${courseRounds.length}</td>
      </tr>
    `;
  }).join("");

  scoreTable.innerHTML = seasonRounds
    .slice()
    .sort((a, b) => toIsoDate(b.date).localeCompare(toIsoDate(a.date)))
    .map((round) => `
      <tr>
        <td>${formatDate(round.date)}</td>
        <td>${displayCourseName(round.course)}</td>
        <td>${round.tees || "—"}</td>
        <td>${round.holesPlayed}</td>
        <td><span class="score-chip">${round.score}</span></td>
        <td>${round.par ? signed(round.overPar, 0) : "—"}</td>
        <td>${round.differential !== undefined && round.differential !== "" ? formatOptionalNumber(round.differential, 1) : "—"}</td>
        <td><span class="stat-type-pill ${round.scoreOnly ? "score-only" : "full-stats"}">${round.scoreOnly ? "Score only" : "Full stats"}</span></td>
      </tr>
    `).join("");
}

function renderSeasonHighlights(container, seasonRounds, selectedYear) {
  const rounds18 = seasonRounds.filter((round) => round.holesPlayed === 18);
  const rounds9 = seasonRounds.filter((round) => round.holesPlayed === 9);
  const best18 = rounds18.length ? minBy(rounds18, (round) => round.score) : null;
  const best9 = rounds9.length ? minBy(rounds9, (round) => round.score) : null;
  const lowestDiff = seasonRounds.filter((round) => round.differential !== undefined && round.differential !== null && round.differential !== "").length
    ? minBy(seasonRounds.filter((round) => round.differential !== undefined && round.differential !== null && round.differential !== ""), (round) => Number(round.differential))
    : null;
  const scoringRounds = seasonRounds.filter((round) => round.holesPlayed === 18 || round.holesPlayed === 9);
  const fullRounds = seasonRounds.filter((round) => round.hasAdvancedStats);
  const totalBirdies = fullRounds.reduce((sum, round) => sum + Number(round.scoring?.birdies || 0) + Number(round.scoring?.eagles || 0), 0);
  const totalThreePutts = fullRounds.reduce((sum, round) => sum + Number(round.threePutts || 0), 0);
  const totalHolesWithPutts = fullRounds.reduce((sum, round) => sum + (round.hasPuttingStats ? Number(round.holesPlayed || 0) : 0), 0);
  const threePuttPct = totalHolesWithPutts ? totalThreePutts / totalHolesWithPutts * 100 : null;

  container.innerHTML = `
    <article class="season-feature-card season-feature-main">
      <div>
        <p class="eyebrow">${selectedYear === "all" ? "All Seasons" : selectedYear + " Season"}</p>
        <h3>${seasonRounds.length} rounds logged</h3>
        <p>${rounds18.length} 18-hole rounds • ${rounds9.length} 9-hole rounds • ${fullRounds.length} full-stat rounds</p>
      </div>
    </article>
    <article class="season-feature-card">
      <span>Best 18</span>
      <strong>${best18 ? best18.score : "—"}</strong>
      <small>${best18 ? `${displayCourseName(best18.course)} • ${formatDate(best18.date)}` : "No 18-hole scores"}</small>
    </article>
    <article class="season-feature-card">
      <span>Best 9</span>
      <strong>${best9 ? best9.score : "—"}</strong>
      <small>${best9 ? `${displayCourseName(best9.course)} • ${formatDate(best9.date)}` : "No 9-hole scores"}</small>
    </article>
    <article class="season-feature-card">
      <span>Lowest Diff</span>
      <strong>${lowestDiff ? formatOptionalNumber(lowestDiff.differential, 1) : "—"}</strong>
      <small>${lowestDiff ? `${displayCourseName(lowestDiff.course)} • ${formatDate(lowestDiff.date)}` : "No differentials"}</small>
    </article>
    <article class="season-feature-card">
      <span>Birdies or Better</span>
      <strong>${fullRounds.length ? totalBirdies : "—"}</strong>
      <small>${fullRounds.length ? "From full-stat rounds" : "Needs full-stat rounds"}</small>
    </article>
    <article class="season-feature-card">
      <span>3-Putt Rate</span>
      <strong>${threePuttPct !== null ? `${formatNumber(threePuttPct, 1)}%` : "—"}</strong>
      <small>${threePuttPct !== null ? `${totalThreePutts} three-putts tracked` : "Needs putting stats"}</small>
    </article>
  `;
}

function renderSeasonKpi(label, value, note) {
  return `<article class="kpi-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`;
}

function renderYearOptions(selectEl, sourceRounds) {
  const current = selectEl.value || (getAvailableYears(sourceRounds).includes("2026") ? "2026" : "all");
  const years = getAvailableYears(sourceRounds);
  selectEl.innerHTML = [`<option value="all">All years</option>`, ...years.map((year) => `<option value="${year}">${year}</option>`)].join("");
  selectEl.value = years.includes(current) || current === "all" ? current : (years.includes("2026") ? "2026" : "all");
}

function getAvailableYears(sourceRounds) {
  return Array.from(new Set(sourceRounds.map((round) => getRoundYear(round)).filter(Boolean))).sort((a, b) => b.localeCompare(a));
}

function getRoundYear(round) {
  const iso = toIsoDate(round.date);
  return iso ? iso.slice(0, 4) : "";
}

function filterRoundsByYear(sourceRounds, selectedYear) {
  if (!selectedYear || selectedYear === "all") return sourceRounds;
  return sourceRounds.filter((round) => getRoundYear(round) === selectedYear);
}

function avg(items, key) {
  if (!items.length) return 0;
  return items.reduce((total, item) => total + Number(item[key] || 0), 0) / items.length;
}

function expectedParForRound(round, holesPlayed) {
  if (round.par) return Number(round.par);
  if (holesPlayed === 9) return 36;
  if (holesPlayed === 18) return 72;
  return holesPlayed ? holesPlayed * 4 : 0;
}

function renderRecordsPage(sourceRounds) {
  if (!recordsCourseFilter) return;
  renderGenericCourseOptions(recordsCourseFilter, sourceRounds);
  renderCoursePersonalRecords(sourceRounds, recordsCourseFilter.value, "#records-list");
}

function renderGenericCourseOptions(selectEl, sourceRounds) {
  if (!selectEl) return;
  const current = selectEl.value || "all";
  const courses = Array.from(
    sourceRounds.reduce((map, round) => {
      map.set(normalizeCourse(round.course), displayCourseName(round.course));
      return map;
    }, new Map()),
  ).sort((a, b) => a[1].localeCompare(b[1]));

  selectEl.innerHTML = [
    `<option value="all">All courses</option>`,
    ...courses.map(([value, label]) => `<option value="${value}">${label}</option>`),
  ].join("");

  selectEl.value = courses.some(([value]) => value === current) ? current : "all";
}

function renderCoursePersonalRecords(sourceRounds, selectedCourse, panelSelector = "#course-records") {
  const panel = document.querySelector(panelSelector);
  if (!panel) return;

  const completedRounds = sourceRounds
    .map((round) => {
      const summary = summarizeRound(round);
      return {
        ...summary,
        courseKey: normalizeCourse(round.course),
        courseName: displayCourseName(round.course),
        tees: round.tees || "",
        date: round.date,
      };
    })
    .filter((round) => round.holesPlayed >= 9);

  const filtered = selectedCourse && selectedCourse !== "all"
    ? completedRounds.filter((round) => round.courseKey === selectedCourse)
    : completedRounds;

  if (!filtered.length) {
    panel.innerHTML = `<article class="record-card empty"><p class="muted-value">No round history for this course yet.</p></article>`;
    return;
  }

  const byCourse = Array.from(
    filtered.reduce((map, round) => {
      if (!map.has(round.courseKey)) map.set(round.courseKey, []);
      map.get(round.courseKey).push(round);
      return map;
    }, new Map()),
  ).sort((a, b) => displayCourseName(a[1][0]?.courseName || a[0]).localeCompare(displayCourseName(b[1][0]?.courseName || b[0])));

  panel.innerHTML = byCourse.map(([courseKey, rounds]) => renderCourseRecordCard(courseKey, rounds)).join("");
}

function renderCourseRecordCard(courseKey, rounds) {
  const sorted = rounds.slice().sort((a, b) => toIsoDate(b.date).localeCompare(toIsoDate(a.date)));
  const courseName = sorted[0]?.courseName || displayCourseName(courseKey);
  const rounds18 = sorted.filter((round) => Number(round.holesPlayed) === 18);
  const rounds9 = sorted.filter((round) => Number(round.holesPlayed) === 9);

  return `
    <article class="record-card">
      <div class="record-card-header">
        <div>
          <span class="eyebrow">${courseName}</span>
          <h4>${rounds.length} round${rounds.length === 1 ? "" : "s"} tracked</h4>
        </div>
        <small>${rounds18.length} 18-hole • ${rounds9.length} 9-hole</small>
      </div>
      <div class="record-hole-groups">
        ${renderRecordHoleGroup("18-Hole Records", rounds18, "18")}
        ${renderRecordHoleGroup("9-Hole Records", rounds9, "9")}
      </div>
    </article>
  `;
}

function renderRecordHoleGroup(title, rounds, holeType) {
  if (!rounds.length) {
    return `
      <section class="record-hole-group empty">
        <div class="record-hole-group-title">
          <h5>${title}</h5>
          <span>No rounds yet</span>
        </div>
        <p class="muted-value">No ${holeType}-hole rounds tracked for this course.</p>
      </section>
    `;
  }

  const bestScore = minBy(rounds, (round) => round.score);
  const lowestToPar = minBy(rounds, (round) => round.overPar);
  const differentialRounds = rounds.filter((round) => Number.isFinite(Number(round.differential)));
  const lowestDifferential = differentialRounds.length ? minBy(differentialRounds, (round) => Number(round.differential)) : null;
  const mostBirdies = maxBy(rounds, (round) => round.scoring.birdies + round.scoring.eagles);
  const mostGir = maxBy(rounds, (round) => round.gir);
  const fairwayRounds = rounds.filter((round) => round.fairwayAttempts > 0);
  const mostFairways = fairwayRounds.length ? maxBy(fairwayRounds, (round) => round.fairways) : null;
  const fewestPutts = minBy(rounds, (round) => round.putts);
  const mostThreePutts = maxBy(rounds, (round) => round.threePutts);

  const worstScore = maxBy(rounds, (round) => round.score);
  const highestToPar = maxBy(rounds, (round) => round.overPar);
  const mostPutts = maxBy(rounds, (round) => round.putts);
  const fewestGir = minBy(rounds, (round) => round.gir);

  return `
    <section class="record-hole-group">
      <div class="record-hole-group-title">
        <h5>${title}</h5>
        <span>${rounds.length} round${rounds.length === 1 ? "" : "s"}</span>
      </div>
      <div class="record-columns">
        <div class="record-column best">
          <h5>Chase These</h5>
          ${renderRecordLine("Best Score", bestScore, `${bestScore.score} (${signed(bestScore.overPar, 0)})`)}
          ${renderRecordLine("Lowest To Par", lowestToPar, `${signed(lowestToPar.overPar, 0)}`)}
          ${lowestDifferential ? renderRecordLine("Lowest Differential", lowestDifferential, `${formatNumber(lowestDifferential.differential, 1)}`) : ""}
          ${renderRecordLine("Most Birdies+", mostBirdies, `${mostBirdies.scoring.birdies + mostBirdies.scoring.eagles}`)}
          ${renderRecordLine("Most GIR", mostGir, `${mostGir.gir}/${mostGir.holesPlayed} (${formatNumber(mostGir.girPercent, 0)}%)`)}
          ${mostFairways ? renderRecordLine("Most Fairways", mostFairways, `${mostFairways.fairways}/${mostFairways.fairwayAttempts} (${formatNumber(mostFairways.fairwayPercent, 0)}%)`) : ""}
          ${renderRecordLine("Fewest Putts", fewestPutts, `${fewestPutts.putts}`)}
        </div>
        <div class="record-column worst">
          <h5>Clean Up These</h5>
          ${renderRecordLine("Worst Score", worstScore, `${worstScore.score} (${signed(worstScore.overPar, 0)})`)}
          ${renderRecordLine("Highest To Par", highestToPar, `${signed(highestToPar.overPar, 0)}`)}
          ${renderRecordLine("Most Putts", mostPutts, `${mostPutts.putts}`)}
          ${renderRecordLine("Fewest GIR", fewestGir, `${fewestGir.gir}/${fewestGir.holesPlayed} (${formatNumber(fewestGir.girPercent, 0)}%)`)}
          ${renderRecordLine("Most 3-Putts", mostThreePutts, `${mostThreePutts.threePutts}`)}
        </div>
      </div>
    </section>
  `;
}

function renderRecordLine(label, round, value) {
  return `
    <div class="record-line">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${formatDate(round.date)}${round.tees ? ` • ${round.tees}` : ""}</small>
    </div>
  `;
}

function minBy(items, getValue) {
  return items.reduce((best, item) => getValue(item) < getValue(best) ? item : best, items[0]);
}

function maxBy(items, getValue) {
  return items.reduce((best, item) => getValue(item) > getValue(best) ? item : best, items[0]);
}

function updateHoleContextColumns() {
  holeStatsHistory.classList.toggle("hide-context-columns", !holeContextToggle.checked);
}

function buildHolePlays(sourceRounds) {
  const yardageLookup = createYardageLookup(sourceRounds);
  return sourceRounds.flatMap((round) => {
    const courseKey = normalizeCourse(round.course);
    const courseName = displayCourseName(round.course);
    const tees = round.tees || "";
    return (round.holes || []).map((hole) => {
      const score = Number(hole.score || 0);
      const par = Number(hole.par || 0);
      const yards = resolveHoleYards(round, hole, yardageLookup);
      return {
        roundLabel: shortRoundLabel(round.label),
        roundNumber: roundNumberValue(round.label),
        date: round.date,
        courseKey,
        courseName,
        tees,
        hole: hole.hole,
        yards,
        par,
        score,
        overPar: score - par,
        putts: Number(hole.putts || 0),
        gir: Boolean(hole.gir),
        girMiss: hole.gir ? null : hole.girMiss,
        fairway: hole.fairway,
      };
    });
  });
}

function buildHoleStats(sourceRounds) {
  const yardageLookup = createYardageLookup(sourceRounds);
  const groups = new Map();

  sourceRounds.forEach((round) => {
    const courseKey = normalizeCourse(round.course);
    const courseName = displayCourseName(round.course);
    const tees = round.tees || "";
    round.holes.forEach((hole) => {
      const yards = resolveHoleYards(round, hole, yardageLookup);
      const key = `${courseKey}|${tees}|${hole.hole}|${yards}`;
      if (!groups.has(key)) {
        groups.set(key, {
          courseKey,
          courseName,
          tees,
          hole: hole.hole,
          yards,
          pars: [],
          rounds: 0,
          par: getScorecardHole(round.course, hole.hole)?.par || hole.par,
          yards: getScorecardHole(round.course, hole.hole)?.yards || Number(hole.yards || 0),
          strokeIndex: getScorecardHole(round.course, hole.hole)?.strokeIndex || null,
          scoreTotal: 0,
          overParTotal: 0,
          puttTotal: 0,
          threePutts: 0,
          gir: 0,
          girMisses: {},
          fairways: 0,
          fairwayAttempts: 0,
          fairwayMisses: {},
          plays: [],
          scoring: { eagles: 0, birdies: 0, pars: 0, bogeys: 0, doubles: 0, triples: 0 },
        });
      }

      const row = groups.get(key);
      const score = Number(hole.score || 0);
      const par = Number(hole.par || 0);
      const putts = Number(hole.putts || 0);
      row.courseName = row.courseName.length >= courseName.length ? row.courseName : courseName;
      row.pars.push(hole.par);
      row.rounds += 1;
      row.scoreTotal += score;
      row.overParTotal += score - par;
      row.puttTotal += putts;
      row.threePutts += putts >= 3 ? 1 : 0;
      row.gir += hole.gir ? 1 : 0;
      if (!hole.gir && isMissDirection(hole.girMiss)) row.girMisses[hole.girMiss] = (row.girMisses[hole.girMiss] || 0) + 1;

      if (hole.fairway !== null && hole.fairway !== undefined && hole.fairway !== "") {
        row.fairwayAttempts += 1;
        if (hole.fairway === "hit") row.fairways += 1;
        else if (isMissDirection(hole.fairway)) row.fairwayMisses[hole.fairway] = (row.fairwayMisses[hole.fairway] || 0) + 1;
      }

      const diff = Number(hole.score || 0) - Number(hole.par || 0);
      if (diff <= -2) row.scoring.eagles += 1;
      else if (diff === -1) row.scoring.birdies += 1;
      else if (diff === 0) row.scoring.pars += 1;
      else if (diff === 1) row.scoring.bogeys += 1;
      else if (diff === 2) row.scoring.doubles += 1;
      else row.scoring.triples += 1;

      row.plays.push({
        roundLabel: shortRoundLabel(round.label),
        roundNumber: roundNumberValue(round.label),
        date: round.date,
        courseName,
        tees,
        hole: hole.hole,
        yards,
        par,
        score,
        overPar: score - par,
        putts,
        gir: Boolean(hole.gir),
        girMiss: hole.gir ? null : hole.girMiss,
        fairway: hole.fairway,
      });
    });
  });

  return Array.from(groups.values())
    .map((row) => ({
      ...row,
      par: mostCommon(row.pars),
      avgScore: row.scoreTotal / row.rounds,
      avgOverPar: row.overParTotal / row.rounds,
      avgPutts: row.puttTotal / row.rounds,
      threePuttPercent: percent(row.threePutts, row.rounds),
      girPercent: percent(row.gir, row.rounds),
      fairwayPercent: percent(row.fairways, row.fairwayAttempts),
    }))
    .sort(
      (a, b) =>
        a.courseName.localeCompare(b.courseName) ||
        a.hole - b.hole ||
        String(a.tees || "").localeCompare(String(b.tees || "")) ||
        a.yards - b.yards,
    );
}

function renderHoleCourseOptions(holePlays) {
  const current = holeStatsCourse.value || "all";
  const courses = Array.from(
    holePlays.reduce((map, play) => map.set(play.courseKey, play.courseName), new Map()),
  ).sort((a, b) => a[1].localeCompare(b[1]));

  holeStatsCourse.innerHTML = [
    `<option value="all">All courses</option>`,
    ...courses.map(([value, label]) => `<option value="${value}">${label}</option>`),
  ].join("");

  holeStatsCourse.value = courses.some(([value]) => value === current) ? current : "all";
}

function renderHoleNumberOptions(plays) {
  const current = holeStatsHole.value || "1";
  const holes = Array.from(new Set(plays.map((play) => play.hole))).sort((a, b) => a - b);
  holeStatsHole.innerHTML = holes.map((hole) => `<option value="${hole}">Hole ${hole}</option>`).join("");
  holeStatsHole.value = holes.includes(Number(current)) ? current : String(holes[0] || 1);
}

function renderHoleStatsSummary(plays, selectedHole, selectedCourse) {
  const girMisses = countBy(plays.filter((play) => !play.gir && isMissDirection(play.girMiss)).map((play) => play.girMiss));
  const fairwayMisses = countBy(
    plays.filter((play) => isMissDirection(play.fairway)).map((play) => play.fairway),
  );
  const aggregate = aggregateHolePlays(plays);
  const yardageCard = summarizeYardages(plays);
  renderHoleImagePanel(plays, selectedHole, selectedCourse);
  const cards = [
    ["Hole", `#${selectedHole}`, `${aggregate.plays} times played`],
    yardageCard,
    ["Avg Score", formatNumber(aggregate.avgScore, 2), `${signed(aggregate.avgOverPar, 2)} vs par`],
    ["Avg Putts", formatNumber(aggregate.avgPutts, 2), `${formatNumber(aggregate.threePuttPercent, 0)}% 3-putt`],
    ["GIR", `${formatNumber(aggregate.girPercent, 0)}%`, `${aggregate.gir}/${aggregate.plays} times`],
    ["Fairway", aggregate.fairwayAttempts ? `${formatNumber(aggregate.fairwayPercent, 0)}%` : "Par 3", aggregate.fairwayAttempts ? `${aggregate.fairways}/${aggregate.fairwayAttempts} attempts` : "No tee-shot stat"],
    ["Green Miss Pattern", humanDirection(topDirection(girMisses), "No green misses"), `${totalCounts(girMisses)} missed greens`],
    ["Fairway Miss Pattern", humanDirection(topDirection(fairwayMisses), "No fairway misses"), `${totalCounts(fairwayMisses)} missed fairways`],
  ];

  document.querySelector("#hole-stats-summary").innerHTML = cards
    .map(
      ([label, value, detail]) => `
        <article class="kpi">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${detail}</small>
        </article>
      `,
    )
    .join("");

  renderHolePerformanceCharts(plays);
}

function renderHolePerformanceCharts(plays) {
  const panel = document.querySelector("#hole-stats-charts");
  if (!panel) return;

  if (!plays.length) {
    panel.innerHTML = `
      <article class="hole-chart-card empty">
        <h4>Hole Trends</h4>
        <p class="muted-value">No hole history for this filter yet.</p>
      </article>
    `;
    return;
  }

  const chronological = [...plays].sort((a, b) =>
    toIsoDate(a.date).localeCompare(toIsoDate(b.date)) || a.roundNumber - b.roundNumber,
  );
  const recent = chronological.slice(-14);
  const total = plays.length;
  const threePutts = plays.filter((play) => play.putts >= 3).length;
  const scoreToPar = plays.map((play) => play.overPar);
  const birdiesOrBetter = scoreToPar.filter((value) => value < 0).length;
  const parsOrBetter = scoreToPar.filter((value) => value <= 0).length;
  const girHits = plays.filter((play) => play.gir).length;

  panel.innerHTML = `
    <article class="hole-chart-card">
      <div class="hole-chart-header">
        <div>
          <span class="eyebrow">Score To Par</span>
          <h4>Birdies below the axis</h4>
        </div>
        <strong>${formatNumber(plays.reduce((sum, play) => sum + play.overPar, 0) / total, 2)}</strong>
      </div>
      ${renderScoreToParChart(recent)}
      <p class="chart-note">${birdiesOrBetter} birdie-or-better • ${parsOrBetter} par-or-better • last ${recent.length} rounds shown</p>
    </article>

    <article class="hole-chart-card">
      <div class="hole-chart-header">
        <div>
          <span class="eyebrow">3-Putt Performance</span>
          <h4>Putting risk by round</h4>
        </div>
        <strong>${formatNumber(percent(threePutts, total), 0)}%</strong>
      </div>
      ${renderPuttChart(recent)}
      <p class="chart-note">${threePutts}/${total} times played were 3-putts or worse.</p>
    </article>

    <article class="hole-chart-card wide">
      <div class="hole-chart-header">
        <div>
          <span class="eyebrow">GIR Relationship</span>
          <h4>Green hit vs score result</h4>
        </div>
        <strong>${formatNumber(percent(girHits, total), 0)}% GIR</strong>
      </div>
      ${renderGirScoreChart(recent)}
      <p class="chart-note">Green bars are GIR. Gray bars are missed greens. This helps show whether the hole is more approach-driven or putting-driven.</p>
    </article>
  `;
}

function renderScoreToParChart(plays) {
  const width = 520;
  const height = 190;
  const pad = 22;
  const baseY = 95;
  const values = plays.map((play) => play.overPar);
  const maxAbs = Math.max(2, ...values.map((value) => Math.abs(value)));
  const step = (width - pad * 2) / Math.max(plays.length, 1);
  const barWidth = Math.max(10, Math.min(24, step * 0.62));

  const bars = plays.map((play, index) => {
    const x = pad + index * step + (step - barWidth) / 2;
    const barHeight = Math.abs(play.overPar) / maxAbs * 68;
    const y = play.overPar < 0 ? baseY : baseY - barHeight;
    const labelY = play.overPar < 0 ? baseY + barHeight + 14 : y - 6;
    const cls = play.overPar < 0 ? "good" : play.overPar === 0 ? "neutral" : "bad";
    return `
      <rect class="chart-bar ${cls}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${Math.max(2, barHeight).toFixed(1)}" rx="5"></rect>
      <text x="${(x + barWidth / 2).toFixed(1)}" y="${labelY.toFixed(1)}" text-anchor="middle" class="chart-label">${signed(play.overPar, 0)}</text>
    `;
  }).join("");

  return `
    <svg class="hole-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Score to par chart">
      <line class="chart-axis" x1="${pad}" y1="${baseY}" x2="${width - pad}" y2="${baseY}"></line>
      <text x="${pad}" y="${baseY - 74}" class="chart-axis-label">Over par</text>
      <text x="${pad}" y="${baseY + 84}" class="chart-axis-label">Birdie side</text>
      ${bars}
    </svg>
  `;
}

function renderPuttChart(plays) {
  const width = 520;
  const height = 150;
  const pad = 22;
  const maxPutts = Math.max(3, ...plays.map((play) => play.putts));
  const step = (width - pad * 2) / Math.max(plays.length, 1);
  const barWidth = Math.max(10, Math.min(24, step * 0.62));
  const baseY = 126;

  const bars = plays.map((play, index) => {
    const x = pad + index * step + (step - barWidth) / 2;
    const barHeight = play.putts / maxPutts * 92;
    const y = baseY - barHeight;
    const cls = play.putts >= 3 ? "bad" : play.putts <= 1 ? "good" : "neutral";
    return `
      <rect class="chart-bar ${cls}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${Math.max(3, barHeight).toFixed(1)}" rx="5"></rect>
      <text x="${(x + barWidth / 2).toFixed(1)}" y="${(y - 5).toFixed(1)}" text-anchor="middle" class="chart-label">${play.putts}</text>
    `;
  }).join("");

  return `
    <svg class="hole-chart short" viewBox="0 0 ${width} ${height}" role="img" aria-label="Putts by round chart">
      <line class="chart-axis" x1="${pad}" y1="${baseY}" x2="${width - pad}" y2="${baseY}"></line>
      <line class="chart-warning" x1="${pad}" y1="${(baseY - (3 / maxPutts * 92)).toFixed(1)}" x2="${width - pad}" y2="${(baseY - (3 / maxPutts * 92)).toFixed(1)}"></line>
      <text x="${width - pad}" y="${(baseY - (3 / maxPutts * 92) - 5).toFixed(1)}" text-anchor="end" class="chart-axis-label">3-putt line</text>
      ${bars}
    </svg>
  `;
}

function renderGirScoreChart(plays) {
  const width = 720;
  const height = 150;
  const pad = 22;
  const maxAbs = Math.max(2, ...plays.map((play) => Math.abs(play.overPar)));
  const step = (width - pad * 2) / Math.max(plays.length, 1);
  const barWidth = Math.max(10, Math.min(28, step * 0.58));
  const baseY = 88;

  const bars = plays.map((play, index) => {
    const x = pad + index * step + (step - barWidth) / 2;
    const barHeight = Math.abs(play.overPar) / maxAbs * 54;
    const y = play.overPar < 0 ? baseY : baseY - barHeight;
    const cls = play.gir ? "gir" : "miss";
    return `
      <rect class="chart-bar ${cls}" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${Math.max(3, barHeight).toFixed(1)}" rx="5"></rect>
      <text x="${(x + barWidth / 2).toFixed(1)}" y="${play.overPar < 0 ? (baseY + barHeight + 13).toFixed(1) : (y - 5).toFixed(1)}" text-anchor="middle" class="chart-label">${signed(play.overPar, 0)}</text>
    `;
  }).join("");

  return `
    <svg class="hole-chart short" viewBox="0 0 ${width} ${height}" role="img" aria-label="GIR and score result chart">
      <line class="chart-axis" x1="${pad}" y1="${baseY}" x2="${width - pad}" y2="${baseY}"></line>
      ${bars}
    </svg>
  `;
}

function renderHoleImagePanel(plays, selectedHole, selectedCourse) {
  const panel = document.querySelector("#hole-image-panel");
  if (!panel) return;

  const scorecard = selectedCourse && selectedCourse !== "all" ? getScorecardSummaryForCourse(selectedCourse) : null;

  if (!scorecard) {
    panel.innerHTML = `
      <article class="hole-image-card placeholder">
        <div>
          <span class="eyebrow">Hole Snapshot</span>
          <h3>Select a supported course</h3>
          <p class="muted-value">Choose Wenatchee, Palouse Ridge, or Rock Island, then pick a hole to show the course image next to your stats.</p>
        </div>
      </article>
    `;
    return;
  }

  const courseName = scorecard.displayName;
  const imageSrc = getCourseHoleImage(selectedCourse, selectedHole);
  const scorecardHole = getScorecardHole(selectedCourse, selectedHole);

  if (!imageSrc || !scorecardHole) {
    panel.innerHTML = `
      <article class="hole-image-card placeholder">
        <div>
          <span class="eyebrow">Hole Snapshot</span>
          <h3>No image available</h3>
          <p class="muted-value">No hole image is available for this course and hole yet.</p>
        </div>
      </article>
    `;
    return;
  }

  panel.innerHTML = `
    <article class="hole-image-card">
      <div class="hole-image-meta">
        <div>
          <span class="eyebrow">${courseName} • ${scorecard.tees}</span>
          <h3>Hole ${selectedHole}</h3>
        </div>
        <div class="hole-badges">
          <span>Par ${scorecardHole.par}</span>
          <span>${scorecardHole.yards} yds</span>
          <span>HCP ${scorecardHole.strokeIndex}</span>
        </div>
      </div>
      <img src="${imageSrc}" alt="${courseName} hole ${selectedHole} aerial snapshot" loading="lazy" />
      <p class="image-caption">Visual snapshot from your 18Birdies recording. Yardage, par, and HCP are from the scorecard you provided.</p>
    </article>
  `;
}

function aggregateHolePlays(plays) {
  const totals = plays.reduce(
    (acc, play) => ({
      plays: acc.plays + 1,
      scoreTotal: acc.scoreTotal + play.score,
      overParTotal: acc.overParTotal + play.overPar,
      puttTotal: acc.puttTotal + play.putts,
      threePutts: acc.threePutts + (play.putts >= 3 ? 1 : 0),
      gir: acc.gir + (play.gir ? 1 : 0),
      fairways: acc.fairways + (play.fairway === "hit" ? 1 : 0),
      fairwayAttempts: acc.fairwayAttempts + (play.fairway === null || play.fairway === undefined || play.fairway === "" ? 0 : 1),
    }),
    { plays: 0, scoreTotal: 0, overParTotal: 0, puttTotal: 0, threePutts: 0, gir: 0, fairways: 0, fairwayAttempts: 0 },
  );

  return {
    ...totals,
    avgScore: totals.plays ? totals.scoreTotal / totals.plays : 0,
    avgOverPar: totals.plays ? totals.overParTotal / totals.plays : 0,
    avgPutts: totals.plays ? totals.puttTotal / totals.plays : 0,
    threePuttPercent: percent(totals.threePutts, totals.plays),
    girPercent: percent(totals.gir, totals.plays),
    fairwayPercent: percent(totals.fairways, totals.fairwayAttempts),
  };
}

function createYardageLookup(sourceRounds) {
  const exact = new Map();
  const courseHole = new Map();

  sourceRounds.forEach((round) => {
    const courseKey = normalizeCourse(round.course);
    const teesKey = normalizeTees(round.tees);
    round.holes.forEach((hole) => {
      const yards = Number(hole.yards || 0);
      if (!yards) return;
      addYardageCount(exact, yardageKey(courseKey, teesKey, hole.hole), yards);
      addYardageCount(courseHole, yardageKey(courseKey, "", hole.hole), yards);
    });
  });

  return { exact, courseHole };
}

function addYardageCount(map, key, yards) {
  if (!map.has(key)) map.set(key, {});
  const counts = map.get(key);
  counts[yards] = (counts[yards] || 0) + 1;
}

function resolveHoleYards(round, hole, yardageLookup) {
  const scorecardHole = getScorecardHole(round.course, hole.hole);
  if (scorecardHole) return scorecardHole.yards;

  const storedYards = Number(hole.yards || 0);
  if (storedYards) return storedYards;

  const courseKey = normalizeCourse(round.course);
  const teesKey = normalizeTees(round.tees);
  const exactYards = topCountValue(yardageLookup.exact.get(yardageKey(courseKey, teesKey, hole.hole)));
  if (exactYards) return Number(exactYards);

  const courseYards = topCountValue(yardageLookup.courseHole.get(yardageKey(courseKey, "", hole.hole)));
  return courseYards ? Number(courseYards) : 0;
}

function getScorecardHole(course, holeNumber) {
  const scorecard = getScorecardSummaryForCourse(course);
  if (!scorecard) return null;
  const holeMap = COURSE_HOLE_MAPS.get(scorecard.courseKey);
  return holeMap?.get(Number(holeNumber)) || null;
}

function getCourseHoleImage(course, holeNumber) {
  const scorecard = getScorecardSummaryForCourse(course);
  if (!scorecard) return null;
  const hole = Number(holeNumber);
  if (!hole || hole < 1 || hole > 18) return null;
  return `hole-images/${scorecard.imagePrefix}-hole-${hole}.jpg`;
}

function getWenatcheeHoleImage(course, holeNumber) {
  return getCourseHoleImage(course, holeNumber);
}

function getScorecardSummaryForCourse(course) {
  const normalized = normalizeCourse(course);
  return COURSE_SCORECARDS.find((scorecard) =>
    scorecard.aliases.some((alias) => normalized.includes(normalizeCourse(alias))),
  ) || null;
}

function yardageKey(courseKey, teesKey, hole) {
  return `${courseKey}|${teesKey}|${hole}`;
}

function summarizeYardages(plays) {
  const counts = countBy(plays.map((play) => play.yards).filter((yards) => Number(yards) > 0));
  const yards = Object.keys(counts).map(Number).sort((a, b) => a - b);

  if (!yards.length) return ["Yards", "Missing", "No scorecard yardage found"];
  if (yards.length === 1) return ["Yards", `${yards[0]}`, "scorecard distance"];
  if (yards.length <= 3) return ["Yards", yards.join(" / "), "varies by course or tees"];
  return ["Yards", `${yards[0]}-${yards[yards.length - 1]}`, `${yards.length} distances in this view`];
}

function aggregateHoleRows(rows) {
  const empty = {
    rounds: 0,
    scoreTotal: 0,
    overParTotal: 0,
    puttTotal: 0,
    threePutts: 0,
    gir: 0,
    fairways: 0,
    fairwayAttempts: 0,
  };
  const totals = rows.reduce(
    (acc, row) => ({
      rounds: acc.rounds + row.rounds,
      scoreTotal: acc.scoreTotal + row.scoreTotal,
      overParTotal: acc.overParTotal + row.overParTotal,
      puttTotal: acc.puttTotal + row.puttTotal,
      threePutts: acc.threePutts + row.threePutts,
      gir: acc.gir + row.gir,
      fairways: acc.fairways + row.fairways,
      fairwayAttempts: acc.fairwayAttempts + row.fairwayAttempts,
    }),
    empty,
  );

  return {
    ...totals,
    avgScore: totals.rounds ? totals.scoreTotal / totals.rounds : 0,
    avgOverPar: totals.rounds ? totals.overParTotal / totals.rounds : 0,
    avgPutts: totals.rounds ? totals.puttTotal / totals.rounds : 0,
    threePuttPercent: percent(totals.threePutts, totals.rounds),
    girPercent: percent(totals.gir, totals.rounds),
    fairwayPercent: percent(totals.fairways, totals.fairwayAttempts),
  };
}

function renderMissTendency(row) {
  const gir = topDirection(row.girMisses);
  const fairway = topDirection(row.fairwayMisses);
  if (!gir && !fairway) return `<span class="match-badge">No misses</span>`;
  return `
    <span class="direction-chip">${gir ? `Green miss ${humanDirection(gir)}` : "Green clean"}</span>
    <span class="direction-chip">${fairway ? `Fairway miss ${humanDirection(fairway)}` : "Fairway clean"}</span>
  `;
}

function renderFairwayResult(fairway) {
  if (fairway === null || fairway === undefined || fairway === "") return "Par 3";
  return fairway === "hit" ? "Hit" : "Miss";
}

function renderFairwayMiss(fairway) {
  if (fairway === null || fairway === undefined || fairway === "" || fairway === "hit") return "-";
  return humanDirection(fairway, "Direction missing");
}

function renderScoreMix(row) {
  return `B+ ${row.scoring.eagles + row.scoring.birdies} / P ${row.scoring.pars} / Bo ${row.scoring.bogeys} / D+ ${row.scoring.doubles + row.scoring.triples}`;
}

function findWorkbookMatch(posted, summaries) {
  const sameRoundNumber = summaries.find((round) => roundNumberValue(round.label) === Number(posted.roundNumber));
  if (sameRoundNumber) return sameRoundNumber;

  const postedDate = toIsoDate(posted.date);
  const sameDate = summaries.filter((round) => toIsoDate(round.date) === postedDate);
  if (!sameDate.length) return null;

  const sameCourse = sameDate.filter(
    (round) => normalizeCourse(round.course) === normalizeCourse(posted.course),
  );
  const candidates = sameCourse.length ? sameCourse : sameDate;
  return candidates
    .slice()
    .sort((a, b) => postedScoreDistance(a, posted) - postedScoreDistance(b, posted))[0];
}

function postedScoreDistance(round, posted) {
  const scores = [round.score, round.adjustedScore].filter((score) => score !== null && score !== undefined && score !== "");
  return Math.min(...scores.map((score) => Math.abs(Number(score) - Number(posted.score))));
}

function renderMatch(match, posted) {
  if (!match) return `<span class="match-badge match-missing">No workbook round</span>`;
  if (Number(match.score) === Number(posted.score)) {
    return `<span class="match-badge match-ok">${match.label} matched</span>`;
  }
  if (Number(match.adjustedScore) === Number(posted.score)) {
    return `<span class="match-badge match-ok">${match.label} matched adjusted (${match.score} raw)</span>`;
  }
  return `<span class="match-badge match-warning">${match.label}: workbook ${match.score}, GHIN ${posted.score}</span>`;
}

function renderInsights(stats) {
  const insights = [
    {
      title: "Biggest scoring lever",
      body:
        stats.threePuttsPerRound > 1.5
          ? "Three-putt control is costing enough to deserve dedicated lag-putting and speed-control work."
          : "Three-putt control is reasonable. The next gains are likely GIR quality, short-game conversion, and avoiding doubles.",
    },
    {
      title: "Putting read",
      body:
        stats.threePuttsPerRound > 1.5
          ? "Three-putts are still above the sub-5 target. Lag putting should stay in the practice plan."
          : "Three-putt control is near target. Keep it warm, but do not let it steal all practice time.",
    },
    {
      title: "Ball-striking read",
      body:
        stats.girPercent >= 46
          ? "GIR is at the sub-5 benchmark. Protect the approach routine and use it as a strength."
          : "GIR is the cleanest place to gain strokes. Track misses next: short, long, left, right.",
    },
    {
      title: "Directional misses",
      body: `Most common GIR miss: ${humanDirection(topDirection(stats.girMisses), "No green misses")}. Most common fairway miss: ${humanDirection(topDirection(stats.fairwayMisses), "No fairway misses")}.`,
    },
  ];

  document.querySelector("#insights").innerHTML = insights
    .map(
      (insight) => `
        <div class="insight">
          <strong>${insight.title}</strong>
          <p>${insight.body}</p>
        </div>
      `,
    )
    .join("");
}

function renderMissDirections(stats) {
  document.querySelector("#miss-direction").innerHTML = [
    renderDirectionGroup("GIR Misses", stats.girMisses, "Approach miss direction when the green was missed"),
    renderDirectionGroup("Fairway Misses", stats.fairwayMisses, "Tee-shot miss direction when a fairway was missed"),
  ].join("");
}

function renderDirectionGroup(title, counts, detail) {
  const total = totalCounts(counts);
  return `
    <article class="miss-group">
      <div class="miss-group-header">
        <div>
          <strong>${title}</strong>
          <p>${detail}</p>
        </div>
        <span>${total} misses</span>
      </div>
      <div class="miss-bars">
        ${MISS_DIRECTIONS.map((direction) => renderDirectionBar(direction, counts?.[direction] || 0, total)).join("")}
      </div>
    </article>
  `;
}

function renderDirectionBar(direction, count, total) {
  const pct = percent(count, total);
  return `
    <div class="miss-row">
      <span>${humanDirection(direction)}</span>
      <div class="miss-track" aria-hidden="true">
        <div class="miss-fill" style="width: ${pct}%"></div>
      </div>
      <strong>${count}</strong>
      <small>${formatNumber(pct, 0)}%</small>
    </div>
  `;
}

function renderGoals(stats) {
  const targetCards = goalTargets
    .map((goal) => {
      const current = stats[goal.stat];
      const progress = goal.lowerIsBetter
        ? clamp((goal.target / Math.max(current, goal.target)) * 100, 0, 100)
        : clamp((current / goal.target) * 100, 0, 100);
      const done = goal.lowerIsBetter ? current <= goal.target : current >= goal.target;
      return `
        <article class="goal">
          <div class="goal-top">
            <div>
              <p class="eyebrow">${goal.stat}</p>
              <h3>${goal.title}</h3>
            </div>
            <span class="status">${done ? "On Track" : "In Progress"}</span>
          </div>
          <div class="meter"><span style="width:${progress}%"></span></div>
          <div class="goal-meta">
            <span>Current: ${formatNumber(current, goal.stat.includes("Percent") ? 0 : 1)}${goal.unit}</span>
            <span>Target: ${goal.target}${goal.unit}</span>
          </div>
          <p class="goal-meta">${goal.note}</p>
        </article>
      `;
    })
    .join("");

  const workbookGoals = (window.WORKBOOK_DATA?.goals || [])
    .slice(0, 8)
    .map(
      (goal) => `
        <article class="goal workbook-goal">
          <div class="goal-top">
            <div>
              <p class="eyebrow">${goal.category}</p>
              <h3>${goal.stat}</h3>
            </div>
            <span class="status">${goal.status || "Tracked"}</span>
          </div>
          <div class="goal-meta">
            <span>Current: ${goal.current}</span>
            <span>Target: ${goal.target}</span>
          </div>
          <p>${goal.notes}</p>
        </article>
      `,
    )
    .join("");

  document.querySelector("#goals-list").innerHTML = targetCards + workbookGoals;
}

function renderStrokesGained(sourceRounds) {
  const estimates = sourceRounds.map(estimateStrokesGained);
  const avg = (key) => estimates.reduce((total, row) => total + row[key], 0) / (estimates.length || 1);
  const summary = [
    ["SG Total", avg("sgTotal")],
    ["Putting", avg("sgPutting")],
    ["Tee to Green", avg("sgTeeToGreen")],
    ["Off Tee", avg("sgOffTee")],
    ["Approach", avg("sgApproach")],
    ["Around Green", avg("sgAroundGreen")],
  ];

  document.querySelector("#sg-summary").innerHTML = summary
    .map(
      ([label, value]) => `
        <article class="kpi">
          <span>${label}</span>
          <strong class="${value >= 0 ? "sg-positive" : "sg-negative"}">${signed(value, 2)}</strong>
          <small>Average vs 5-handicap baseline</small>
        </article>
      `,
    )
    .join("");

  document.querySelector("#sg-table").innerHTML = estimates
    .slice()
    .reverse()
    .map(
      (row) => `
        <tr>
          <td>${row.label}</td>
          ${["sgTotal", "sgPutting", "sgTeeToGreen", "sgOffTee", "sgApproach", "sgAroundGreen"]
            .map(
              (key) =>
                `<td class="${row[key] >= 0 ? "sg-positive" : "sg-negative"}">${signed(row[key], 2)}</td>`,
            )
            .join("")}
        </tr>
      `,
    )
    .join("");
}

function buildHoleInputs() {
  const count = Number(holeCount.value);
  const pars = count === 9 ? [5, 3, 4, 4, 4, 3, 5, 4, 4] : [5, 3, 4, 4, 4, 3, 5, 4, 4, 5, 4, 4, 5, 3, 4, 4, 3, 4];
  document.querySelector("#hole-inputs").innerHTML = pars
    .map(
      (par, index) => `
        <tr>
          <td>${index + 1}</td>
          <td><input type="number" min="3" max="6" value="${par}" data-field="par" data-hole="${index}"></td>
          <td><input type="number" min="1" max="12" value="${par}" data-field="score" data-hole="${index}"></td>
          <td><input type="number" min="0" max="6" value="2" data-field="putts" data-hole="${index}"></td>
          <td>
            <select data-field="girResult" data-hole="${index}">
              <option value="hit">Hit</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
            </select>
          </td>
          <td>
            <select data-field="fairway" data-hole="${index}">
              <option value="">N/A</option>
              <option value="hit">Hit</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
            </select>
          </td>
        </tr>
      `,
    )
    .join("");
}

function updateModeNote() {
  const notes = {
    basic: "Basic tracks score, putts, fairways, GIR, three-putts, and directional misses.",
    advanced: "Advanced adds miss direction, scrambling, sand saves, and club notes.",
    serious: "Serious mode is where shot-by-shot strokes gained will eventually live.",
  };
  document.querySelector("#mode-note").textContent = notes[trackingMode.value];
}

function loadExampleRound() {
  document.querySelector("#round-date").value = new Date().toISOString().slice(0, 10);
  document.querySelector("#round-course").value = "Wenatchee G&CC";
  document.querySelector("#round-tees").value = "Black/Blue";
  holeCount.value = "18";
  buildHoleInputs();

  const example = defaultRounds[2].holes;
  example.forEach((hole, index) => {
    setInput(index, "par", hole.par);
    setInput(index, "score", hole.score);
    setInput(index, "putts", hole.putts);
    setInput(index, "girResult", hole.gir ? "hit" : hole.girMiss || "short");
    setInput(index, "fairway", hole.fairway || "");
  });
}

function saveRound(event) {
  event.preventDefault();
  const count = Number(holeCount.value);
  const holes = Array.from({ length: count }, (_, index) => {
    const girResult = stringInput(index, "girResult");
    return {
      hole: index + 1,
      par: numberInput(index, "par"),
      score: numberInput(index, "score"),
      putts: numberInput(index, "putts"),
      gir: girResult === "hit",
      girMiss: girResult === "hit" ? null : girResult,
      fairway: stringInput(index, "fairway") || null,
    };
  });
  const nextNumber = rounds.length + 1;
  const round = {
    id: crypto.randomUUID(),
    label: `R${nextNumber} - ${count}`,
    date: document.querySelector("#round-date").value || new Date().toISOString().slice(0, 10),
    course: document.querySelector("#round-course").value,
    tees: document.querySelector("#round-tees").value,
    mode: trackingMode.value,
    holes,
  };

  rounds = [...rounds, round];
  persistRounds();
  render();
  document.querySelector("#save-message").textContent = `${round.label} saved. Dashboard updated.`;
}

function setInput(hole, field, value) {
  const input = document.querySelector(`[data-hole="${hole}"][data-field="${field}"]`);
  if (input.type === "checkbox") input.checked = Boolean(value);
  else input.value = value;
}

function numberInput(hole, field) {
  return Number(document.querySelector(`[data-hole="${hole}"][data-field="${field}"]`).value || 0);
}

function booleanInput(hole, field) {
  return document.querySelector(`[data-hole="${hole}"][data-field="${field}"]`).checked;
}

function stringInput(hole, field) {
  return document.querySelector(`[data-hole="${hole}"][data-field="${field}"]`).value;
}

function sum(items, key) {
  return items.reduce((total, item) => total + Number(item[key] || 0), 0);
}

function percent(value, total) {
  return total ? (value / total) * 100 : 0;
}

function countBy(values) {
  return values.reduce((counts, value) => {
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function isMissDirection(value) {
  return MISS_DIRECTIONS.includes(value);
}

function mergeCounts(target, source) {
  Object.entries(source || {}).forEach(([key, value]) => {
    target[key] = (target[key] || 0) + value;
  });
  return target;
}

function totalCounts(counts) {
  return Object.values(counts || {}).reduce((total, value) => total + Number(value || 0), 0);
}

function mostCommon(values) {
  const counts = countBy(values.filter((value) => value !== null && value !== undefined));
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return top ? top[0] : "";
}

function normalizeCount(value, round) {
  return round.holesPlayed === 9 ? value * 2 : value;
}

function getAverageBasis(summaries, filter) {
  if (filter === "9") return { mode: "raw", label: "9-hole average" };
  if (filter === "18") return { mode: "raw", label: "18-hole average" };

  const holeCounts = Array.from(new Set(summaries.map((round) => round.holesPlayed)));
  if (holeCounts.length === 1) {
    return { mode: "raw", label: `${holeCounts[0]}-hole average` };
  }
  return { mode: "eighteenEquivalent", label: "18-hole equivalent" };
}

function basisValue(value, round, basis) {
  return basis.mode === "eighteenEquivalent" ? normalizeCount(value, round) : value;
}

function signed(value, digits = 0) {
  const rounded = formatNumber(value, digits);
  return value > 0 ? `+${rounded}` : rounded;
}

function formatNumber(value, digits) {
  return Number(value || 0).toFixed(digits);
}

function formatOptionalNumber(value, digits) {
  if (value === "" || value === null || value === undefined) return "";
  return Number(value).toFixed(digits);
}

function formatYards(value) {
  const yards = Number(value || 0);
  return yards ? yards : "Missing";
}

function formatDate(value) {
  const iso = toIsoDate(value);
  if (!iso) return value || "";
  const [year, month, day] = iso.split("-");
  return `${month}/${day}/${year}`;
}

function shortRoundLabel(label) {
  const match = String(label || "").match(/R\d+/);
  return match ? match[0] : label || "-";
}

function roundNumberValue(label) {
  const match = String(label || "").match(/R(\d+)/);
  return match ? Number(match[1]) : 0;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function topDirection(counts) {
  const entries = Object.entries(counts || {});
  if (!entries.length) return null;
  return entries.sort((a, b) => b[1] - a[1])[0][0];
}

function topCountValue(counts) {
  const entries = Object.entries(counts || {});
  if (!entries.length) return null;
  return entries.sort((a, b) => b[1] - a[1] || Number(a[0]) - Number(b[0]))[0][0];
}

function humanDirection(direction, emptyLabel = "No misses") {
  if (!direction) return emptyLabel;
  const labels = {
    left: "left",
    right: "right",
    short: "short",
    long: "long",
    miss: "Direction missing",
  };
  return labels[direction] || direction;
}

function toIsoDate(value) {
  if (!value) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const match = String(value).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return value;
  const [, month, day, year] = match;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function normalizeCourse(course) {
  return String(course || "")
    .toLowerCase()
    .replace(/\bg&cc\b/g, "golf and country club")
    .replace(/\bgc\b/g, "golf course")
    .replace(/&/g, "and")
    .replace(/\bgolf club\b/g, "golf course")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeTees(tees) {
  return String(tees || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function displayCourseName(course) {
  const normalized = normalizeCourse(course);
  if (normalized.includes("wenatchee golf and country club")) return "Wenatchee Golf & Country Club";
  if (normalized.includes("palouse ridge golf course") || normalized.includes("palouse ridge")) return "Palouse Ridge Golf Club";
  if (normalized.includes("rock island golf course")) return "Rock Island Golf Course";
  return course || "Unknown Course";
}
