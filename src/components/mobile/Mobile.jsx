import MobileView from "../../views/mobile/MobileView";

function Mobile() {
  return (
    <div className="video-wrapper">
      <div className="video-container">
        <video autoPlay muted playsInline loop id="mobile-video">
          <source src="/videos/Mobile.webm" type="video/webm" />
          <source src="/videos/Mobile.mp4" type="video/mp4" />
        </video>
        <MobileView />
      </div>
    </div>
  );
}

export default Mobile;
