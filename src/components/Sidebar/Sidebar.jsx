import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChatIcon from '@mui/icons-material/Chat';
import LiquorIcon from '@mui/icons-material/Liquor';
import EmailIcon from '@mui/icons-material/Email';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReportIcon from '@mui/icons-material/Report';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const sidebar = () => {
  return (
    <div className="sidebar">
       <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem active">              
              <LineStyleIcon  className="sidebarIcon"/>
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon"/>
              Salary Hikes
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to='/users' className="link">
            <li className="sidebarListItem">
              <AccountCircleIcon className="sidebarIcon"/>
              Employee
            </li>
            </Link>
            <Link to='/projects' className="link">
            <li className="sidebarListItem">
              <PrecisionManufacturingIcon className="sidebarIcon"/>
              Projects
            </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon"/>
               Payout
            </li>
            <li className="sidebarListItem">
              <PersonOutlineIcon className="sidebarIcon"/>
               clients
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EmailIcon className="sidebarIcon"/>
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon className="sidebarIcon"/>
              Employee Feedback
            </li>
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon"/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Other Details</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LiquorIcon className="sidebarIcon"/>
              Holidays
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon"/>
              Report
            </li>
          </ul>
        </div>
       </div>
    </div>
  )
}

export default sidebar