import { combineReducers } from "redux";

const songsReduder = () => {
  return [
    { title: "Believer", duration: 4.65 },
    { title: "Time", duration: 9.65 },
    { title: "Closer", duration: 5.65 },
    { title: "Heathens", duration: 2.65 },
  ];
};

const SelectedSongReducer = (selected = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selected;
};

export default combineReducers({
  songs: songsReduder,
  selectedSong: SelectedSongReducer,
});
