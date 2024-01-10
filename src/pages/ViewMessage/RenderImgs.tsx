
import React, {FC} from "react";

interface RenderImgs {
  image_urls: any[]
}

const RenderImgs: FC<RenderImgs> = ({ image_urls }) => {

  const renderImgs = (image_urls: any[] = []) => {
    if (image_urls?.length) {
      const width = image_urls?.length >= 2 ? "calc((100% - 4px) / 3)" : "calc((100% - 0px) / 1)"
      if (image_urls?.length === 1) {
        return image_urls?.map((item, index) => (
          <div
            className="overflow-hidden mb-2"
            key={index}
            style={{ width,  marginLeft: 0, marginTop: 0 }}
          >
            <div className="relative" style={{paddingBottom: '100%'}}>
              <img src={item.url} alt="img" className="h-full w-full absolute top-0 left-0 object-cover"/>
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
            <img src={item.url} alt="img" className="h-full w-full absolute top-0 left-0 object-cover"/>
          </div>
        </div>
      ))
    }
    return null
  }

  return image_urls?.length ? renderImgs(image_urls) : null
}

export default RenderImgs
