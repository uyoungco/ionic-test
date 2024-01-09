import { FC, useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  useIonLoading, useIonViewDidEnter, IonInfiniteScroll, IonInfiniteScrollContent
} from '@ionic/react';
import './Home.css';
import axios from "axios";
import {CheyouList, CheYouListRoot} from "./type";
import CheyouItem from "@/components/CheyouItem";
import {IonInfiniteScrollCustomEvent} from "@ionic/core/dist/types/components";

const getData = async (page: number) => {
  const data = await axios<CheYouListRoot>({
    url: 'https://lab.uyoung.co/api/cheyou_list',
    method: 'get',
    params: {
      page
    },
  })
  return data.data
}


const Home: FC = () => {
  const [page, setPage] = useState(1)
  const [messages, setMessages] = useState<CheyouList[]>([]);
  const [present, dismiss] = useIonLoading();
  
  const fetchData = async () => {
    const data = await getData(page)
    setMessages((state) => state.concat(data.data.cheyou_list));
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  const refresh = async (e: CustomEvent) => {
    setMessages([])
    setPage(1)
    await fetchData()
    await e.detail.complete();
    // setTimeout(() => e.detail.complete(), 500);
    // fetchData().then(() => {
    //   e.detail.complete();
    // })
  };
  
  
  const generateItems = async (e: IonInfiniteScrollCustomEvent<void>) => {
    console.log('generateItems')
    setPage((state) => state + 1)
    await fetchData()
    await e.target.complete()
  };
  
  
  
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={false}>
       
          <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        {/*<IonHeader collapse="condense">*/}
        {/*  <IonToolbar>*/}
        {/*    <IonTitle size="large">*/}
        {/*      Home*/}
        {/*    </IonTitle>*/}
        {/*  </IonToolbar>*/}
        {/*</IonHeader>*/}

        <IonList>
          {messages.map(m => <CheyouItem key={m.gid} item={m} />)}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={generateItems}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;
