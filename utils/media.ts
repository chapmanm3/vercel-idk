
interface Constraints {
  video: boolean
  audio: boolean
};

const openMediaDevices = async (constrains:Constraints) => {
  const devices = await navigator.mediaDevices.getUserMedia(constrains)
  return devices
};

export {
  openMediaDevices
}