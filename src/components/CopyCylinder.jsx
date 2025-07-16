export default function GlassProgress() {
  const containerStyle = {
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const glassStyle = {
    width: "100px",
    height: "500px",
    borderRadius: "50px",
    padding: "10px",
    background: "linear-gradient(145deg, #0f172a, #1e293b)",
    boxShadow: "0 0 40px #1e40af",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const innerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "50px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 0",
    position: "relative",
  };

  const lineStyle = {
    position: "absolute",
    top: "40px",
    bottom: "100px",
    width: "4px",
    background: "linear-gradient(to bottom, #22d3ee, #3b82f6)",
    zIndex: 0,
  };

  const dotStyle = {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "#22d3ee",
    boxShadow: "0 0 10px #22d3ee",
    zIndex: 1,
  };

  const glowingBallWrapper = {
    position: "absolute",
    bottom: "20px",
    zIndex: 2,
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#f97316",
    boxShadow: "0 0 30px #f97316",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const ringStyle = {
    position: "absolute",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "4px solid rgba(30, 64, 175, 0.4)",
    transform: "rotate(45deg)",
    filter: "blur(2px)",
  };

  return (
    <div style={containerStyle}>
      <div style={glassStyle}>
        <div style={innerStyle}>
          <div style={lineStyle}></div>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={dotStyle}></div>
          ))}
          <div style={glowingBallWrapper}>
            <div style={ringStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
}