import React from "react";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

export default function App() {
  return (
    <div style={{ marginTop: "15px" }} className="ui container grid">
      <div className="ui row">
        <div className="column six wide">
          <SongList />
        </div>
        <div className="column six wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}
