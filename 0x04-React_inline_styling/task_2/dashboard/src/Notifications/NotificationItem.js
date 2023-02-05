import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: "darkblue"
  },

  urgent: {
    color:"red"
  }
})

const NotificationItem = React.memo(function NotificationItem(props) {
  const NotifType = css(props.type == "default" ? styles.default : styles.urgent)
  return(
    <li className={NotifType} data-notification-type={props.type} dangerouslySetInnerHTML={props.html}
    onClick={()=>props.markAsRead(props.id)}>{props.value}</li>
  )
})

NotificationItem.defaultProps = {
  type: "default"
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({__html: PropTypes.string}),
  value: PropTypes.string
}

export default NotificationItem
