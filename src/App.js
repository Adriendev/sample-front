import { Route, Routes } from "react-router-dom";
import "./App.css";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
