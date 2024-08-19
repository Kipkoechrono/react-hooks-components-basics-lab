import React from "react";

// Define the NavBar component
function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

// Define the Home component
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// Define the About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;