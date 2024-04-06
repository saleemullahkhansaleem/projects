const EmbeddedWebsite = ({ title, width, height, src, className }) => {
  return (
    <div className={`h-auto rounded overflow-hidden ${className}`}>
      <iframe
        title={title}
        width={width}
        height={height}
        src={src}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbeddedWebsite;
