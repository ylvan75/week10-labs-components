import React from 'react';
import { ProfileImage } from './ProfileImage';

export const Header = ({ title, name, profession, expertise }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <section className="header-content">
        <p>Portfolio: {name}</p>
        <h2>{profession}</h2>
        <h3>with {expertise} expertise</h3>
      </section>
      <ProfileImage profileImage="./images/YlvaNilssonProfil.jpg" />
    </header>
  );
};
