import React from "react";

function Footer() {
  const Year = new Date().getFullYear();
  return (
          <footer>
        <p>Created By: Fernando Nunez-Dev</p>
      <p>Copyright ⓒ {Year}</p>
    </footer>
  );
}

export default Footer;
