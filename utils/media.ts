
interface Constraints {
  video: boolean
  audio: boolean
};

const openMediaDevices = async (constrains:Constraints) => {
  return await navigator.mediaDevices.getUserMedia(constrains);
};

export {
  openMediaDevices
}