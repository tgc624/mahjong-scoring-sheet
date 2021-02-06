export type Player = { uid: string; name: string };
export type Players = [Player, Player, Player, Player];
export type Game = {
  id: string;
  scores: { uid: string; score: number }[];
  createdAt: number;
};

const sortBy = <T>(sortTarget: keyof T) => (array: T[]): T[] =>
  array.sort((a, b) => (a < b ? -1 : 1));

export const useScoreSheetTable = (
  players: Players,
  games: Game[]
): [
  [string, string, string, string],
  [number, number, number, number],
  [number, number, number, number][]
] => {
  const sortedUids = players.map((player) => player.uid).sort();

  const sortedPlayerNames = ((playerDict) =>
    sortedUids.map((uid) => playerDict[uid]))(
    Object.fromEntries(players.map(({ uid, name }) => [uid, name]))
  ) as [string, string, string, string];

  const totalScores = [0, 0, 0, 0] as [number, number, number, number];

  const sortedGames = sortBy("createdAt")(games) as Game[];
  const scoresRows = sortedGames.map((game) => {
    const scoreByUid = Object.fromEntries(
      game.scores.map(({ uid, score }) => [uid, score])
    );
    const sortedScores = sortedUids.map((uid) => scoreByUid[uid]) as [
      number,
      number,
      number,
      number
    ];
    return sortedScores;
  });

  return [sortedPlayerNames, totalScores, scoresRows];
};
