import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../components/CommonModal";
import { Fab } from "../components/CommonFab";
import { Rules } from "../components/ScoreSheetPageRules";
import { Game, Player, Players, useScoreSheetTable } from "../utils/util";

const ScoreSheetScoreTd = ({ score }: { score: number }) => {
  const scoreString = score.toLocaleString();
  return <td style={{ textAlign: "center" }}>{scoreString}</td>;
};

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
            <ScoreSheetScoreTd key={index} score={totalScore} />
          ))}
        </tr>
        {scoresRows.map((scores, rowIndex) => (
          <tr key={rowIndex}>
            <td>{rowIndex + 1}</td>
            {scores.map((score, colIndex) => (
              <ScoreSheetScoreTd key={colIndex} score={score} />
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
  const modals = {
    inviteModal: (([status, toggle]) => ({ status, toggle }))(useState(false)),
    usageModal: (([status, toggle]) => ({ status, toggle }))(useState(false)),
    adjustModal: (([status, toggle]) => ({ status, toggle }))(useState(false)),
    addModal: (([status, toggle]) => ({ status, toggle }))(useState(false)),
  };
  return (
    <div>
      <ScoreSheet players={players} games={games} />
      <Rules />
      <Modal
        open={modals.addModal.status}
        toggleOpen={() => {
          modals.addModal.toggle((b) => !b);
        }}
      >
        <div style={{ padding: 8 }}>
          <h1>スコアを登録</h1>
          <p>精算前の点数を入力してください</p>
          {players.map((player) => {
            return (
              <fieldset key={player.uid} style={{ border: 0, padding: 0 }}>
                <legend>{player.name}</legend>
                <input
                  type="number"
                  style={{ fontSize: "large", width: "100%" }}
                ></input>
              </fieldset>
            );
          })}
          <p>供託点棒: {0}</p>
          <button>次へ</button>
        </div>
      </Modal>
      <Fab text="招待する" left={16} outline bottom={16 + 40 + 16} />
      <Fab text="使い方" left={16} outline bottom={16} />
      <Fab text="$" circle outline right={16} bottom={16 + 56 + 16} />
      <Fab
        text="+"
        circle
        right={16}
        bottom={16}
        onClick={() => modals.addModal.toggle((b) => !b)}
      />
    </div>
  );
};
