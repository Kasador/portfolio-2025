import useFirebaseStorage from "@/hooks/useFirebaseStorage";

function Mobile() {
  const { url, loading, error } = useFirebaseStorage("mobile/videos/Mobile_v5_Slow.mp4");

  if (loading) return <p>Loading video...</p>;
  if (error) return <p>Error loading boot animation: {error}</p>;

  return (
    <div className="video-wrapper">
      {url && (
        <video autoPlay muted loop playsInline id="mobile-video">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default Mobile;