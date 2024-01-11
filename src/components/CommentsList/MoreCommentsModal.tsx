import { create, useModal } from '@ebay/nice-modal-react'
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem, IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {FC, useEffect, useRef, useState,  } from "react";
import {NewReplyList} from "@/components/CommentsList/type";
import {renderEmoticon} from "@/utils/emoticons";
import cx from "classnames";
import dayjs from "@/utils/time";
import { parseImgs } from "./index";

interface MoreCommentsModalProps {
  list?: NewReplyList[]
}

const MoreCommentsModal: FC<MoreCommentsModalProps> = ({ list }) => {
  const modal = useModal()
  const modalRef = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined);

  useEffect(() => {
    const html = document.getElementById('view-message-page')
    if (html) {
      setPresentingElement(html);
    }
  }, []);

  const handCancel = async () => {
    modal.hide().then(() => {
      modal.resolveHide();
      if (!modal.keepMounted) modal.remove();
    })
    // modalRef.current?.dismiss().finally(() => {
    //
    // });
    // await modal.hide()
    // await modalRef.current?.onDidDismiss().finally(() => {
    //   modal.resolveHide();
    //   if (!modal.keepMounted) modal.remove();
    // })
    // return true
  }

  const canDismiss = async (data?: any, role?: string) => {
    console.log('data', data, role)
    if (role === 'gesture') {
      modal.hide().then(() => {
        modal.resolveHide();
        if (!modal.keepMounted) modal.remove();
      })
    }

    // modal.hide()
    // modal.resolveHide();
    // if (!modal.keepMounted) modal.remove();
    // modalRef.current?.onDidDismiss().finally(() => {
    //
    // });
    return true
  }

  const CardClass = "transition-transform-background outline-none text-foreground "


  return (
    <IonModal
      isOpen={modal.visible}
      ref={modalRef}
      // initialBreakpoint={0.9}
      // breakpoints={[0, 0.9]}
      // handleBehavior="cycle"
      // presentingElement={presentingElement}
      // canDismiss={canDismiss}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={handCancel}>Cancel</IonButton>
          </IonButtons>
          <IonTitle>该评论的全部回复</IonTitle>
          {/*<IonButtons slot="end">*/}
          {/*  <IonButton strong={true} onClick={() => confirm()}>*/}
          {/*    Confirm*/}
          {/*  </IonButton>*/}
          {/*</IonButtons>*/}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {
            list?.map((item, index) => (
              // <div key={item.id} className={CardClass}>
              <IonItem
                key={item.id}
                lines="full"
                detail={false}
              >
                <IonLabel className="flex flex-col mr-[12px]">
                  <div className="flex items-center py-2">
                    <div className="avatar">
                      <IonAvatar className="w-8 h-8 text-tiny z-0">
                        <img alt="Silhouette of a person's head" src={item.user.avatar_url}/>
                      </IonAvatar>
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-medium text-default-800">
                        {item.user.name}
                        {
                          item.user.author_badge.length ? (
                            <div className="text-xs leading-18 text-default-500 truncate">
                              <img src={item.user.author_badge[0].url} alt={item.user.author_badge[0].image_des}
                                   className="h-4 object-cover align-text-bottom ml-1 inline-block mr-2"/>
                            </div>
                          ) : null
                        }
                      </div>
                    </div>
                  </div>
                  <div className="pl-10 flex flex-col overflow-hidden">
                    {parseImgs(item.content_rich_span)}
                    <div
                      className="text-default-800 text-base"
                      dangerouslySetInnerHTML={{__html: renderEmoticon(item.text)}}
                    />
                    <div className="flex justify-between items-center py-2 overflow-hidden">
                      <div className="text-xs leading-18 text-default-600">
                        {dayjs((item.create_time * 1000)).fromNow()} · {item.publish_loc_info}
                      </div>
                      <div className="flex items-center text-default-800 text-sm space-x-2">
                        <div>赞</div>
                        <div>踩</div>
                      </div>
                    </div>
                    {/*<div className="clear-both	h-5"></div>*/}
                  </div>
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonModal>
  )
}


export default create(MoreCommentsModal)
