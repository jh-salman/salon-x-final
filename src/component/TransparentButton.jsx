import React from 'react'

function TransparentButton({ title }) {
    return (
        <button
            style={{
                fontSize: "9px",
                height: "24px",
                width: "100px",
                border: "none",
                borderRadius: "8px",
                background:"linear-gradient(180deg, #2D2D3A 0%, #000000 100%)",
                color: "white",
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                position: "absolute",
                outline: "none",
            }}
        >
            {title}
        </button>
    )
}

export default TransparentButton
