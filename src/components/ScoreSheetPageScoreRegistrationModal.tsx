import React, { useMemo, useState } from "react";
import { Modal } from "../components/CommonModal";
import { Player } from "../utils/util";

export const ScoreRegistrationModal = ({
  isOpen,
  toggleOpen,
  players,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
  players: [Player, Player, Player, Player];
}) => {
  const [scoreByUser, setScoreByUser] = useState(
    Object.fromEntries(players.map(({ uid }) => [uid, "0"])) as {
      [uid: string]: string;
    }
  );
  const remainingPoint = useMemo(() => {
    const totalScore = players
      .map(({ uid }) => parseInt(scoreByUser[uid]))
      .reduce((acc, cur) => acc + cur);
    return 100 * 1000 - totalScore; // 4人の開始時の合計点から、最終結果のスコアを引く
  }, [players, scoreByUser]);
  return (
    <Modal open={isOpen} toggleOpen={toggleOpen}>
      <div style={{ padding: 8 }}>
        <h1>スコアを登録</h1>
        <p>精算前の点数を入力してください</p>
        {players.map((player) => {
          return (
            <fieldset key={player.uid} style={{ border: 0, padding: 0 }}>
              <legend>{player.name}</legend>
              <input
                type="number"
                style={{ fontSize: "large", textAlign: "right", width: "100%" }}
                value={scoreByUser[player.uid]}
                onChange={(event) => {
                  event.preventDefault();
                  const newValue = event.target.value;
                  setScoreByUser((currentDict) => ({
                    ...currentDict,
                    [player.uid]: newValue,
                  }));
                }}
              ></input>
            </fieldset>
          );
        })}
        <p>供託点棒: {remainingPoint.toLocaleString()}</p>
        <button disabled={remainingPoint < 0} style={{ color: "black" }}>
          次へ
        </button>
      </div>
    </Modal>
  );
};
