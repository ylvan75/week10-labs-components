import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './Button';

const name = 'Ylva Nilsson';
const profession = 'frontend developer';
const expertise = 'QA';
const phoneNumber = '+46 70 347 47 99';
const email = 'ylva.nilsson75@gmail.com';

export const App = () => {
  return (
    <>
      <Header
        title="Welcome to my portfolio!"
        name={name}
        profession={profession}
        expertise={expertise}
      />
      <main>
        <div> Here will my main content be added.</div>
        <div className="tooltip" data-tooltip="This is my tooltip">
          <Button className="button-green" text="Green" />
        </div>
        <Button className="button-blue" text="Blue" />
      </main>
      <Footer
        title="Contacts"
        name={name}
        phoneNumber={phoneNumber}
        email={email}
      />
    </>
  );
};
