import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'

import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
} from '../store/actionCreators'

import { message, Slider } from 'antd'
import { NavLink } from 'react-router-dom'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'

export default function AppPlayerBar() {
  const [currentTIme, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { currentSong, sequence, lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      currentSong: state.get('player').get('currentSong'),
      sequence: state.get('player').get('sequence'),
      lyricList: state.get('player').get('lyricList'),
      currentLyricIndex: state.get('player', 'currentLyricIndex'),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true)
      })
      .catch(
        (err) => {
          setIsPlaying(false)
        },
        [currentSong]
      )
  })

  return (
    <PlaybarWrapper className='sprite_player'>
      <div>123</div>
    </PlaybarWrapper>
  )
}
