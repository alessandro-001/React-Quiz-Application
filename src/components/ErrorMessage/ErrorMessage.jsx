import React from "react";

export default function ErrorMessage({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Create a column layout
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: "purple",
        color: "white",
        textTransform: "capitalize",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
