import AlbumCover from "@/components/album-cover";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { Carousel } from "antd";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { getNewAlbumAction } from "../../store/actionCreatpr";
import { AlbumWrapper } from "./style";

export default function NewAlbum() {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.get("recommend").get("newAlbums"),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const pageRef = useRef();

  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  const ary = [0, 1];

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架"></ThemeHeaderRCM>
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {ary.map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((item) => {
                    return (
                      <AlbumCover
                        key={item.id}
                        info={item}
                        size={100}
                        width={118}
                        bgp="-570px"
                      ></AlbumCover>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
}
