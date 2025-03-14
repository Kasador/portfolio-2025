// import useFirebaseStorage from "@/hooks/useFirebaseStorage";
import DesktopView from "../../views/desktop/DesktopView";

function Desktop() {
  // const { url, loading, error } = useFirebaseStorage("desktop/videos/Desktop.webm");

  // if (loading) return <p>Loading video...</p>;
  // if (error) return <p>Error loading boot animation: {error}</p>;

  return (
    <div className="video-wrapper">
       <video   
        autoPlay 
        muted 
        playsInline 
        // onEnded={(e) => e.target.play()
        loop
        id="desktop-video">
          <source src="/videos/Desktop.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <DesktopView />
    </div>
  );
}

export default Desktop;