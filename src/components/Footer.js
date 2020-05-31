import React from 'react';

function Footer () {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright <span role='img' aria-label='copyright'>©️</span> {year}</p>
    </footer>
  );
};

export default Footer;