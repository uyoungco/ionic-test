
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import type { ImageUrl } from "../../type";
import React, {FC, memo} from "react";
import { ImageUrl } from "@/pages/Home/type";
import {PhotoProvider, PhotoView } from "react-photo-view";

interface RenderImgsProps {
  image_urls: ImageUrl[]
}

const RenderImgs: FC<RenderImgsProps> = ({ image_urls }) => {

  const renderImgs = (image_urls: ImageUrl[] = []) => {
    const width = image_urls?.length >= 2 ? "calc((100% - 4px) / 3)" : "calc((100% - 0px) / 1)"
    if (image_urls?.length === 1) {
      return image_urls?.map((item, index) => (
        <div
          key={index}
          style={{
            width,
            marginLeft: "0px",
            marginTop: 0
          }}
        >
          <div className="relative overflow-hidden">
            <PhotoView key={index} src={item.url}>
              <img
                onClick={e => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
                src={item.url}
                alt="img"
                className="max-w-[171px] max-h-[171px] h-full w-auto"
              />
            </PhotoView>

          </div>
        </div>
      ))
    }
    return image_urls.splice(0, 3)?.map((item, index) => (
      <div
        key={index}
        style={{
          width,
          marginLeft: !!(index % 3) ? 2 : 0,
          marginTop: index > 2 ? 2 : 0,
        }}
      >
        <div className="relative overflow-hidden" style={{height: 0, paddingBottom: '74.34%'}}>
          <PhotoView key={index} src={item.url}>
            <img
              onClick={e => {
                e.stopPropagation()
                e.preventDefault()
              }}
              src={item.url}
              alt="img"
              className="h-full w-full absolute top-0 left-0 object-cover"
            />
          </PhotoView>
        </div>
      </div>
    ))
  }

  if (!image_urls?.length) {
    return null
  }

  return (
    <PhotoProvider photoClosable>
      {
        renderImgs(image_urls)
      }
    </PhotoProvider>
  )
}

export default memo(RenderImgs)

