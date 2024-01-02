import React from "react";
import Header from "../Header/Header";
function PageLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {children}
    </div>
  );
}

export default PageLayout;
