import Main from '../../pages/Main';
import ManageBond from '../../pages/ManageBond';
import CoveragePredication from '../../pages/CoveragePredication';
import Defination from '../../pages/Defination';
import EventManagement from '../../pages/EventManagement';
import PersonalInformation from '../../pages/PersonalInformation';
import Reports from '../../pages/Reports';
import Request from '../../pages/Request';
import Tips from '../../pages/Tips';
import VariousPlace from '../../pages/VariousPlace';
import Working from '../../pages/Working';

import Avaliablility from '../../pages/dailyvies/Avaliablility';
import DailySummary from '../../pages/dailyvies/DailySummary';
import DailyViews from '../../pages/dailyvies/DailyViews';
import EditingShift from '../../pages/dailyvies/EditingShift';
import EditingTemplates from '../../pages/dailyvies/EditingTemplates';
import Presence from '../../pages/dailyvies/Presence';
import ViewCoverage from '../../pages/dailyvies/ViewCoverage';
import Weekly from '../../pages/dailyvies/Weekly';
import WhoIsWorking from '../../pages/dailyvies/WhoIsWorking';
import {  FaUser, FaCalendarAlt, FaMapMarkedAlt, FaDesktop, FaUserFriends, FaLightbulb, FaTools, FaEnvelopeOpenText, FaClipboardList, FaUserCircle, FaBookOpen, FaFileAlt, FaMapMarkerAlt, FaEye, FaChartLine, FaCalendarDay, FaCalendarWeek, FaUserClock, FaEdit } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

interface RouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  name:string;
}
function AllRoutes(){
    const { t } = useTranslation();
const routes = [
    { path: '/', name: t('sidebar_main'),component:Main},
    { path: '/main', name: t('sidebar_main'), icon: <FaUser /> ,component:Main},
    { path: '/event-management', name: t('sidebar_eventManagement'), icon: <FaCalendarAlt /> ,component:EventManagement},
    { path: '/coverage-prediction', name: t('sidebar_coveragePrediction'), icon: <FaMapMarkedAlt />,component:CoveragePredication },
    {
        path: '/displays', name: t('sidebar_dailyView'), icon: <FaDesktop />, subRoutes: [
            {
                path: 'displays/daily/daily-view', name: t('sidebar_dailyView'), icon: <FaEye /> ,component:DailyViews
            },
            {
                path: 'displays/daily/daily-summary', name: t('sidebar_dailySummary'), icon: <FaChartLine /> ,component:DailySummary
            },
            {
                path: 'displays/daily-management', name: t('sidebar_dailyManagement'), icon: <FaCalendarDay /> ,component:DailySummary
            },
            {
                path: 'displays/view-coverage', name: t('sidebar_viewCoverage'), icon: <FaMapMarkedAlt /> ,component:ViewCoverage
            },
            {
                path: 'displays/availability', name: t('sidebar_availability'), icon: <FaUserFriends />  ,component:Avaliablility
            },
            {
                path: 'displays/weekly', name: t('sidebar_weekly'), icon: <FaCalendarWeek /> ,component:Weekly
            },
            {
                path: 'displays/who-is-working-now', name: t('sidebar_whoIsWorkingNow'), icon: <FaUserClock /> ,component:WhoIsWorking
            },
            {
                path: 'displays/editing-templates-in-the-display', name: t('sidebar_editingTemplates'), icon: <FaDesktop /> ,component:EditingTemplates
            },
            {
                path: 'displays/editing-shifts-in-the-list-experimental', name: t('sidebar_editingShifts'), icon: <FaEdit /> ,component:EditingShift
            }
        ]
    },
    { path: '/presence', name: t('sidebar_presence'), icon: <FaUserFriends /> ,component:Presence},
    { path: '/tips', name: t('sidebar_tips'), icon: <FaLightbulb /> ,component:Tips},
    { path: '/working', name: t('sidebar_working'), icon: <FaTools /> ,component:Working},
    { path: '/requests', name: t('sidebar_requests'), icon: <FaEnvelopeOpenText /> ,component:Request},
    { path: '/message-board', name: t('sidebar_messageBoard'), icon: <FaClipboardList /> ,component:ManageBond},
    { path: '/personal-information', name: t('sidebar_personalInformation'), icon: <FaUserCircle /> ,component:PersonalInformation},
    { path: '/definitions', name: t('sidebar_definitions'), icon: <FaBookOpen /> ,component:Defination},
    { path: '/reports', name: t('sidebar_reports'), icon: <FaFileAlt /> ,component:Reports},
    { path: '/various-place', name: t('sidebar_variousPlace'), icon: <FaMapMarkerAlt /> ,component:VariousPlace}
];

return routes;

}


export default AllRoutes;