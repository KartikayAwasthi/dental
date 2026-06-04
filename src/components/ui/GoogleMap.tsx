export default function GoogleMap() {
  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      shadow-lg
      h-[500px]
      "
    >
      <iframe
        src="https://www.google.com/maps/embed"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}