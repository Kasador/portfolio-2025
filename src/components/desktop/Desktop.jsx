// import useFirebaseStorage from "@/hooks/useFirebaseStorage";

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
        preload="auto"
        id="desktop-video"
        onCanPlay={(e) => e.target.play()}
        onError={(e) => console.error("Video Error:", e)}>
          <source src="/videos/Desktop.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
}

export default Desktop;