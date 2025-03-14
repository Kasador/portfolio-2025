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
        loop
        id="mobile-video"
        // onEnded={(e) => e.target.play()}
        >
          <source src="/videos/Mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
}

export default Mobile;