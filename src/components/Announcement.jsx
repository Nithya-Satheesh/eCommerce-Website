import React from "react";

function Announcement() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        color: "green",
        fontWeight: "bold",
      }}
    >
      Super Deal! Free Shipping on Orders Over Rs.500
    </div>
  );
}

export default Announcement;
