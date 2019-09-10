// const videoTag = document.getElementById('videoTag');
// const mediaSource = new MediaSource();
// const url = URL.createObjectURL(mediaSource);
// videoTag.src = URL.createObjectURL(mediaSource);

// const videoSourceBuffer = myMediaSource
//   .addSourceBuffer('video/mp4; codecs="avc1.64001e"')
import Hls from 'hls.js';

const startup = (currentUser) => {
  if (currentUser == undefined) return;

  let attemptNum = 0;
  let timeout = null;

  const videoTag = document.getElementById('videoTag');
  if (Hls.isSupported()) {
    let hls = new Hls({enableWorker: false});
    hls.attachMedia(videoTag);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      console.log("video and hls.js are now bound together !");
      //Add hls.loadSource her;
      const attempt = () => {
      };

      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        console.log(`manifest loaded, found ${data.levels.length} quality level`);
        if (videoTag != undefined) {
          videoTag.play();
        }
      });
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.log(data);
        // ++attemptNum;
        // if(attemptNum <= 10) {
        //   timeout = setTimeout(attempt, 1000);
        // }
      });

      console.log("attempt");
      attempt();

    });
  }
}



export default startup;