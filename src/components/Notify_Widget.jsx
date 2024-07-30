import React from 'react'
import './component.css'
import notification from "./component_assests/push-notification.png"
import medal from "./component_assests/medals.png"
function Notify_Widget() {
  return (
    <div className='N-main'>
        <div className="noti">
            <div className="nmsg">
                <ul>
                    <li>Notification XXXXXXXXXXX</li>
                    <p>Time and Date</p>
                </ul>
                <ul>
                    <li>Notification XXXXXXXXXXX</li>
                    <p>Time and Date</p>
                </ul>
                <ul>
                    <li>Notification XXXXXXXXXXX</li>
                    <p>Time and Date</p>
                </ul>
                <ul>
                    <li>Notification XXXXXXXXXXX</li>
                    <p>Time and Date</p>
                </ul>
            </div>
            <div className="nicon">
                <img src={notification} alt="" />
            </div>
        </div>


        <div className="rank">
            <div className="ricon">
                <img src={medal} alt="" />
            </div>
            <div className="rmsg">
                <ul>
                    <li>Ranker-1</li>
                    <li>Ranker-2</li>
                    <li>Ranker-3</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Notify_Widget
