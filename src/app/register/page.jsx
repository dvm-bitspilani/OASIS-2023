"use client" 

import React, { useState, useEffect , useReducer} from "react";
import Select from 'react-select';
import styles from "./page.module.css";



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
  if(action.type === 'stateChange'){

    return {
      ...state,
      state:action.value.value,
    } 
  }
  
  return state;
};

const formDataTemplate = {
  "email_id":"",
  "events":[],
  "phone":"",
  "year":"",
  "choreographer":"",
  "head_of_study":"",
  "name":"",
  "gender":"",
  "city":"",
  "state":"",
  "college_id":"",
};


export default function Page(props) {

  const [formData, formDispatchFn] = useReducer(formReducerFn , formDataTemplate)

  const [fetchedData , setFetchedData] = useState(null)
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState({
    "value": "",
    "label": ""
  });

  function handleStateChange (inp){
    setSelectedState(inp);
    formDispatchFn({type:'stateChange' , value: inp})
  }


  useEffect(() => {
    getStateAndCityData()
      .then((data) => {
        setFetchedData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (fetchedData) {
      const keys = Object.values(fetchedData[101]["states"]);
      setStates(keys.map((key) => ({ value: key["name"], label: key["name"] })));
      if(filterObjectsByName(fetchedData[101]["states"], selectedState["value"])&& filterObjectsByName(fetchedData[101]["states"],selectedState["value"])[0]){
        setCities(filterObjectsByName(fetchedData[101]["states"],selectedState["value"])[0]["cities"].map((key)=>({value: key["name"], label: key["name"]})))
      }
    }
  }, [fetchedData , selectedState])  

  console.log(states);
  console.log(cities);
  console.log(formData);
  console.log(selectedState);

  return (
    <>
      <div className={styles.regPage}>

      </div>
    </>
  );
}
