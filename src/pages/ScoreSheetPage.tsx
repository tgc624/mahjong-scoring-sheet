import React from "react";
import { useParams } from "react-router-dom";

type Player = { uid: string; name: string };
type Players = [Player, Player, Player, Player];
type Game = {
  id: string;
  scores: { uid: string; score: number }[];
  cratedAt: number;
};

const useScoreSheetTable = (
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

const ScoreSheet = ({ players }: { players: Players }) => {
  const [playerNames, totalScores, scoresRows] = useScoreSheetTable(
    players,
    []
  );
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {playerNames.map((name, index) => (
            <th
              key={index}
              style={{
                textAlign: "center",
                width: `calc(100% / ${playerNames.length})`,
              }}
            >
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Σ</td>
          {totalScores.map((totalScore, index) => (
            <td
              key={index}
              style={{
                textAlign: "center",
              }}
            >
              {totalScore}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export const ScoreSheetPage = () => {
  const { sheetId } = useParams<{ sheetId: string }>();
  const players: [Player, Player, Player, Player] = [
    { uid: "a", name: "佐藤" },
    { uid: "b", name: "鈴木" },
    { uid: "c", name: "高橋" },
    { uid: "d", name: "田中" },
  ];
  return (
    <div>
      <ScoreSheet players={players} />
    </div>
  );
};
