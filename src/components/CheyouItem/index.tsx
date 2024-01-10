import { FC } from "react";
import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonNote
} from '@ionic/react';
// import './index.css';
import {CheyouList, MedalList, UserDescriptionList} from "@/pages/Home/type";
import Style from './index.module.scss'
import {renderEmoticon} from "@/utils/emoticons";
import RenderImgs from "./RenderImgs";
import dayjs from '@/utils/time'


interface CheyouItemProps {
  item: CheyouList;
}

const medalRender = (medal_list: MedalList[]) => {
  if (medal_list?.length) {
    const item = medal_list[0]
    return <img src={item.icon_url} alt={item.desc_content} className="h-4 object-cover align-text-bottom ml-1 inline-block" />
  }
  return null
}

const userDescription = (user_description_list: UserDescriptionList[]) => {
  if (user_description_list?.length) {
    const item = user_description_list[0]
    return (
      <div className="text-xs leading-18 text-default-500 truncate">
        <img src={item.icon} alt={item.description} className="h-4 object-cover align-text-bottom ml-1 inline-block mr-2" />
        {item.description}
      </div>
    )
  }
  return null
}

const CheyouItem: FC<CheyouItemProps> = ({ item }) => {
  // bg-content1
  const CardClass = " transition-colors outline-none text-foreground overflow-hidden"


  return (
    <IonItem
      lines="full"
      className={Style.itemContainer}
      routerLink={`/message/${item.gid_str}`}
      detail={false}
    >
      <IonLabel className={Style.ionTextWrap}>
        <article className={CardClass}>
          <div className="flex items-center py-2">
            <div className="avatar">
              {/*<AvatarChe src={item.profile_info.avatar_url}/>*/}
              <IonAvatar className="w-8 h-8 text-tiny z-0">
                <img alt="Silhouette of a person's head" src={item.profile_info.avatar_url} />
              </IonAvatar>
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium text-default-800">
                {item.profile_info.name}
                {medalRender(item?.profile_info?.medal_list ?? [])}
              </div>
              {userDescription(item.profile_info.user_description_list)}
            </div>
          </div>
          <div className="text-default-800 transition-colors">
            <div className="font-medium text-18 line-clamp-3">{item.title}</div>
            <div className="text-18 leading-24 whitespace-pre-wrap break-words line-clamp-2">
              <span dangerouslySetInnerHTML={{__html: renderEmoticon(item.content)}}></span>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap">
            {/*{ renderImgs(item.image_urls) }*/}
            <RenderImgs image_urls={item.image_urls}/>
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="text-xs leading-18 text-default-600 transition-colors">
              {dayjs((item.display_time * 1000)).fromNow()}
            </div>

            <div className="flex items-center text-default-800 text-sm space-x-2 transition-colors">
              <div>分享</div>
              <div>评论{item?.comment_count ? `(${item?.comment_count})` : null}</div>
              <div>点赞{item?.digg_count ? `(${item?.digg_count})` : null}</div>
            </div>
          </div>
        </article>
      </IonLabel>
    </IonItem>
  );
};

export default CheyouItem;
