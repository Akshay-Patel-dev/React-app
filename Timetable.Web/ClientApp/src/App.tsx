import * as React from 'react';
import { Routes, Route } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout';
import Login from './components/Authoraization/Login';
import SideBar from './components/Layout/Sidebar/SideBar';
import { useAppSelector } from '../src/app/hooks';
import { selectIsLoggedIn } from './features/Reducers/authSlice';
import { selecSidebar } from './features/Reducers/rtlSlice';
import useInitI18n from './features/Language';
import { I18nextProvider } from 'react-i18next';
import Main from './pages/Main';
import ManageBond from './pages/ManageBond';
import CoveragePredication from './pages/CoveragePredication';
import Defination from './pages/Defination';
import EventManagement from './pages/EventManagement';
import PersonalInformation from './pages/PersonalInformation';
import Reports from './pages/Reports';
import Request from './pages/Request';
import Tips from './pages/Tips';
import VariousPlace from './pages/VariousPlace';
import Working from './pages/Working';

import Avaliablility from './pages/dailyvies/Avaliablility';
import DailySummary from './pages/dailyvies/DailySummary';
import DailyViews from './pages/dailyvies/DailyViews';
import EditingShift from './pages/dailyvies/EditingShift';
import EditingTemplates from './pages/dailyvies/EditingTemplates';
import Presence from './pages/dailyvies/Presence';
import ViewCoverage from './pages/dailyvies/ViewCoverage';
import Weekly from './pages/dailyvies/Weekly';
import WhoIsWorking from './pages/dailyvies/WhoIsWorking';
import DailyManagement from './pages/dailyvies/DailyManagement';
import Syncfusion from './components/Layout/syncfusion';



const App = () => {
  const login = useAppSelector(selectIsLoggedIn);
  const i18n = useInitI18n()
  //  const routes = React.useMemo(() => Allroutes(), []);


  const sidebar: string = useAppSelector(selecSidebar);



  return (login ? <I18nextProvider i18n={i18n}>
    <div className="sidebar-with-menu " dir={sidebar}>
      <SideBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/message-board" element={<ManageBond />} />
          <Route path="/coverage-prediction" element={<CoveragePredication />} />
          <Route path="/definitions"  element={<Defination />} />
          <Route path="/event-management" element={<EventManagement />} />
          <Route path="/personal-information" element={<PersonalInformation />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/requests" element={<Request />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/various-place" element={<VariousPlace />} />
          <Route path="/working" element={<Working />} />
          <Route path="/displays/daily-management" element={<DailyManagement />} />
          <Route path="/presence" element={<Presence />} />
          <Route path="/displays/availability" element={<Avaliablility />} />
          <Route path="/displays/daily/daily-summary" element={<DailySummary />} />
          <Route path="/displays/daily/daily-view" element={<DailyViews />} />
          <Route path="/displays/editing-shifts-in-the-list-experimental" element={<EditingShift />} />
          <Route path="/displays/editing-templates-in-the-display" element={<EditingTemplates />} />
          <Route path="/daily-views/presence" element={<Presence />} />
          <Route path="/displays/view-coverage" element={<ViewCoverage />} />
          <Route path="/displays/weekly" element={<Weekly />} />
          <Route path="/displays/who-is-working-now" element={<WhoIsWorking />} />
          <Route path='/syncfusion' element={<Syncfusion/>}/>
        </Routes>
      </Layout>
    </div></I18nextProvider> : <div> <Login /> </div>
  )
}
export default App;
