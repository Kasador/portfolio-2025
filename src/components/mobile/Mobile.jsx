// import useFirebaseStorage from "@/hooks/useFirebaseStorage";

function Mobile() {
  // const { url, loading, error } = useFirebaseStorage("mobile/videos/Mobile.mp4");

  // if (loading) return <p>Loading video...</p>;
  // if (error) return <p>Error loading boot animation: {error}</p>;

  return (
    <div className="video-wrapper">
      <video   
        autoPlay 
        muted 
        playsInline 
        preload="auto"
        id="mobile-video"
        onCanPlay={(e) => e.target.play()}
        onError={(e) => console.error("Video Error:", e)}>
          <source src="/videos/Mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
}

export default Mobile;