import React from "react";
import VideoPlayer from "./VideoPlayer";
import Sidebar from "./SideBar";
import Notifications from "./Notification";


const ChatComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 border border-end-0 border-dark bg-dark">
          <div className="m-2">
            <h1 className="text-white underline" style={{ paddingLeft: "0px" }}>
              ChatVid
            </h1>
            <hr className="text-white" />
            <Sidebar>
              <Notifications />
            </Sidebar>
          </div>
        </div>
        <div className="col-9 border  border-dark">
          <div style={{ height: "700px", width: "100%", overflowY: "auto" }}>
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
