import './App.css';
import React, { lazy, Suspense } from 'react'; 

import ReactGA from 'react-ga';

import Navbar from './containers/Navbar/Navbar'
import Sidebar from './containers/Sidebar/Sidebar'
import Main from './containers/Main/Main'
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import LiczbyNaturalne from './containers/Material/Numbers/Teoria/LiczbyNaturalne/LiczbyNaturalne'
import LiczbyCalkowite from './containers/Material/Numbers/Teoria/LiczbyCalkowite/LiczbyCalkowite'
import LiczbyNiewymierne from './containers/Material/Numbers/Teoria/LiczbaNiewymierne/LiczbaNiewymierne'
import PotegaOWykladnikuCalkowitym from './containers/Material/Numbers/Teoria/PotegaOWykladnikuCalkowitym/PotegaOWykladnikuCalkowitym'
import PotegaOWykladnikuWymiernym from './containers/Material/Numbers/Teoria/PotegaOWykladnikuWymiernym/PotegaOWykladnikuWymiernym'
import DzialanieNaPotegach from './containers/Material/Numbers/Teoria/DzialanieNaPotegach/DzialanieNaPotegach'
import DzialanieNaPierwiastkach from './containers/Material/Numbers/Teoria/DzialaniaNaPierwiastkach/DzialaniaNaPierwiastkach'
import WzorySkroconegoMnozenia from './containers/Material/Numbers/Teoria/WzorySkroconegoMnozenia/WzorySkroconegoMnozenia'
import FunkcjaLioniowa from './containers/Material/Functions/FunkcjaLiniowa/Teoria/FunkcjaLiniowa'
import FunkcjaKwadratowa from './containers/Material/Functions/FunkcjaKwadratowa/Teoria/FunkcjaKwadratowa'
import WzoryVieta from './containers/Material/Functions/FunkcjaKwadratowa/Teoria/WzoryVieta'
// import Wielomiany from './containers/Material/Functions/Wielomiany/Teoria/Wielomiany'
import Wielomiany from './containers/Material/Functions/Wielomiany/Teoria/Wielomiany'

import WartoscBezwglednaZadanie1 from './containers/MaturaPodstawowa/Liczby/Zadanie1'


// import Loading from './containers/PageElements/Loading/Loading';

const Home = lazy(() => import('./containers/Home/Home'));
const Kontakt = lazy(() => import('./containers/Kontakt/Kontakt')); 
const Onas = lazy(() => import('./containers/Onas/Onas')); 

const NierownosciZadanie1 = lazy(() => import('./containers/MaturaPodstawowa/Nierownosci/Zadanie1'));
const NierownosciZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Nierownosci/Zadanie2')); 
const NierownosciZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Nierownosci/Zadanie3')); 
const NierownosciZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Nierownosci/Zadanie4')); 
const NierownosciZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Nierownosci/Zadanie5')); 

const LiczbyZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Liczby/Zadanie2'));
const LiczbyZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Liczby/Zadanie3')); 
const LiczbyZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Liczby/Zadanie4')); 
const LiczbyZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Liczby/Zadanie5')); 
const LiczbyZadanie6 = lazy(() => import('./containers/MaturaPodstawowa/Liczby/Zadanie6')); 

const WielomianyZadanie1 = lazy(() => import('./containers/MaturaPodstawowa/Wielomiany/Zadanie1'));
const WielomianyZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Wielomiany/Zadanie2')); 
const WielomianyZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Wielomiany/Zadanie3')); 
const WielomianyZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Wielomiany/Zadanie4')); 
const WielomianyZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Wielomiany/Zadanie5')); 

const FunkcjeZadanie1 = lazy(() => import('./containers/MaturaPodstawowa/Funkcje/Zadanie1'));
const FunkcjeZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Funkcje/Zadanie2')); 
const FunkcjeZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Funkcje/Zadanie3')); 
const FunkcjeZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Funkcje/Zadanie4')); 
const FunkcjeZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Funkcje/Zadanie5')); 

const TrygonymetriaZadanie1 = lazy(() => import('./containers/MaturaPodstawowa/Trygomymetria/Zadanie1'));
const TrygonymetriaZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Trygomymetria/Zadanie2')); 
const TrygonymetriaZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Trygomymetria/Zadanie3')); 
const TrygonymetriaZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Trygomymetria/Zadanie4')); 
const TrygonymetriaZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Trygomymetria/Zadanie5')); 

const PotegiZadanie1 = lazy(() => import('./containers/MaturaPodstawowa/Potegi/Zadanie1'));
const PotegiZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Potegi/Zadanie2')); 
const PotegiZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Potegi/Zadanie3')); 
const PotegiZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Potegi/Zadanie4')); 
const PotegiZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Potegi/Zadanie5')); 

const LogarytmyZadanie1 = lazy(() => import('./containers/MaturaPodstawowa/Logarytmy/Zadanie1'));
const LogarytmyZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Logarytmy/Zadanie2')); 
const LogarytmyZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Logarytmy/Zadanie3')); 
const LogarytmyZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Logarytmy/Zadanie4')); 
const LogarytmyZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Logarytmy/Zadanie5')); 

const ProcentyZadanie1 = lazy(() => import('./containers/MaturaPodstawowa/Procenty/Zadanie1'));
const ProcentyZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Procenty/Zadanie2')); 
const ProcentyZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Procenty/Zadanie3')); 
const ProcentyZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Procenty/Zadanie4')); 
const ProcentyZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Procenty/Zadanie5')); 

const RownaniaZadanie1 = lazy(() => import('./containers/MaturaPodstawowa/Rownania/Zadanie1'));
const RownaniaZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Rownania/Zadanie2')); 
const RownaniaZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Rownania/Zadanie3')); 
const RownaniaZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Rownania/Zadanie4')); 
const RownaniaZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Rownania/Zadanie5')); 

const CiagiZadanie2 = lazy(() => import('./containers/MaturaPodstawowa/Ciagi/Zadanie1')); 
const CiagiZadanie1 = lazy(() => import('./containers/MaturaPodstawowa/Ciagi/Zadanie2'));
const CiagiZadanie3 = lazy(() => import('./containers/MaturaPodstawowa/Ciagi/Zadanie3')); 
const CiagiZadanie4 = lazy(() => import('./containers/MaturaPodstawowa/Ciagi/Zadanie4')); 
const CiagiZadanie5 = lazy(() => import('./containers/MaturaPodstawowa/Ciagi/Zadanie5')); 
    



const trackingId = "G-9ZR7G2P57T"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);


function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
    console.log(location.pathname);
  }, [location]);
}

// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })

function App() {
  usePageViews();

  const routeArrayRownania = [
    {
      component : <RownaniaZadanie1/>,
      route: '/containers/MaturaPodstawowa/Rownania/Zadanie1'    
    },
    {
      component : <RownaniaZadanie2/>,
      route: '/containers/MaturaPodstawowa/Rownania/Zadanie2'    
    },
    {
      component : <RownaniaZadanie3/>,
      route: '/containers/MaturaPodstawowa/Rownania/Zadanie3'    
    },
    {
      component : <RownaniaZadanie4/>,
      route: '/containers/MaturaPodstawowa/Rownania/Zadanie4'    
    },
    {
      component : <RownaniaZadanie5/>,
      route: '/containers/MaturaPodstawowa/Rownania/Zadanie5'    
    }
  ]

  const routeArrayCiagi = [
    {
      component : <CiagiZadanie1/>,
      route: '/containers/MaturaPodstawowa/Ciagi/Zadanie1'    
    },
    {
      component : <CiagiZadanie2/>,
      route: '/containers/MaturaPodstawowa/Ciagi/Zadanie2'    
    },
    {
      component : <CiagiZadanie3/>,
      route: '/containers/MaturaPodstawowa/Ciagi/Zadanie3'    
    },
    {
      component : <CiagiZadanie4/>,
      route: '/containers/MaturaPodstawowa/Ciagi/Zadanie4'    
    },
    {
      component : <CiagiZadanie5/>,
      route: '/containers/MaturaPodstawowa/Ciagi/Zadanie5'    
    }
  ]

  const routeArrayNierownosci = [
    {
      component: <NierownosciZadanie1/>,
      route: '/containers/MaturaPodstawowa/Nierownosci/Zadanie1'    
    },
    {
      component : <NierownosciZadanie2/>,
      route: '/containers/MaturaPodstawowa/Nierownosci/Zadanie2'    
    },
    {
      component : <NierownosciZadanie3/>,
      route: '/containers/MaturaPodstawowa/Nierownosci/Zadanie3'    
    },
    {
      component : <NierownosciZadanie4/>,
      route: '/containers/MaturaPodstawowa/Nierownosci/Zadanie4'    
    },
    {
      component : <NierownosciZadanie5/>,
      route: '/containers/MaturaPodstawowa/Nierownosci/Zadanie5'    
    }
  ]

  const routeArrayProcenty = [
    {
      component : <ProcentyZadanie1/>,
      route: '/containers/MaturaPodstawowa/Procenty/Zadanie1'    
    },
    {
      component : <ProcentyZadanie2/>,
      route: '/containers/MaturaPodstawowa/Procenty/Zadanie2'    
    },
    {
      component : <ProcentyZadanie3/>,
      route: '/containers/MaturaPodstawowa/Procenty/Zadanie3'    
    },
    {
      component : <ProcentyZadanie4/>,
      route: '/containers/MaturaPodstawowa/Procenty/Zadanie4'    
    },
    {
      component : <ProcentyZadanie5/>,
      route: '/containers/MaturaPodstawowa/Procenty/Zadanie5'    
    }
  ]

  const routeArrayLogarytmy = [
    {
      component : <LogarytmyZadanie1/>,
      route: '/containers/MaturaPodstawowa/Logarytmy/Zadanie1'    
    },
    {
      component : <LogarytmyZadanie2/>,
      route: '/containers/MaturaPodstawowa/Logarytmy/Zadanie2'    
    },
    {
      component : <LogarytmyZadanie3/>,
      route: '/containers/MaturaPodstawowa/Logarytmy/Zadanie3'    
    },
    {
      component : <LogarytmyZadanie4/>,
      route: '/containers/MaturaPodstawowa/Logarytmy/Zadanie4'    
    },
    {
      component : <LogarytmyZadanie5/>,
      route: '/containers/MaturaPodstawowa/Logarytmy/Zadanie5'    
    }
  ]

  const routeArrayPotegi = [
    {
      component : <PotegiZadanie1/>,
      route: '/containers/MaturaPodstawowa/Potegi/Zadanie1'    
    },
    {
      component : <PotegiZadanie2/>,
      route: '/containers/MaturaPodstawowa/Potegi/Zadanie2'    
    },
    {
      component : <PotegiZadanie3/>,
      route: '/containers/MaturaPodstawowa/Potegi/Zadanie3'    
    },
    {
      component : <PotegiZadanie4/>,
      route: '/containers/MaturaPodstawowa/Potegi/Zadanie4'    
    },
    {
      component : <PotegiZadanie5/>,
      route: '/containers/MaturaPodstawowa/Potegi/Zadanie5'    
    }
  ]

  const routeArrayTrygonymetria = [
    {
      component : <TrygonymetriaZadanie1/>,
      route: '/containers/MaturaPodstawowa/Trygomymetria/Zadanie1'    
    },
    {
      component : <TrygonymetriaZadanie2/>,
      route: '/containers/MaturaPodstawowa/Trygomymetria/Zadanie2'    
    },
    {
      component : <TrygonymetriaZadanie3/>,
      route: '/containers/MaturaPodstawowa/Trygomymetria/Zadanie3'    
    },
    {
      component : <TrygonymetriaZadanie4/>,
      route: '/containers/MaturaPodstawowa/Trygomymetria/Zadanie4'    
    },
    {
      component : <TrygonymetriaZadanie5/>,
      route: '/containers/MaturaPodstawowa/Trygomymetria/Zadanie5'    
    }
  ]

  const routeArrayFunkcje = [
    {
      component : <FunkcjeZadanie1/>,
      route: '/containers/MaturaPodstawowa/Funkcje/Zadanie1'    
    },
    {
      component : <FunkcjeZadanie2/>,
      route: '/containers/MaturaPodstawowa/Funkcje/Zadanie2'    
    },
    {
      component : <FunkcjeZadanie3/>,
      route: '/containers/MaturaPodstawowa/Funkcje/Zadanie3'    
    },
    {
      component : <FunkcjeZadanie4/>,
      route: '/containers/MaturaPodstawowa/Funkcje/Zadanie4'    
    },
    {
      component : <FunkcjeZadanie5/>,
      route: '/containers/MaturaPodstawowa/Funkcje/Zadanie5'    
    }
  ]

  const routeArrayLiczby = [
    {
      component : <WartoscBezwglednaZadanie1/>,
      route: '/containers/MaturaPodstawowa/Liczby/Zadanie1'    
    },
    {
      component : <LiczbyZadanie2/>,
      route: '/containers/MaturaPodstawowa/Liczby/Zadanie2'    
    },
    {
      component : <LiczbyZadanie3/>,
      route: '/containers/MaturaPodstawowa/Liczby/Zadanie3'    
    },
    {
      component : <LiczbyZadanie4/>,
      route: '/containers/MaturaPodstawowa/Liczby/Zadanie4'    
    },
    {
      component : <LiczbyZadanie5/>,
      route: '/containers/MaturaPodstawowa/Liczby/Zadanie5'    
    },
    {
      component : <LiczbyZadanie6/>,
      route: '/containers/MaturaPodstawowa/Liczby/Zadanie6'    
    }
  ]

  const routeArrayWielomiany = [
    {
      component : <WielomianyZadanie1/>,
      route: '/containers/MaturaPodstawowa/Wielomiany/Zadanie1'
    },
    {
      component : <WielomianyZadanie2/>,
      route: '/containers/MaturaPodstawowa/Wielomiany/Zadanie2'
    },
    {
      component : <WielomianyZadanie3/>,
      route: '/containers/MaturaPodstawowa/Wielomiany/Zadanie3'
    },
    {
      component : <WielomianyZadanie4/>,
      route: '/containers/MaturaPodstawowa/Wielomiany/Zadanie4'
    },
    {
      component : <WielomianyZadanie5/>,
      route: '/containers/MaturaPodstawowa/Wielomiany/Zadanie5'
    }
  ]

  const routeArrayTeoria = [
    {
      component : <LiczbyNaturalne />,
      route: '/liczbynaturalne'
    },
    {
      component : <LiczbyCalkowite />,
      route: '/liczbycalkowite'
    },
    {
      component : <LiczbyNiewymierne />,
      route: '/liczbyniewymierne'
    },
    {
      component : <PotegaOWykladnikuCalkowitym />,
      route: '/potegaowykladnikucalkowitym'
    },
    {
      component : <PotegaOWykladnikuWymiernym />,
      route: '/potegaowykladnikuwymiernym'
    },
    {
      component : <DzialanieNaPotegach />,
      route: '/dzialanienapotegach'
    },
    {
      component : <WzorySkroconegoMnozenia />,
      route: '/wzoryskroconegomnozenia'
    },
    {
      component : <FunkcjaLioniowa />,
      route: '/funkcjalioniowa'
    },
    {
      component : <FunkcjaKwadratowa />,
      route: '/funkcjakwadratowa'
    },
    {
      component : <WzoryVieta />,
      route: '/wzoryvieta'
    },
    {
      component : <Wielomiany />,
      route: '/wielomiany'
    },
  ]

  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Main>
        <Suspense fallback={<div className='animation'>
        <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/kontakt">
              <Kontakt />
            </Route>
            <Route exact path="/Onas">
              <Onas />
            </Route>
            {
              [...routeArrayCiagi, ...routeArrayRownania,...routeArrayLiczby,...routeArrayWielomiany,...routeArrayTeoria, ...routeArrayFunkcje,
                ...routeArrayTrygonymetria,...routeArrayPotegi,...routeArrayLogarytmy,...routeArrayProcenty,...routeArrayNierownosci].map((item, i) => (
                  <Route exact key={i} path= {item.route}>
                    {item.component}
                  </Route>
                ) 
              )
            }
          
          </Switch>
        </Suspense>
      </Main>
      
    </div>
  );
}

export default App;
