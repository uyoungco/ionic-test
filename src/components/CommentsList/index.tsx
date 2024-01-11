import {FC} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {ContentRichSpanRoot, MotorArticleImg, SusCommentsRoot} from "./type";
import RenderImgs from '../../pages/ViewMessage/RenderImgs'
import {IonAvatar, IonItem, IonLabel, IonList} from "@ionic/react";
import {renderEmoticon} from "@/utils/emoticons";
import cx from "classnames";
import dayjs from "@/utils/time";
import {show} from "@ebay/nice-modal-react";
import MoreCommentsModal from './MoreCommentsModal'

const fetchData = async (param: any) => {
  const { queryKey, signal } = param
  const data = await axios<SusCommentsRoot>({
    url: 'https://nextjs.uyoung.co/api/cheyou_comments',
    method: 'get',
    params: {
      group_id: queryKey[1]
    },
    signal
  })

  return data.data.data as SusCommentsRoot['data']
}

export interface CommentsListType {
  group_id: string | number;
}

const CommentsList: FC<CommentsListType> = ({ group_id }) => {
  const CardClass = "transition-colors px-4 border-divider border-b transition-transform-background outline-none text-foreground bg-content1 overflow-hidden"

  const parseImgs = (content_rich_span: string) => {
    const data = JSON.parse(content_rich_span) as ContentRichSpanRoot
    if (data.links?.length && data.image_list) {
      const list = Object.values(data?.image_list) as MotorArticleImg[]
      // return renderImgs(list)
      return <RenderImgs image_urls={list} />
    }
    return null
  }

  const { data } = useQuery({
    queryKey: ['CommentsList', group_id],
    queryFn: fetchData
  })

  return (
    <IonList>
      {
        data?.map((item, index) => (
          // <div key={item.id} className={CardClass}>
          <IonItem
            key={item.id}
            lines="full"
            detail={false}
          >
            <IonLabel  className="flex flex-col">
              <div className="flex items-center py-2">
                <div className="avatar">
                  <IonAvatar className="w-8 h-8 text-tiny z-0">
                    <img alt="Silhouette of a person's head" src={item.comment.user_profile_image_url}/>
                  </IonAvatar>
                </div>
                <div className="ml-2">
                  <div className="text-sm font-medium text-default-800 transition-colors">{item.comment.user_name}</div>
                </div>
              </div>
              <div className="pl-10">
                {parseImgs(item.comment.content_rich_span)}
                <div
                  className="text-default-800 text-base transition-colors"
                  dangerouslySetInnerHTML={{__html: renderEmoticon(item.comment.text)}}
                />
                <div className={cx("flex justify-between items-center", {
                  "pt-2": item.comment.reply_count,
                  "py-2": !item.comment.reply_count,
                })}>
                  <div className="text-xs leading-18 text-default-600 transition-colors">
                    {dayjs((item.comment.create_time * 1000)).fromNow()} · {item.comment.publish_loc_info}
                  </div>
                  <div className="transition-colors flex items-center text-default-800 text-sm space-x-2">
                    <div>赞{item?.comment.digg_count ? `(${item?.comment.digg_count})` : null}</div>
                    <div>踩</div>
                  </div>
                </div>
                {
                  item.comment.new_reply_list?.length ? (
                    <div
                      // onClick={() => show(MoreCommentsModal, { list: item.comment.new_reply_list })}
                      className="py-2 text-xs leading-18 text-primary-600 cursor-pointer"
                    >
                      展开{item.comment.new_reply_list?.length}条回复
                    </div>
                  ) : null
                }
                {/*<MoreComments new_reply_list={item.comment.new_reply_list} />*/}
              </div>
            </IonLabel>
          </IonItem>
        ))
      }
    </IonList>
  )
}

export default CommentsList
