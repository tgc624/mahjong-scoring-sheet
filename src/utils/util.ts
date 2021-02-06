export type Player = { uid: string; name: string };
export type Players = [Player, Player, Player, Player];
export type Game = {
  id: string;
  scores: { uid: string; score: number }[];
  cratedAt: number;
};

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

  const scoresRows = [] as [number, number, number, number][];

  return [sortedPlayerNames, totalScores, scoresRows];
};
