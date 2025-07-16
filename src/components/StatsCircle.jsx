import React from 'react'

const StatsCirle = ({ value, label, color }) => {
  const radius = 26.25
  const stroke = 4.5
  const normalizedRadius = radius - stroke / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 8 }}>
      <svg height={radius * 2} width={radius * 2}>
        <defs>
          <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2CCEE0" />
            <stop offset="100%" stopColor="#D60DE5" />
          </linearGradient>
        </defs>
        <circle
          stroke="#333"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={`url(#gradient-${label})`}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.35s' }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          fill="#50E3FF"
          fontSize="13.5"
          fontWeight="bold"
        >
          {value}%
        </text>
      </svg>
      <div style={{ color: '#50E3FF', marginTop: 4, fontSize: 9 }}>{label}</div>
    </div>
  )
}

export default StatsCirle
