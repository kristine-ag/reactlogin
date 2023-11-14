import React from 'react'

const Button = ({ type, className, disabled, children }) => {
  return (
    <button       
        type={type}
        className={className}
        disabled={disabled}
    >
    {children}
    </button>
  )
}

export default Button