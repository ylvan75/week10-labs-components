import React from 'react';

export const Footer = ({ title, name, phoneNumber, email }) => {
  return (
    <footer className="footer">
      <h4 className="footer-title">{title}</h4>
      <address className="footer-content">
        <p>{name}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
      </address>
    </footer>
  );
};
