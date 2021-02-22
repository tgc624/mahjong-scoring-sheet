import React, { useState } from "react";
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
                style={{ fontSize: "large", width: "100%" }}
              ></input>
            </fieldset>
          );
        })}
        <p>供託点棒: {0}</p>
        <button>次へ</button>
      </div>
    </Modal>
  );
};
