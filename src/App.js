import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const name = "Ylva Nilsson";
const profession = "frontend developer";
const expertise = "QA";
const phoneNumber = "+46 70 347 47 99";
const email = "ylva.nilsson75@gmail.com";

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
        <div>Here will my main content be added.</div>
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
