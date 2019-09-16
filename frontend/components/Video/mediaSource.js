// const videoTag = document.getElementById('videoTag');
// const mediaSource = new MediaSource();
// const url = URL.createObjectURL(mediaSource);
// videoTag.src = URL.createObjectURL(mediaSource);

// const videoSourceBuffer = myMediaSource
//   .addSourceBuffer('video/mp4; codecs="avc1.64001e"')
import Hls from 'hls.js';

const startup = (user, streamKey, cb) => {


  let attemptNum = 0;
  let timeout = null;

  const videoTag = document.getElementById('videoTag');
  if (Hls.isSupported()) {
    let hls = new Hls({enableWorker: false});
    hls.attachMedia(videoTag);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      //Add hls.loadSource her;
      const attempt = () => {
        hls.loadSource(`https://pitchhost.me/live/${streamKey}/index.m3u8`);
      };

      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        if (videoTag != undefined) {
          videoTag.play();
          cb(true);
        }
      });
      hls.on(Hls.Events.ERROR, (event, data) => {
        cb(false);
      });

      attempt();

    });
  }
}



export default startup;