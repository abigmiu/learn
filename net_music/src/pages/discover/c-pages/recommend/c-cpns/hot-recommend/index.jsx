import React, { useEffect } from "react";
import { HOT_RECOMMEND_LIMIT } from "@/common/contants";
import { HotRecommendWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getHotRecommendAction } from "../../store/actionCreatpr";
import ThemeHeaderRCM from "@/components/theme-header-rcm";

export default function HotRecommend() {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.get("recommend").get("hotRecommends"),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      ></ThemeHeaderRCM>
    </HotRecommendWrapper>
  );
}
