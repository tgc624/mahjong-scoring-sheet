import styles from "./ScoreSheetPageRules.module.css";

export const Rules = () => {
  return (
    <fieldset
      className={styles.rules}
      style={{ marginLeft: 16, marginRight: 16, padding: 4 }}
    >
      <legend>精算時のルール</legend>
      <ul>
        <li>オカ: 25,000点持ち、30,000点返し</li>
        <li>ウマ: 5-10</li>
        <li>同点の場合は上家取り</li>
        <li>供託点棒はトップ総取り</li>
        <li>精算は四捨五入なし</li>
      </ul>
    </fieldset>
  );
};
