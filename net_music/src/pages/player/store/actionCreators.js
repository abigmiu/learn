import { getSongDetail, getLyric } from "@/services/player";
import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";

import * as actionTypes from "./constants";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
});

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
});

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().get("player").get("playList");
    const sequence = getState().get("player").get("sequence");

    let currentSongIndex = getState().get("player").get("currentSongIndex");
  };
};
