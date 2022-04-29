import ReactPlayer from "react-player/lazy";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import TypeAnimation from "react-type-animation";

const TypedText = ({ text, el, delay }) => {
  return (
    <TypeAnimation
      cursor={true}
      repeat="infinite"
      sequence={[
        "Vancouver Based Drone Videography",
        2000,
        "Vancouver Based Drone Photography",
        2000,
        "Vancouver Based Drone Services",
      ]}
      wrapper={el}
    />
  );
};
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
      //   const response = await getVideo("Burquitlam", "DJI_0281.MP4");
      //   console.log(typeof response);
      setVideoURL(
        "https://video-test-bed.s3.us-west-1.amazonaws.com/tower-push-in_1.mp4"
      );
      //   return response;
    };
    url();
  }, []);

  return (
    <>
      <div className="wall">
        <div className="title-row">
          <div className="col-xxl-12">
            <div className="section__title-wrapper ">
              <h1 className="section__title">City Drone Solutions</h1>
              <TypedText text="City Drone Solutions" el="h4" delay={1000} />
            </div>
          </div>
        </div>
      </div>
      <div className="video-hero-container">
        <span className={`loading-placeholder ${play && "loaded"}`} />

        <ReactPlayer
          playbackRate={1}
          loop
          muted
          playing={play}
          url={
            "https://video-test-bed.s3.us-west-1.amazonaws.com/tower-push-in_1.mp4"
          }
          onReady={() => setPlay(true)}
          width="100%"
          height="auto"
          className="player-video"
          style={{ position: "fixed", zIndex: "-999", top: "0" }}
        ></ReactPlayer>
      </div>
    </>
  );
};
export default VideoHero;
