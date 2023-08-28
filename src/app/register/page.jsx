"use client" 

import React, { useState, useEffect } from "react";
import styles from "./tourism.module.css";

async function getStateAndCityData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch State and City data");
  }

  return res.json();
}

export default function Page(props) {

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  
  useEffect(() => {
    getStateAndCityData()
      .then((data) => {
        if (data) {
          console.log(data)
          const keys = Object.values(data[101]["states"]);
          console.log(keys);
          setStates(keys.map((key) => ({ value: key["name"], label: key["name"] })));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(states);

  return (
    <>
      {/* Your JSX content */}
    </>
  );
}
