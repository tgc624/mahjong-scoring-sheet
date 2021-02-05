import React from "react";
import { ScoreSheetPage } from "./pages/ScoreSheetPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const TopPage = () => <div>top page</div>;
const NotFoundPage = () => <div>404</div>;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sheets/:sheetId" component={ScoreSheetPage} />
        <Route path="/top" component={TopPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
