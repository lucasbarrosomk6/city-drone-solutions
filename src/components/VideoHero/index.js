import ReactPlayer from "react-player/lazy";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useRef, useState } from "react";

const VideoHero = () => {
  const storage = getStorage();
  const [videoURL, setVideoURL] = useState("");
  const [play, setPlay] = useState("");
  const getVideo = async (folderPath, videoName) => {
    const listRef = ref(storage, folderPath);

    const { items } = await listAll(listRef);
    const url = await getDownloadURL(
      items.find((item) => item.name === videoName)
    );
    console.log({ url });
    return url;
  };
  useEffect(() => {
    const url = async () => {
      const response = await getVideo("Burquitlam", "DJI_0281.MP4");
      console.log(typeof response);
      setVideoURL(response);
      return response;
    };
    url();
  }, []);

  return (
    <div className="video-hero-container">
      <span className={`loading-placeholder ${play && "loaded"}`} />

      <ReactPlayer
        playbackRate={0.5}
        loop
        muted
        playing={play}
        url={videoURL}
        onReady={() => setPlay(true)}
        width="100%"
        height="auto"
        style={{ objectFit: "contain" }}
      ></ReactPlayer>
    </div>
  );
};
export default VideoHero;
