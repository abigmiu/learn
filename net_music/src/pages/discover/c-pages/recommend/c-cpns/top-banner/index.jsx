import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector, shallowEqual } from "react-redux";
import { getTopBannerAction } from "../../store/actionCreatpr";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { Carousel } from "antd";
export default function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.get("recommend").get("topBanners"),
    }),
    shallowEqual
  );

  const dispathch = useDispatch();

  const bannerRef = useRef();

  useEffect(() => {
    dispathch(getTopBannerAction);
  }, [dispathch]);

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" ley={item.imageUrl}>
                  <img
                    className="iamge"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
}
