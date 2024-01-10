import { useState } from 'react';
import { Message, getMessage } from '../../data/messages';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
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


const fetchData = async (id: string | number) => {
  const data = await axios<CheyouDetailRoot>({
    url: 'https://nextjs.uyoung.co/api/cheyou_detail',
    method: 'get',
    params: {
      group_id: id
    }
  })

  return data.data
}

function ViewMessage() {
  const [data, setData] = useState<Data>();
  const params = useParams<{ id: string }>();


  useIonViewWillEnter( () => {
    fetchData(params.id).then(res => {
      setData(res.data);
    })
  });

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
            className={cx(Style.article, 'detail-article')}
            dangerouslySetInnerHTML={{__html: renderEmoticon(data.content)}}
          />
        </>

      )
    }

    return (
      <>
        {data?.thread_title &&
            <h1 className="transition-colors text-xl text-default-800 my-2 font-medium">
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
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="px-4 pt-4">
          {content()}
        </div>

      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
