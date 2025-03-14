import { useEffect, useState } from "react";
import DesktopView from "../../views/desktop/DesktopView";

function Desktop() {
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const video = document.getElementById("desktop-video");

    const updateSize = () => {
      if (video) {
        setVideoSize({
          width: video.clientWidth,
          height: video.clientHeight,
        });
      }
    };

    const handleVideoLoaded = () => {
      updateSize();
    };

    if (video) {
      video.addEventListener("loadedmetadata", handleVideoLoaded);
    }

    window.addEventListener("resize", updateSize);
    updateSize(); // Ensure initial load works correctly

    return () => {
      window.removeEventListener("resize", updateSize);
      if (video) {
        video.removeEventListener("loadedmetadata", handleVideoLoaded);
      }
    };
  }, []);

  return (
    <div className="video-wrapper">
      <div className="video-container">
        <video autoPlay muted playsInline loop id="desktop-video">
          <source src="/videos/Desktop.webm" type="video/webm" />
          <source src="/videos/Desktop.mp4" type="video/mp4" />
        </video>
        <DesktopView videoSize={videoSize} />
      </div>
    </div>
  );
}

export default Desktop;
