import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full  h-full inline-block z-0 dark:bg-dark dark:text-light bg-light p-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
