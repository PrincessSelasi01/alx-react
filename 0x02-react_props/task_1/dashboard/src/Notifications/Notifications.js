import React from 'react';
import './Notifications.css';
import closebtn from '../assets/close-btn.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  return (
    <div className="Notifications">
      <button style={{float:'right', background: 'none', border: 'none'}}
      aria-label="Close"
      onClick={()=>console.log('Close button has been clicked')}>
        <img src={closebtn} alt="close-btn"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={getLatestNotification()}/>
      </ul>
    </div>
  )
}
