import { openMediaDevices } from "../../utils/media";
import { useEffect, useRef, useState } from "react";

const WebcamHandler = () => {
  
  const vidElmRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null)
  async function enableStream(){
    try {
      const tempStream = await openMediaDevices({video: true, audio: false})
      setStream(tempStream)
      const vidElement = vidElmRef.current
      if(vidElement != null)
        vidElement.srcObject = stream
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log('Rerendered')
    enableStream();
  }, [stream?.active])

  return (
    <div className='container lg object-center'>
      <h3>VideoPreview</h3>
      <video ref={vidElmRef} autoPlay={true} playsInline={true} controls={false}/>
    </div>
  );
}

export default WebcamHandler;