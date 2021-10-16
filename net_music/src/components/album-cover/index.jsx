import React from "react";

import { getSizeImage } from "@/utils/format-utils";

import { AlbumWrapper } from "./style";

export default function AlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="" className="cover image_cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.nmae}</div>
      </div>
    </AlbumWrapper>
  );
}
