import React from "react";
import PropTypes from "prop-types";

const list = [
  { id: 1, name: "A", country: "korea" },
  { id: 2, name: "B", country: "america" },
  { id: 3, name: "C", country: "japan" },
];

function SayHi({ name, country }) {
  return (
    <div>
      <span>Hello, {name}</span> <h3>Your country is {country}</h3>
    </div>
  );
}

function getPerson(person) {
  return <SayHi key={person.id} name={person.name} country={person.country} />;
}

function App() {
  return (
    <div>
      <h1>Test</h1>
      {list.map(getPerson)}
    </div>
  );
}

export default App;
