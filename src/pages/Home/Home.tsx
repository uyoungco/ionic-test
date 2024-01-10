import { FC, useState, useEffect, useRef } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonLoading,
  IonInfiniteScroll,
  IonInfiniteScrollContent
} from '@ionic/react';
import './Home.css';
import axios from "axios";
import {CheyouList, CheYouListRoot} from "./type";
import CheyouItem from "@/components/CheyouItem";
import {IonInfiniteScrollCustomEvent} from "@ionic/core/dist/types/components";
import { useImmer } from "use-immer";
import { useInfiniteScroll } from 'ahooks';
import SuspenseLoading from "@/components/SuspenseLoading";


const getData = async (page: number = 1) => {

  const data = await axios<CheYouListRoot>({
    url: 'https://lab.uyoung.co/api/cheyou_list',
    method: 'get',
    params: {
      page,
    },
  })
  return {
    list: data.data.data.cheyou_list,
    nextId: page + 1
  }
}


const Home: FC = () => {
  const {
    data,
    loading,
    loadMoreAsync,
    loadingMore,
    reloadAsync
  } = useInfiniteScroll<{
    nextId: number;
    list: CheyouList[]
  }>((d) => getData(d?.nextId))
  const scrollEl = useRef<HTMLIonInfiniteScrollElement>(null)
  const refresherEl = useRef<HTMLIonRefresherElement>(null)
  const [page, setPage] = useImmer(1)
  const [messages, setMessages] = useState<CheyouList[]>([]);
  const [present, dismiss] = useIonLoading();
  const [isScrollOn, setIsScrollOn] = useState(false)

  // console.log({ data, loading, loadMore, loadingMore })

  const fetchData = async () => {
    console.log('refresherEl', refresherEl)
    const data = await getData(page).finally(() => {
      scrollEl.current?.complete()
      refresherEl.current?.complete()
    })
    setMessages((state) => state.concat(data.list));
  }

  // useEffect(() => {
  //   fetchData()
  //   loadMore()
  //   console.log('page', page)
  // }, [page]);

  const refresh = (e: CustomEvent) => {
    // console.log('CustomEvent', e)
    // setMessages([])
    // setPage((draft) => {
    //   return 1
    // })
    // if (page === 1) {
    //   fetchData().finally(() => {
    //     e.detail.complete()
    //   })
    // }
    reloadAsync().finally(() => {
      e.detail.complete()
    })

    // e.detail.complete();
    // fetchData().then(() => {
    //   e.detail.complete();
    // })
  };


  const generateItems = async (e: IonInfiniteScrollCustomEvent<void>) => {
    // setPage((draft) => {
    //   return draft + 1
    // })
    loadMoreAsync().finally(() => {
      e.target.complete()
    })
  };



  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={false}>
        <IonRefresher ref={refresherEl} slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        {/*<IonHeader collapse="condense">*/}
        {/*  <IonToolbar>*/}
        {/*    <IonTitle size="large">*/}
        {/*      Home*/}
        {/*    </IonTitle>*/}
        {/*  </IonToolbar>*/}
        {/*</IonHeader>*/}
        {
          loading ? (
            <SuspenseLoading />
          ) : (
            <>
              <IonList>
                { data?.list?.map(m => <CheyouItem key={m.gid} item={m} />) }
              </IonList>
              <IonInfiniteScroll
                ref={scrollEl}
                onIonInfinite={generateItems}
                disabled={isScrollOn}
              >
                <IonInfiniteScrollContent></IonInfiniteScrollContent>
              </IonInfiniteScroll>
            </>
          )
        }

      </IonContent>
    </IonPage>
  );
};

export default Home;
