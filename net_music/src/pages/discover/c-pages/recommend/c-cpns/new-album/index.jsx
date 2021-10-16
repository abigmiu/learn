import ThemeHeaderRCM from "@/components/theme-header-rcm";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { getNewAlbumAction } from "../../store/actionCreatpr";
import { AlbumWrapper } from "./style";

export default function NewAlbum() {
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.get("recommend").get("newAlbums"),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const pageRef = useRef();

  useEffect(() => {
    dispatch(getNewAlbumAction);
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架"></ThemeHeaderRCM>
    </AlbumWrapper>
  );
}
