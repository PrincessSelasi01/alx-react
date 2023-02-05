import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import './Notifications.css';
import closebtn from '../assets/close-btn.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';

const styles = StyleSheet.create({
  Notifications:   {
    border:"2px dashed red",
    padding: 5,
    width: "30%",
    position: "fixed",
    right: 0,
    top: "4%",
    marginRight: 10
  },

  p: {
    margin: 0,
    width: "100%"
  },

  ul: {
    margin: 1,
  },

  menuList: {
    margin: 1
  },

  menuItem: {
    position: "fixed",
    right: 0,
    paddingRight: 10
  }
})

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    markAsRead: PropTypes.func
  }

  static defaultProps = {
      displayDrawer: false,
      listNotifications: []
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return ((nextProps.listNotifications.length > this.props.listNotifications.length) ? true : false)
  }

  render() {
    const loadNotifs = () => {
      let rows = <></>
      const notifArray = this.props.listNotifications
      if (notifArray.length == 0){
          return <p>No new notification for now</p>
      } else {
          rows = notifArray.map((notif) => {
[O            if (notif.html != undefined && notif.html.__html != null){
              return (<NotificationItem key={notif.id} id={notif.id} type={notif.type}
              html={notif.html} markAsRead={this.markAsRead}/>)
            } else {
            return (<NotificationItem key={notif.id} id={notif.id} type={notif.type}
            value={notif.value} markAsRead={this.markAsRead}/>)
            }
          })
      }
      return (
        <>
        <p className={css(styles.p)}>Here is the list of notifications:</p>
            <ul className={css(styles.ul)}>
              {rows}
            </ul>
        </>
      )
    }
    const showNotifs = () => {
      if (this.props.displayDrawer) {
        return (
          <>
            <div className={css(styles.Notifications)}>
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
      <div className={css(styles.menuItem)}>Your notifications</div>
      {showNotifs()}
    </>
    )
  }
}
