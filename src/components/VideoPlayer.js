import React, { useContext } from 'react';
import { SocketContext } from '../providers/SocketProvider';

const VideoPlayer = () => {
  const { callAccepted, myVideo, userVideo, callEnded, stream } = useContext(SocketContext);
  
  return (
    <div>
        
      { stream && (
        <video style={{ height: "690px", width: "100%", overflowY: "auto" }} playsInline  ref={myVideo} autoPlay />

      ) }
      { callAccepted && !callEnded && (
         <video playsInline ref={userVideo} autoPlay /> 
      )}
    </div>
  );
};

export default VideoPlayer;
