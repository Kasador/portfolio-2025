import "../../styles/DesktopView.scss";

const DesktopView = ({ videoSize }) => {
  const screenWidth = videoSize.width * 0.573;
  const screenHeight = videoSize.height * 0.607;
  const topOffset = videoSize.height * 0.543;
  const leftOffset = videoSize.width * 0.50;

  return (
    <section
      id="desktop-view"
      style={{
        width: `${screenWidth}px`,
        height: `${screenHeight}px`,
        top: `${topOffset}px`,
        left: `${leftOffset}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>Desktop</h1>
    </section>
  );
};

export default DesktopView;
