import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
        background: "#5289B5"
      }}
      className="embed-responsive embed-responsive-16 by 9"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
