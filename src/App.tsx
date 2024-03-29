import React, {FC, useMemo} from "react";
import { Redirect, Route } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Nice from '@ebay/nice-modal-react'
import Home from './pages/Home/Home';
import ViewMessage from './pages/ViewMessage/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* tailwind */
import './index.scss'
import 'react-photo-view/dist/react-photo-view.css';


setupIonicReact();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/build/modern/production.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true 屏幕聚焦重新请求
      gcTime: 1000 * 60 * 60, // 1 hour
    },
  },
})

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
})

// persistQueryClient({
//   queryClient,
//   persister: localStoragePersister,
// })

const App: FC = () => {
  const [showDevtools, setShowDevtools] = React.useState(false)

  React.useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old)
  }, [])


  return (
    <QueryClientProvider client={queryClient}>
      <Nice.Provider>
        <NextUIProvider>
          <NextThemesProvider attribute="class">
            <IonApp>
              <IonReactRouter>
                <IonRouterOutlet>
                  <Route path="/" exact={true}>
                    <Redirect to="/home" />
                  </Route>
                  <Route path="/home" exact={true}>
                    <Home />
                  </Route>
                  <Route path="/message/:id">
                    <ViewMessage />
                  </Route>
                </IonRouterOutlet>
              </IonReactRouter>
            </IonApp>
          </NextThemesProvider>
        </NextUIProvider>
      </Nice.Provider>
      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  )
};

export default App;
