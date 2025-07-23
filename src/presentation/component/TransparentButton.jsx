import React from 'react'

function TransparentButton({ title }) {
    return (
        <button
            style={{
                fontSize: "12px",
                height: "31px",
                width: "134px",
                border: "2px solid white",
                borderRadius: "8px",
                background: "black",
                color: "white",
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                position: "absolute",
            }}
        >
            {title}
        </button>
    )
}

export default TransparentButton
