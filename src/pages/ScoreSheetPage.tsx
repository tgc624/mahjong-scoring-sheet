import React from "react";
import { useParams } from "react-router-dom";
import { callbackify } from "util";

type Player = { uid: string; name: string };
type Game = {
  id: string;
  scores: { uid: string; score: number }[];
  cratedAt: number;
};
const ScoreSheet = ({
  players,
}: {
  players: [Player, Player, Player, Player];
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {players.map((player) => (
            <th
              key={player.uid}
              style={{
                textAlign: "center",
                width: `calc(100% / ${players.length})`,
              }}
            >
              {player.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Σ</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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
