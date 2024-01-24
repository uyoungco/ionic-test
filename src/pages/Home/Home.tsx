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
  IonInfiniteScrollContent, IonSegment, IonSegmentButton, IonLabel
} from '@ionic/react';
import './Home.css';
import axios from "axios";
import {CheyouList, CheYouListRoot} from "./type";
import CheyouItem from "@/components/CheyouItem";
import {IonInfiniteScrollCustomEvent} from "@ionic/core/dist/types/components";
import SuspenseLoading from "@/components/SuspenseLoading";
import {useInfiniteQuery, useQueryClient} from "@tanstack/react-query";
import React from 'react';


const fetchProjects = async (param: any): Promise<{ data: CheyouList[], nextCursor: number }> => {
  console.log('param', param)
  const { pageParam, signal, queryKey } = param
  const data = await axios<CheYouListRoot>({
    url: 'https://lab.uyoung.co/api/cheyou_list',
    method: 'get',
    params: {
      page: pageParam,
      ...queryKey[1],
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
  const [value, setValue] = useState('dongtai')
  // useEffect(() => {
  //   queryClient.setQueryData(['Home', value], (data: any) => {
  //     if (data?.pages?.length) {
  //       return {
  //         //pages: [],
  //         // @ts-ignore
  //         pages: data.pages.slice(0, 1),
  //         // @ts-ignore
  //         pageParams: data.pageParams.slice(0, 1),
  //       }
  //     }
  //     return
  //   })
  // }, [])

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
    queryKey: ['Home', { tab_name: value }],
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages,lastPageParam) => {
      return lastPage.nextCursor
    },
    enabled: !!value,
  })
  const contentRef = useRef<HTMLIonContentElement>(null);
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
    if (!isFetchingNextPage && isFetching && hasNextPage) {
      fetchNextPage().finally(() => {
        e.target.complete()
      })
    }
  };

  const listbar = [
    {
      label: '热门',
      value: 'hot',
    },
    {
      label: '动态',
      value: 'dongtai',
    },
    {
      label: '精选',
      value: 'selected',
    },
    {
      label: '价格讨论',
      value: 'pricediscuss',
    }
  ]

  const handleClick = (value: string) => {
    contentRef.current?.scrollToTop(0).finally(() => {
      setValue(value)
    });
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          {/*<IonTitle>Home</IonTitle>*/}
          <IonSegment value={value}>
            {
              listbar?.map(item => (
                <IonSegmentButton value={item.value} onClick={() => handleClick(item.value)}>
                  <IonLabel>{item.label}</IonLabel>
                </IonSegmentButton>
              ))
            }
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={false} ref={contentRef}>
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
                disabled={!hasNextPage}
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
