import StickyFooter from "react-sticky-footer";
import React from "react";

function StickyFooter() {
  return (
    <StickyFooter>
      bottomThreshold={50}
      normalStyles=
      {{
        backgroundColor: "#999999",
        padding: "2rem"
      }}
      stickyStyles=
      {{
        backgroundColor: "rgba(255,255,255,.8)",
        padding: "2rem"
      }}
      > Add any footer markup here
    </StickyFooter>
  );
}

export default StickyFooter;
