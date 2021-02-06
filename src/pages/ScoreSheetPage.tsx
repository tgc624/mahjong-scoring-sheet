import React from "react";
import { useParams } from "react-router-dom";
import { Game, Player, Players, useScoreSheetTable } from "../utils/util";

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
  const games: Game[] = [];
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
