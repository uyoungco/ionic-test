import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage, IonRefresher, IonRefresherContent, IonSpinner,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
import axios from "axios";
import {CheyouDetailRoot, Data} from "@/pages/ViewMessage/type";
import {renderEmoticon} from "@/utils/emoticons";
import RenderImgs from './RenderImgs'
import cx from "classnames";
import Style from './index.module.scss'
import {useQuery, useQueryClient} from "@tanstack/react-query";
import React, {useEffect} from "react";
import CommentsList from "@/components/CommentsList";
import ThemeSwitch from "@/components/ThemeSwitch";


const fetchData = async (param: any) => {
  const { queryKey, signal } = param
  const data = await axios<CheyouDetailRoot>({
    url: 'https://nextjs.uyoung.co/api/cheyou_detail',
    method: 'get',
    params: {
      group_id: queryKey[1]
    },
    signal
  })

  return data.data.data as CheyouDetailRoot['data']
}

function ViewMessage() {
  const queryClient = useQueryClient()
  const params = useParams<{ id: string }>();
  const query = useQuery({
    queryKey: ['message', params.id],
    queryFn: fetchData
  })
  const data = query?.data as unknown as CheyouDetailRoot['data']

  const refresh = (e: CustomEvent) => {
    query.refetch().finally(() => {
      e.detail.complete()
    })
  };


  useEffect(() => {
    return () => {
      queryClient.cancelQueries({ queryKey: ['message', params.id] })
    }
  }, [])


  const content = () => {
    // 有标题+内容
    if (!!data?.content) {
      return (
        <>
          <h1
            className="transition-colors text-xl text-default-800 my-2 font-medium mb-2">
            {renderEmoticon(data.motor_title)}
          </h1>
          {/*<div*/}
          {/*  dangerouslySetInnerHTML={{ __html: renderEmoticon(data.content) }}*/}
          {/*  className={Style.article}*/}
          {/*></div>*/}
          <div
            className={cx(Style.article, 'detail-article mt-2 mb-4')}
            dangerouslySetInnerHTML={{__html: renderEmoticon(data.content)}}
          />
        </>

      )
    }

    return (
      <>
        {data?.thread_title &&
            <h1 className="transition-colors text-xl text-default-800 my-2 font-medium mb-2">
              {renderEmoticon(data.thread_title)}
            </h1>
        }
        <section className="mt-2">
          <div className="flex text-base pb-2">
            <div className="flex-1 whitespace-pre-wrap break-words">
              <span dangerouslySetInnerHTML={{ __html: renderEmoticon(data?.motor_title) }}></span>
            </div>
          </div>
          {
            data?.image_urls?.length ? (
              <div className="flex mt-2 flex-wrap">
                {/*{renderImgs(data.image_urls)}*/}
                <RenderImgs image_urls={data.image_urls} />
              </div>
            ) : null
          }
        </section>
      </>
    )
  }

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <ThemeSwitch />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={false}>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {
          query.isLoading ? (
            <div className="w-full h-32 flex justify-center items-center">
              <IonSpinner />
            </div>
            ) : (
            <>
              <div className="px-4 mt-4">
                {content()}
              </div>
              {
                data.comment_count ? (
                  <div className="mt-8">
                    <CommentsList group_id={params.id} />
                  </div>
                ) : null
              }
            </>
          )
        }
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
