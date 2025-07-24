import React from "react";

function TimeBar({ time = "32:00", barValue = 75 }) {
  const radius = 22.5;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (barValue / 100) * circumference;

  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg height="50" width="50">
        <circle
          stroke="#333"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="25"
          cy="25"
        />
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset, transition: "stroke-dashoffset 0.35s" }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="25"
          cy="25"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#00c6ff" />
          </linearGradient>
        </defs>
      </svg>
      <div
        style={{
          position: "absolute",
          fontSize: "8px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {time}
      </div>
    </div>
  );
}

export default TimeBar;
