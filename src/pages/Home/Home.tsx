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
import {useInfiniteQuery, useQueryClient} from "@tanstack/react-query";
import React from 'react';


const fetchProjects = async (param: any): Promise<{ data: CheyouList[], nextCursor: number }> => {
  console.log('param', param)
  const { pageParam, signal } = param
  const data = await axios<CheYouListRoot>({
    url: 'https://lab.uyoung.co/api/cheyou_list',
    method: 'get',
    params: {
      page: pageParam,
    },
    signal,
  })
  return {
    data: data.data.data.cheyou_list,
    nextCursor: pageParam + 1
  }
}


const Home: FC = () => {
  const queryClient = useQueryClient()


  const {
    isLoading,
    data: qdata,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch
  } = useInfiniteQuery({
    queryKey: ['Home'],
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages,lastPageParam) => {
      return lastPage.nextCursor
    },
  })

  useEffect(() => {
    console.log("qdata", qdata)
  }, [qdata])

  const scrollEl = useRef<HTMLIonInfiniteScrollElement>(null)
  const refresherEl = useRef<HTMLIonRefresherElement>(null)


  const refresh = (e: CustomEvent) => {
    queryClient.setQueryData(['Home'], (data: any) => ({
      //pages: [],
      // @ts-ignore
      pages: data.pages.slice(0, 1),
      // @ts-ignore
      pageParams: data.pageParams.slice(0, 1),
    }))
    refetch().finally(() => {
      e.detail.complete()
    })
  };


  const generateItems = async (e: IonInfiniteScrollCustomEvent<void>) => {
    !isFetching && fetchNextPage().finally(() => {
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

        {
          isLoading ? <SuspenseLoading /> : (
            <>
              <IonList>
                {
                  qdata?.pages?.map((group, i) => (
                    <React.Fragment key={i}>
                      {group.data.map((m) => (
                        <CheyouItem key={m.gid} item={m} />
                      ))}
                    </React.Fragment>
                  ))
                }
              </IonList>
              <IonInfiniteScroll
                ref={scrollEl}
                onIonInfinite={generateItems}
              >
                <IonInfiniteScrollContent></IonInfiniteScrollContent>
              </IonInfiniteScroll>
            </>
          )
        }

        {/*<IonHeader collapse="condense">*/}
        {/*  <IonToolbar>*/}
        {/*    <IonTitle size="large">*/}
        {/*      Home*/}
        {/*    </IonTitle>*/}
        {/*  </IonToolbar>*/}
        {/*</IonHeader>*/}

        {/*{*/}
        {/*  loading ? (*/}
        {/*    <SuspenseLoading />*/}
        {/*  ) : (*/}
        {/*    <>*/}
        {/*      <IonList>*/}
        {/*        { data?.list?.map(m => <CheyouItem key={m.gid} item={m} />) }*/}
        {/*      </IonList>*/}
        {/*      <IonInfiniteScroll*/}
        {/*        ref={scrollEl}*/}
        {/*        onIonInfinite={generateItems}*/}
        {/*        disabled={isScrollOn}*/}
        {/*      >*/}
        {/*        <IonInfiniteScrollContent></IonInfiniteScrollContent>*/}
        {/*      </IonInfiniteScroll>*/}
        {/*    </>*/}
        {/*  )*/}
        {/*}*/}

      </IonContent>
    </IonPage>
  );
};

export default Home;
