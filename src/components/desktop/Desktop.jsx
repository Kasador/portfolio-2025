import useFirebaseStorage from "@/hooks/useFirebaseStorage";

function Desktop() {
  const { url, loading, error } = useFirebaseStorage("desktop/videos/Desktop.webm");

  if (loading) return <p>Loading video...</p>;
  if (error) return <p>Error loading boot animation: {error}</p>;

  return (
    <div className="video-wrapper">
      {url && (
        <video autoPlay muted loop id="desktop-video">
          <source src={url} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default Desktop;