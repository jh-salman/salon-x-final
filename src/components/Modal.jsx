const EventOverlay = ({ event, onClose }) => {
  if (!event) return null;

  const clientName = event.title.split(" - ")[0];

  return (
    <div style={{
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
      backgroundColor: "#0a0a0a",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      border: "1px solid #444",
      padding: "20px",
      color: "#fff",
      zIndex: 1000,
      boxShadow: "0 -4px 10px rgba(0,0,0,0.6)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>{clientName}</h3>
        <button onClick={onClose} style={{
          background: "transparent",
          border: "none",
          color: "#ccc",
          fontSize: "20px",
          cursor: "pointer"
        }}>✕</button>
      </div>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {["PARK", "MODIFY", "DOUBLE BOOK", "NEW APPOINTMENT", "DELETE"].map(label => (
          <button key={label} style={{
            backgroundColor: "#111",
            border: "1px solid #666",
            borderRadius: "30px",
            padding: "10px",
            color: "#fff",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer"
          }}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default  EventOverlay