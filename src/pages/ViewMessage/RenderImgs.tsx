
import React, {FC} from "react";
import {PhotoProvider, PhotoView } from "react-photo-view";

interface RenderImgs {
  image_urls: any[]
}

const RenderImgs: FC<RenderImgs> = ({ image_urls }) => {

  const renderImgs = (image_urls: any[] = []) => {
    const width = image_urls?.length >= 2 ? "calc((100% - 4px) / 3)" : "calc((100% - 0px) / 1)"
    if (image_urls?.length === 1) {
      return image_urls?.map((item, index) => (
        <div
          className="overflow-hidden mb-2"
          key={index}
          style={{ width,  marginLeft: 0, marginTop: 0 }}
        >
          <div className="relative" style={{paddingBottom: '100%'}}>
            <PhotoView key={index} src={item.url}>
              <img src={item.url} alt="img" className="h-full w-full absolute top-0 left-0 object-cover"/>
            </PhotoView>
          </div>
        </div>
      ))
    }
    return image_urls?.map((item, index) => (
      <div
        className="overflow-hidden mb-2"
        key={index}
        style={{
          width,
          marginLeft: !!( index % 3) ? 2 : 0,
          marginTop: index > 2 ? 2 : 0,
        }}
      >
        <div className="relative overflow-hidden" style={{height: 0, paddingBottom: '74.34%'}}>
          <PhotoView key={index} src={item.url}>
            <img src={item.url} alt="img" className="h-full w-full absolute top-0 left-0 object-cover"/>
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

export default RenderImgs
