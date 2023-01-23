import React from 'react';
import './Notifications.css';
import closebtn from '../assets/close-btn.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


export default function Notifications(props) {
  const showNotifs = () => {
    if (props.displayDrawer) {
      return (
        <>
          <div className="Notifications">
            <button style={{float:'right', background: 'none', border: 'none'}}
            aria-label="Close"
            onClick={()=>console.log('Close button has been clicked')}>
              <img src={closebtn} alt="close-btn"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
            <NotificationItem type="default" value="New course available"/>
            <NotificationItem type="urgent" value="New resume available"/>
            <NotificationItem type="urgent" html={getLatestNotification()}/>
            </ul>
          </div>
        </>
      )
    }
  }
  return (
  <>
    <div className="menuItem">Your notifications</div>
    {showNotifs()}
  </>
  )
}

Notifications.defaultProps = {
  displayDrawer: false
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
}


