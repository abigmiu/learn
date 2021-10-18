import { getCount, getSizeImage } from "@/utils/format-utils";
import React from "react";
import { SongsCoverWrapper } from "./style";

export default function SongCover(props) {
  const { info } = props;
  return (
    <SongsCoverWrapper>
      <div className="covet-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_cion erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">
        by {info.copywrite || info.name}
      </div>
    </SongsCoverWrapper>
  );
}
