"use client" 

import React, { useState, useEffect , useReducer} from "react";
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

function filterObjectsByName(objectsArray, searchName) {
  return objectsArray.filter(object => object.name === searchName);
}

const formReducerFn = (state, action) => {
  
  return state;
};

const formDataTemplate = [];


export default function Page(props) {

  const [formData, formDispatchFn] = useReducer(formReducerFn , formDataTemplate)

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState({
  "value": "Andaman and Nicobar Islands",
  "label": "Andaman and Nicobar Islands"
});

  
  useEffect(() => {
    getStateAndCityData()
      .then((data) => {
        if (data) {
          const keys = Object.values(data[101]["states"]);
          setStates(keys.map((key) => ({ value: key["name"], label: key["name"] })));
          setCities(filterObjectsByName(data[101]["states"],selectedState["value"])[0]["cities"].map((key)=>({value: key["name"], label: key["name"]})))
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(states);
  console.log(cities);

  return (
    <>
      {/* Your JSX content */}
    </>
  );
}
