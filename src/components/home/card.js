import React from "react";

export default function Card({ children, style, className, otherProps }) {
  return (
    <div
      style={{
        width: "100%",
        background: "#1A1D21",
        borderRadius: "16px",
        boxShadow:
          "0px 8px 12px 0px rgba(255, 255, 255, 0.04) inset, 0px 24px 64px -16px rgba(0, 0, 0, 0.24), 16px 24px 64px -24px rgba(255, 255, 255, 0.04) inset",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#fff",
        ...style,
      }}
      className={className}
      {...otherProps}
    >
      {children}
    </div>
  );
}
