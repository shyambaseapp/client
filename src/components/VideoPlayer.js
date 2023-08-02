import React, { useContext } from 'react';
import { SocketContext } from '../providers/SocketProvider';

const VideoPlayer = () => {
  const { callAccepted, myVideo, userVideo, callEnded, stream } = useContext(SocketContext);
  
  return (
    <div>
        
      { stream && (
        <video style={{ height: "330px", width: "100%", overflowY: "auto" }} playsInline muted ref={myVideo} autoPlay />
      )}
      { callAccepted && !callEnded && (
         <video style={{ height: "330px", width: "100%", overflowY: "auto" }} playsInline ref={userVideo} autoPlay /> 
      )}
    </div>
  );
};

export default VideoPlayer;
