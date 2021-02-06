import React from "react";
import { ScoreSheetPage } from "./pages/ScoreSheetPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const TopPage = () => <div>top page</div>;
const NotFoundPage = () => (
  <div style={{ margin: 16 }}>
    <h2>Page not found</h2>
    <p>Sorry, the requested page could not be found.</p>
    <p>
      <a href="/top">Go back to the top page</a>
    </p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <h1 style={{ textAlign: "center" }}>麻雀スコアシート</h1>
      <Switch>
        <Route path="/sheets/:sheetId" component={ScoreSheetPage} />
        <Route path="/top" component={TopPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
