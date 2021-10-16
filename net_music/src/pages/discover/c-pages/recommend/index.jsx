import React from "react";

import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

export default function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
        </RecommendLeft>
      </Content>
    </RecommendWrapper>
  );
}
