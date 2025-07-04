import React, { useState } from 'react'
import { Crown } from 'phosphor-react';
import StatsCircle from './StatsCircle';

const SvgLogo = () => (
    <svg style={{ width: 90, height: 90 }} viewBox="0 0 293 297" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0,148 A146.5,146.5 0 0 1 293,148"
            stroke="url(#halfFadeGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
        />
        <g filter="url(#filter0_i_10_13)">
            <path d="M47.5338 135.5C43.4086 145.509 44.0338 163 44.0338 163L133.034 213L207.034 210.5L208.534 209C208.534 209 223.773 198.276 228.534 188C232.366 179.728 232.534 165 232.534 165L235.534 155L195.034 141.5L133.034 114L78.5338 98L68.0338 111C68.0338 111 52.2875 123.966 47.5338 135.5Z" fill="url(#paint0_linear_10_13)" />
        </g>
        <g filter="url(#filter1_i_10_13)">
            <path d="M102.5 129.5C92.7293 135.755 81 150 81 150C81 150 105.111 156.307 119.5 163C133.558 169.539 153.5 183.5 153.5 183.5C153.5 183.5 173.166 178.741 183.5 171.5C190.625 166.508 199.5 156 199.5 156C199.5 156 166 138.5 161.5 135C157 131.5 133.5 118 133.5 118C133.5 118 113.375 122.538 102.5 129.5Z" fill="url(#paint1_linear_10_13)" />
        </g>
        <path d="M41.3393 225.549C50.1939 241.131 73.7894 258 73.7894 258C73.7894 258 67.1639 250.287 64.304 244.52C61.9206 239.715 60.9898 236.773 59.8109 231.54C58.732 226.751 57.6807 223.927 58.3132 219.059C58.9336 214.284 59.7797 211.322 62.8063 207.576C66.0017 203.622 68.9949 202.278 73.7894 200.587C78.4189 198.954 81.3744 198.729 86.2702 199.089C90.8919 199.429 93.3356 200.682 97.7525 202.085C109.057 205.674 114.546 209.873 125.21 215.065C135.009 219.836 140.15 223.262 150.172 227.546C157.264 230.578 161.184 232.575 168.644 234.535C176.084 236.491 180.421 237.517 188.114 237.531C197.635 237.548 203.04 237.533 212.077 234.535C223.169 230.857 230.052 227.096 238.536 219.059C243.999 213.883 245.987 210.437 250.018 204.082C255.623 195.246 262 179.619 262 179.619C262 179.619 255.145 189.287 249.02 193.597C243.72 197.327 240.836 199.04 234.542 200.587C226.004 202.686 224.558 203.582 212.077 202.085C199.596 200.587 193.212 198.105 181.124 194.596C169.037 191.087 161.87 184.835 150.172 177.622L120.218 159.15C120.218 159.15 99.8851 151.514 86.2702 151.162C73.4217 150.829 65.0525 150.406 53.8201 156.653C45.0242 161.545 40.1685 165.791 35.3485 174.626C32.3072 180.201 31.171 183.805 30.3562 190.103C28.4966 204.475 34.1793 212.95 41.3393 225.549Z" fill="url(#paint2_linear_10_13)" stroke="url(#paint3_linear_10_13)" stroke-width="2" />
        <path d="M27 105.689C21.0064 119.746 20 144.189 20 144.189C20 144.189 36.1166 122.49 51 115.189C65.2376 108.205 75.1634 107.359 91 108.189C103.204 108.829 109.911 111.311 121.5 115.189C140.301 121.481 149.156 129.084 166.5 138.689C181.12 146.785 187.655 154.878 203.5 160.189C215.888 164.341 223.69 168.258 236.5 165.689C244.47 164.091 249.077 162.171 255.5 157.189C267.785 147.661 270.435 136.599 272.5 121.189C275.509 98.7285 254 66.1891 254 66.1891C254 66.1891 261.5 104.689 239 110.689C216.5 116.689 206 104.189 193 97.6891C180 91.1891 169.834 79.9213 153 72.1891L152.484 71.9524C136.46 64.5913 126.726 60.1201 109 58.6891C94.5332 57.5213 85.6818 57.3454 72 62.1891C60.0981 66.4028 53.5431 70.3782 44.5 79.1891C35.6173 87.8438 31.8641 94.281 27 105.689Z" fill="url(#paint4_linear_10_13)" stroke="url(#paint5_linear_10_13)" stroke-width="2" />
        <path d="M129.433 22.2203C114.036 25.7949 89.4334 40.7203 93.4335 40.7203C97.4335 40.7203 130.933 38.2203 150.433 48.7203C169.933 59.2202 171.433 60.7203 177.433 65.2203C183.433 69.7203 187.433 76.2202 205.933 82.7203C224.433 89.2203 233.433 69.7203 227.933 60.7203C222.433 51.7202 211.933 43.2203 210.433 41.7203C208.933 40.2203 185.103 25.4811 166.933 22.2203C152.519 19.6335 143.699 18.9085 129.433 22.2203Z" fill="url(#paint6_linear_10_13)" stroke="url(#paint7_linear_10_13)" stroke-width="2" />
        <path d="M99.0035 227.431C93.5719 228.73 89.6268 230.766 87.5035 235.931C85.9445 239.724 88.5035 247.431 88.5035 247.431C88.5035 247.431 92.0785 254.593 96.5035 258.431C100.273 261.701 103.104 263.077 107.504 265.431C113.203 268.482 116.416 270.257 122.504 272.431C129.685 274.996 133.889 276.023 141.504 276.431C147.77 276.767 151.883 276.32 158.004 274.931L158.285 274.868C163.763 273.625 166.669 272.965 172.004 270.931C178.712 268.373 182.181 266.333 188.504 262.931C195.181 259.339 204.504 251.931 204.504 251.931C204.504 251.931 199.107 254.069 195.504 254.931C190.722 256.075 187.92 256.433 183.004 256.431C176.07 256.429 172.182 255.294 165.504 253.431C158.413 251.454 154.687 249.516 148.004 246.431C142.215 243.76 139.014 242.138 133.504 238.931C129.103 236.37 127.107 234.108 122.504 231.931C116.975 229.317 113.587 228.056 107.504 227.431C104.201 227.092 102.232 226.66 99.0035 227.431Z" fill="url(#paint8_linear_10_13)" stroke="url(#paint9_linear_10_13)" stroke-width="2" />
        <defs>
            <filter id="filter0_i_10_13" x="44" y="98" width="206.534" height="130" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="15" dy="15" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_13" />
            </filter>
            <filter id="filter1_i_10_13" x="81" y="118" width="118.5" height="75.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_13" />
            </filter>
            <linearGradient id="paint0_linear_10_13" x1="140" y1="119" x2="139.767" y2="213" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C50076" />
                <stop offset="0.413462" stop-color="#CC028B" />
                <stop offset="1" stop-color="#6C005F" />
            </linearGradient>
            <linearGradient id="paint1_linear_10_13" x1="140.25" y1="118" x2="140.25" y2="183.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B8006D" />
                <stop offset="0.466346" stop-color="#CD2893" />
                <stop offset="1" stop-color="#8A0065" />
            </linearGradient>
            <linearGradient id="paint2_linear_10_13" x1="151.515" y1="151" x2="140.485" y2="258" gradientUnits="userSpaceOnUse">
                <stop offset="0.00961538" stop-color="#CA007A" />
                <stop offset="0.576923" stop-color="#290CB0" />
            </linearGradient>
            <linearGradient id="paint3_linear_10_13" x1="146" y1="151" x2="139.333" y2="219.909" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE5FFF" />
                <stop offset="1" stop-color="#562AF4" />
            </linearGradient>
            <linearGradient id="paint4_linear_10_13" x1="-2.88554" y1="119.24" x2="269.386" y2="118.26" gradientUnits="userSpaceOnUse">
                <stop offset="0.0192308" stop-color="#2346E3" />
                <stop offset="0.480769" stop-color="#FC17CA" />
                <stop offset="1" stop-color="#221ADB" />
            </linearGradient>
            <linearGradient id="paint5_linear_10_13" x1="38" y1="120" x2="258.5" y2="133.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5F64FF" />
                <stop offset="0.480769" stop-color="#FF49B3" />
                <stop offset="0.995192" stop-color="#003CFF" />
            </linearGradient>
            <linearGradient id="paint6_linear_10_13" x1="161.267" y1="20" x2="183.433" y2="83.7203" gradientUnits="userSpaceOnUse">
                <stop stop-color="#900BCC" />
                <stop offset="1" stop-color="#6900E2" />
            </linearGradient>
            <linearGradient id="paint7_linear_10_13" x1="161.267" y1="20" x2="232.433" y2="72.2203" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE5FFF" />
                <stop offset="1" stop-color="#C74EFE" />
            </linearGradient>
            <linearGradient id="paint8_linear_10_13" x1="145.752" y1="227" x2="145.752" y2="276.538" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3801AE" />
                <stop offset="1" stop-color="#2D008F" />
            </linearGradient>
            <linearGradient id="paint9_linear_10_13" x1="145.752" y1="227" x2="142.926" y2="258.952" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE5FFF" />
                <stop offset="1" stop-color="#562AF4" />
            </linearGradient>
        </defs>
    </svg>
)

const TopStats = () => {
    const pinkColor = "#FF1493"
    const [sliderValue, setSliderValue] = useState(50)
    return (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#FF1493' }}
                />
                
            </div>
            <div style={{ width: 225, height: 187.5, position: 'relative' }}>
                <div style={{ position: 'absolute', top: '7.5%', left: -37.5 }}>
                    <StatsCircle value={sliderValue} label="Revenue" color={pinkColor} />
                </div>
                <div style={{ position: 'absolute', bottom: '7.5%', left: -37.5 }}>
                    <StatsCircle value={sliderValue} label="Retail" color={pinkColor} />
                </div>
                <div style={{ position: 'absolute', top: '7.5%', right: -37.5 }}>
                    <StatsCircle value={sliderValue} label="Retention" color={pinkColor} />
                </div>
                <div style={{ position: 'absolute', bottom: '7.5%', right: -37.5 }}>
                    <StatsCircle value={sliderValue} label="Service" color={pinkColor} />
                </div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 90,
                    height: 90,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <div style={{ height: 160, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {(sliderValue / 20).toFixed(2) >= 4.5 ? (
                            <Crown size={21} color="#FFD700" weight="fill" />
                        ) : (
                            <div style={{ height: 21 }} />
                        )}
                        <SvgLogo />
                    </div>
                    <div style={{ color: '#50E3FF', fontSize: 8.25, fontWeight: 'bold', marginTop: 8 }}>Tiffany Styles</div>
                    <div style={{ color: '#50E3FF', fontSize: 13.5, fontWeight: 'bold', marginTop: 4 }}>
                        {(sliderValue / 20).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopStats
