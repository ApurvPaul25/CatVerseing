export default function CatCard({ url, breed }) {
  return (
    <figure
      style={{
        border: "1px solid #ddd",
        borderRadius: "6px",
        overflow: "hidden",
        background: "#fff",
        padding: "4px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={url}
        alt="cat"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <figcaption
        style={{
          padding: "6px 0",
          fontSize: "14px",
          textAlign: "left",
          color: "#555"
        }}
      >
        {breed}
      </figcaption>
    </figure>
  );
}
