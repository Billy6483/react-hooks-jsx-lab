import React from 'react';


const name = "John Doe";
const city = "New York";

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
    