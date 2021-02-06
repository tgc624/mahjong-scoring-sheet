import React from "react";
import { useParams } from "react-router-dom";
import { Game, Player, Players, useScoreSheetTable } from "../utils/util";

const ScoreSheet = ({
  players,
  games,
}: {
  players: Players;
  games: Game[];
}) => {
  const [playerNames, totalScores, scoresRows] = useScoreSheetTable(
    players,
    games
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
        {scoresRows.map((scores, rowIndex) => (
          <tr key={rowIndex}>
            <td>{rowIndex + 1}</td>
            {scores.map((score, colIndex) => (
              <td
                key={colIndex}
                style={{
                  textAlign: "center",
                  width: `calc(100% / ${playerNames.length})`,
                }}
              >
                {score}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const ScoreSheetPage = () => {
  const { sheetId } = useParams<{ sheetId: string }>();
  const games: Game[] = [
    {
      id: "1",
      scores: [
        { uid: "a", score: 1000 },
        { uid: "b", score: 2000 },
        { uid: "c", score: 30000 },
        { uid: "d", score: -40000 },
      ],
      createdAt: 1,
    },
  ];
  const players: [Player, Player, Player, Player] = [
    { uid: "a", name: "佐藤" },
    { uid: "b", name: "鈴木" },
    { uid: "c", name: "高橋" },
    { uid: "d", name: "田中" },
  ];
  return (
    <div>
      <ScoreSheet players={players} games={games} />
    </div>
  );
};
