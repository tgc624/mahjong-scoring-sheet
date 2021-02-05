import React from "react";
import { useParams } from "react-router-dom";

export const ScoreSheetPage = () => {
  const { sheetId } = useParams<{ sheetId: string }>();
  return <div>{sheetId},score sheet page!</div>;
};
