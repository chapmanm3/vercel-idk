import { openMediaDevices } from "../../utils/media";
import { useEffect } from "react";

const WebcamHandler = () => {

  useEffect(() => {
    try {
      const stream = openMediaDevices({video: true, audio: true})
    } catch(err) {
      console.error(err);
    }
  }, [])

  return (
    <div>Expression Expected lol</div>
  );
}

export default WebcamHandler;