import { NavLink } from "react-router-dom";
import { FaBars, FaUser, FaCalendarAlt, FaMapMarkedAlt, FaDesktop, FaUserFriends, FaLightbulb, FaTools, FaEnvelopeOpenText, FaClipboardList, FaUserCircle, FaBookOpen, FaFileAlt, FaMapMarkerAlt, FaEye, FaChartLine, FaCalendarDay, FaCalendarWeek, FaUserClock, FaEdit } from "react-icons/fa";
import './sidebar.css'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { useTranslation } from 'react-i18next';

const SideBar = (obj: any) => {

    const { t } = useTranslation();


    const routes = [
      { path: '/main', name: t('sidebar_main'), icon: <FaUser /> },
      { path: '/event-management', name: t('sidebar_eventManagement'), icon: <FaCalendarAlt /> },
      { path: '/coverage-prediction', name: t('sidebar_coveragePrediction'), icon: <FaMapMarkedAlt /> },
      {
      path: '/displays', name: t('sidebar_dailyView'), icon: <FaDesktop />, subRoutes: [
      {
      path: 'displays/daily/daily-view', name: t('sidebar_dailyView'), icon: <FaEye />
      },
      {
      path: 'displays/daily/daily-summary', name: t('sidebar_dailySummary'), icon: <FaChartLine />
      },
      {
      path: 'displays/daily-management', name: t('sidebar_dailyManagement'), icon: <FaCalendarDay />
      },
      {
      path: 'displays/view-coverage', name: t('sidebar_viewCoverage'), icon: <FaMapMarkedAlt />
      },
      {
      path: 'displays/availability', name: t('sidebar_availability'), icon: <FaUserFriends />
      },
      {
      path: 'displays/weekly', name: t('sidebar_weekly'), icon: <FaCalendarWeek />
      },
      {
      path: 'displays/who-is-working-now', name: t('sidebar_whoIsWorkingNow'), icon: <FaUserClock />
      },
      {
      path: 'displays/editing-templates-in-the-display', name: t('sidebar_editingTemplates'), icon: <FaDesktop />
      },
      {
      path: 'displays/editing-shifts-in-the-list-experimental', name: t('sidebar_editingShifts'), icon: <FaEdit />
      }
      ]
      },
      { path: '/presence', name: t('sidebar_presence'), icon: <FaUserFriends /> },
      { path: '/tips', name: t('sidebar_tips'), icon: <FaLightbulb /> },
      { path: '/working', name: t('sidebar_working'), icon: <FaTools /> },
      { path: '/requests', name: t('sidebar_requests'), icon: <FaEnvelopeOpenText /> },
      { path: '/message-board', name: t('sidebar_messageBoard'), icon: <FaClipboardList /> },
      { path: '/personal-information', name: t('sidebar_personalInformation'), icon: <FaUserCircle /> },
      { path: '/definitions', name: t('sidebar_definitions'), icon: <FaBookOpen /> },
      { path: '/reports', name: t('sidebar_reports'), icon: <FaFileAlt /> },
      { path: '/various-place', name: t('sidebar_variousPlace'), icon: <FaMapMarkerAlt /> },
      {path: '/syncfusion', name: "Syncfusion", icon: <FaDesktop />, subRoutes:[
        {
         path: '/syncfusion', name: "Syncfusion", icon: <FaEye />
         }
         ]
      }
    ]
    

    
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "12rem",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "17rem" : "4rem",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >

                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <section className="routes">
                        {isOpen && routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }
                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {t(route.name)}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{obj.children}</main>
            </div>
        </>
    );
};

export default SideBar;

