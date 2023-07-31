import React, { useContext } from "react";
import { SocketContext } from "../providers/SocketProvider";
import "../css/Notification.css";
import PhoneIcon from "../images/phone.png";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <div className="control-container pickup-call" onClick={answerCall}>
            <img src={PhoneIcon} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;
