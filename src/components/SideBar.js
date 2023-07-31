import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../providers/SocketProvider";
import CameraIcon from "../images/camera.png";
import HangUpIcon from "../images/phone.png";
import "../css/Sidebar.css";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <>
      <form>
        <div
          className="input-group mb-3 test-center"
          style={{ marginTop: "15px" }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ height: "50px" }}
            className="form-control"
            placeholder="Full Name"
          />
          <CopyToClipboard text={me}>
            <button
              className="input-group-text"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4 mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </CopyToClipboard>
        </div>

        <div
          className="input-group mb-3 test-center"
          style={{ marginTop: "15px" }}
        >
          <input
            type="text"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            style={{ height: "50px" }}
            className="form-control"
            placeholder="Provide Key"
          />
        </div>
        {callAccepted && !callEnded ? (
          <div className="control-container hangup-call" onClick={leaveCall}>
            <img src={HangUpIcon} alt="" />
          </div>
        ) : (
          <div
            className="control-container video-call"
            onClick={() => callUser(idToCall)}
          >
            <img src={CameraIcon} alt="" />
          </div>
        )}
      </form>
      {children}
    </>
  );
};

export default Sidebar;
