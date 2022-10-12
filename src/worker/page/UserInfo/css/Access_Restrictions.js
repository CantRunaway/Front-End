import React from "react"

const modalCSS = {
    overlay: {
        position: 'fixed',
        top: 30,
        left: 450,
        right: 450,
        bottom: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
      },
      content: {
        position: 'absolute',
        top: '10rem',
        left: '10rem',
        right: '10rem',
        bottom: '10rem',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
}

export default modalCSS