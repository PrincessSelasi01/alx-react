import React from 'react';
import './Notifications.css';
import closebtn from '../assets/close-btn.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';


export default function Notifications(props) {
  const loadNotifs = () => {
    let rows = <></>
    const notifArray = props.listNotifications
    if (notifArray.length == 0){
        return <p>No new notification for now</p>
    } else {
        rows = notifArray.map((notif) => {
          if (notif.html != undefined && notif.html.__html != null){
            return (<NotificationItem key={notif.id} type={notif.type}
            html={notif.html} />)
          } else {
          return (<NotificationItem key={notif.id} type={notif.type}
          value={notif.value} />)
          }
        })
    }
    return (
      <>
      <p>Here is the list of notifications:</p>
          <ul>
            {rows}
          </ul>
      </>
    )
  }
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
            {loadNotifs()}
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
  displayDrawer: false,
  listNotifications: []
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}


