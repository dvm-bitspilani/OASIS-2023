"use client" 

import React, { useState, useEffect , useReducer , useRef} from "react";
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import Image from "next/image";
import Select from 'react-select';
import Creatable from "react-select/creatable";
import Radio from '../../components/radioButton.jsx';
import styles from "./page.module.css";
import skull from "../../../public/static/images/skull.svg";
import book from "../../../public/static/images/regBook.svg";
import register from "../../../public/static/images/registerBtn.svg";
import regLogo from "../../../public/static/images/OasisLogo.png";

const noCollegesMessages=()=>"Wait for Colleges to load";
const noStatesMessages=()=>"Wait for States to load";
const noCitiesMessage=()=>"Select a State First";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '2rem',
    height: '2rem',
    backgroundColor: 'transparent',
    border:'none',
    borderBottom: state.isFocused ? '2px solid white' : '2px solid white',
    '&:hover': {
      borderColor: 'white',
    },
    cursor: 'text',
    outline: 'none',
    boxShadow: 'none',
    borderRadius: '0px',
  }),
  indicatorSeparator: () => { },
  valueContainer: (provided) => ({
    ...provided,
    height: '1.8rem',
    paddingLeft: 0,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '1.8rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#eee',
    fontFamily: 'NightmarePills',
    fontSize: '1.5rem',
    fontWeight: 700,
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#fff' : '#fff',
    backgroundColor: state.isSelected ? '#7CC6DB' : '#222',
    fontFamily: 'NightmarePills',
    fontSize: '1.5rem',
    fontWeight: 500,
    zIndex: 1002,
    '&:hover': {
      backgroundColor: '#7CC6DB',
      color: '#121212'
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 1002,
    backgroundColor: '#222222',
    paddingTop:'0px',
    paddingBottom: '0px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
      display:'none',
    },
  }),
  menuList: (provided) =>({
    ...provided,
    paddingTop: '0',
    paddingBottom:'0',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
      display:'none',
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'white',
    cursor: 'pointer',
    padding: '5px',
  }),
  placeholder: (provided) => ({
    ...provided,
    fontFamily: 'NightmarePills',
    fontSize: '1.5rem',
    opacity:'1',
    color:'#FFFFFF'
  }),
  container: (provided) => ({
    ...provided,
    overflow: 'visible',
  }),
  input: (provided) => ({
    ...provided,
    color: '#eee',
    fontFamily: 'NightmarePills',
    fontSize: '1.5rem',
    fontWeight: 700,
    zIndex: 1002,
    margin: '0',
    paddingTop: '0',
    paddngBottom: '0',
    marginLeft: '2px',
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: '#000',
    fontFamily: 'NightmarePills',
    fontSize: '1.5rem',
    paddingLeft: '1rem',
  }),
};

const customStylesArray = [
  {
    ...customStyles,
    menu: provided => ({
      ...provided,
      zIndex: 10000,
    }),
  },
  {
    ...customStyles,
    menu: provided => ({
      ...provided,
      zIndex: 9999,
    }),
  },
  {
    ...customStyles,
    menu: provided => ({
      ...provided,
      zIndex: 9998, 
    }),
  },

  {
    ...customStyles,
    menu: provided => ({
      ...provided,
      zIndex: 9997, 
    }),
  },
  {
    ...customStyles,
    menu: provided => ({
      ...provided,
      zIndex: 9996, 
    }),
  },
];
async function getStateAndCityData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch State and City data");
  }

  return res.json();
}
async function getCollegeData(){
  const res = await fetch("https://test.bits-oasis.org/2023/main/registrations/get_college")
  if(!res.ok){
    throw new Error("Failed to fetch collyearege");
  }
  return res.json();
}
async function getEventsData (){
  const res = await fetch("https://test.bits-oasis.org/2023/main/registrations/events");
  if(!res.ok){
    throw new Error("Failed to get Events");
  }
  return res.json();
}

function filterObjectsByName(objectsArray, searchName) {
  return objectsArray.filter(object => object.name === searchName);
}

const formReducerFn = (state, action) => {
  if(action.type === 'nameChange'){
    return{
      ...state,
      name:action.value.target.value,
    }
  }
  if(action.type === 'emailChange'){
    return{
      ...state,
      email_id:action.value.target.value,
    }
  }
  if(action.type === 'phoneChange'){
    return{
      ...state,
      phone:action.value,
    }
  }
  if(action.type === 'stateChange'){
    return {
      ...state,
      state:action.value.value,
    } 
  }
  if(action.type === 'cityChange'){
    return{
      ...state,
      city:action.value.value,
    }
  }
  if(action.type === 'collegeChange'){
    return {
      ...state,
      college_id:action.value.value,
    }
  }
  if(action.type === 'yearChange'){
    return {
      ...state, 
      year: action.value.value,
    }
  }
  if(action.type === 'genderChange'){
    return{
      ...state,
      gender: action.value.target.id,
    }
  }
  if(action.type === 'choreoChange'){
    return{
      ...state,
      choreographer: action.value.target.value,
    }
  }
  if(action.type === 'headChange'){
    return{
      ...state,
      head_of_society: action.value.target.value,
    }
  }
  if(action.type === 'eventChange'){
    const eventsArray = action.value;
    console.log(eventsArray);
    const eventsName = eventsArray.map(item=>{
      return item.value;
    })
    return{
      ...state,
      events:eventsName,
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
  "head_of_society":"",
  "name":"",
  "gender":"",
  "city":"",
  "state":"",
  "college_id":"",
};
const year=[
  {value:"1",label:"1"},
  {value:"2",label:"2"},
  {value:"3",label:"3"},
  {value:"4",label:"4"},
  {value:"5",label:"5"},
]

export default function Page(props) {

  const [formData, formDispatchFn] = useReducer(formReducerFn , formDataTemplate)
  const router = useRouter();
  const [isLoading , setIsLoading]=useState(true);
  const [loaderLoaded,setLoaderLoaded] = useState(false);
  const [fetchedData , setFetchedData] = useState(null)
  const [colleges , setColleges] = useState([]);
  const [events , setEvents] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState({
    "value": "",
    "label": ""
  });

  useEffect(() => {
    const assets = document.querySelectorAll('#regLogoImage');
    let assetsLoaded = 0;

    const handleAssetLoad = () => {
      assetsLoaded++;
      if (assetsLoaded === assets.length) {
        setTimeout(() => {
          setLoaderLoaded(true);
        }, 1000);
      }
    };

    assets.forEach((asset) => {
      if (
        asset.complete ||
        asset.readyState === 4 ||
        asset.tagName === "LINK"
      ) {
        handleAssetLoad();
      } else {
        asset.addEventListener("load", handleAssetLoad);
        asset.addEventListener("error", handleAssetLoad);
      }
    });

    const cleanup = () => {
      assets.forEach((asset) => {
        asset.removeEventListener("load", handleAssetLoad);
        asset.removeEventListener("error", handleAssetLoad);
      });
    };

    return cleanup;

  }, [])
  useEffect(() => {
    if(loaderLoaded){
    const assets = document.querySelectorAll(
      "img",
      "font",
      "style",
      "iframe"
    );

    let assetsLoaded = 0;

    const handleAssetLoad = () => {
      assetsLoaded++;
      if (assetsLoaded === assets.length) {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    assets.forEach((asset) => {
      if (
        asset.complete ||
        asset.readyState === 4 ||
        asset.tagName === "LINK"
      ) {
        handleAssetLoad();
      } else {
        asset.addEventListener("load", handleAssetLoad);
        asset.addEventListener("error", handleAssetLoad);
      }
    });

    const cleanup = () => {
      assets.forEach((asset) => {
        asset.removeEventListener("load", handleAssetLoad);
        asset.removeEventListener("error", handleAssetLoad);
      });
    };

    return cleanup;
    }
  }, [loaderLoaded]);


  const handleRegisterations =async()=>{
    if (
      formData.name.trim() === "" ||
      formData.email_id.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.gender === "" ||
      formData.college_id === "" ||
      formData.state === "" ||
      formData.city === "" ||
      formData.year === "" ||
      formData.choreographer === "" ||
      formData.head_of_society === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Phone number should be 10 digits.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email_id)) {
      alert("Please provide a valid email address.");
      return;
    }

    async function uploadData (data){
      if(data.choreographer === "NO"){
        data.choreographer = 0;
      }
      if(data.choreographer === "YES"){
        data.choreographer = 1;
      }
      if(data.head_of_society === "NO"){
        data.head_of_society = 0;
      }
      if(data.head_of_society === "YES"){
        data.head_of_society = 1;
      }
      console.log(data);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch("https://test.bits-oasis.org/2023/main/registrations/Register/" , options);
      if(!res.ok){
        throw new Error("Failed to register");
      }
      return res.json();
    }

    const response = await uploadData(formData);
    console.log(response);
    alert(response["message"]);
  };

  function handleNameChange (inp){
    formDispatchFn({type:'nameChange', value:inp})
  }
  function handleEmailChange(inp){
    formDispatchFn({type:'emailChange', value:inp})
  }
  function handlePhoneChange(inp){
    formDispatchFn({type:'phoneChange',value:inp.target.value.replace(/\D/g, '')})
  }
  function handleStateChange (inp){
    setSelectedState(inp);
    formDispatchFn({type:'stateChange' , value: inp})
  }
  function handleCityChange (inp){
    formDispatchFn({type:'cityChange' , value:inp})
  }
  function handleCollegeChange(inp){
    formDispatchFn({type:'collegeChange',value:inp})
  }
  function handleYearChange (inp){
    formDispatchFn({type:'yearChange', value:inp})
  }
  function handleGenderChange(inp){
    formDispatchFn({type:'genderChange', value: inp})
  }
  function handleChoreoChange(inp){
    formDispatchFn({type:'choreoChange', value:inp})
  }
  function handleHeadChange(inp){
    formDispatchFn({type: 'headChange', value: inp})
  }
  function handleEventChange(inp){
    formDispatchFn({type: 'eventChange',value:inp}) 
  }


  function handleScroll (inp){
    const formContainer = document.querySelector(`.${styles.formContainer}`);
    const maxScrollTopValue = formContainer.scrollTopMax;
    const percentage = (formContainer.scrollTop / maxScrollTopValue )*100;
    const skull = document.querySelector(`#skull`);
    skull.style.top = `${percentage}%`;
  }


  useEffect(() => {
    getStateAndCityData()
      .then((data) => {
        setFetchedData(data);
      })
      .catch((error) => {
        console.error(error);
      });
    getCollegeData()
      .then((data)=> {
        setColleges(data["data"].map((item) => {
          return {value: item.id , label: item.name}
        }));
      })
      .catch((error)=> {
        console.log(error);
      });
    getEventsData()
      .then((data) => {
        setEvents(data["data"][0]["events"].map((item)=>{return {value: item.id , label:item.name}}));
      })
      .catch((error) => {
        console.log(error);
      })
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


  return (
    <>
      {isLoading && <div className={styles.regLoader}><Image id="regLogoImage" src={regLogo} alt="OASIS" width="auto" height="2rem" /></div>}
      <div className={styles.regPage}>
        <h2>REGISTRATIONS</h2>
        <button onClick={() => router.back()}>BACK TO HOME</button>
        <div className={styles.regForm}>
          <div className={styles.scrollBarContainer}>
            <div className={styles.scrollBar}></div> 
            <Image id="skull" src={skull} alt="" />
          </div>
          <div className={styles.formContainer} onScroll={handleScroll} >
            <div className={styles.form} onScroll={handleScroll}>
              <label htmlFor="name" style={{marginTop:0}}>NAME</label>
              <input type="text" placeholder="NAME" id="name" onChange={(inp)=>handleNameChange(inp)} />

              <label htmlFor="email_id">EMAIL-ID</label>
              <input type="text" placeholder="EMAIL-ID" id="email_id" onChange={(inp)=>handleEmailChange(inp)} />

              <label htmlFor="phone">PHONE NUMBER</label>
              <input type="text" placeholder="PHONE NUMBER" id="phone" maxLength="10" onChange={(inp)=>handlePhoneChange(inp)} value={formData.phone} />

              <label>GENDER</label>
              <div className={styles.radioBtns}>
                <Radio id="M" value="M" name="gender" text="Male" onChange={handleGenderChange} />
                <Radio id="F" value="F" name="gender" text="Female" onChange={handleGenderChange} />
                <Radio id="O" value="O" name="gender" text="Other" onChange={handleGenderChange} />
              </div>

              <label>COLLEGE</label>
              <Select options={colleges} id="college" noOptionsMessage={noCollegesMessages} styles={customStylesArray[0]} placeholder="COLLEGE" onChange={handleCollegeChange} />

              <label>STATE</label>
              <Select options={states} id="state" noOptionsMessage={noStatesMessages} styles={customStylesArray[1]} placeholder="STATE" onChange={handleStateChange} />

              <label>CITY</label>
              <Creatable options={cities} id="city" noOptionsMessage={noCitiesMessage} onChange={handleCityChange} placeholder="CITY" styles={customStylesArray[2]} />

              <label>YEAR OF STUDY</label>
              <Select options={year} id="year" styles={customStylesArray[3]} placeholder="YEAR" onChange={handleYearChange} />

              <label>EVENTS</label>
              <Select options={events} id="events" styles={customStylesArray[4]} placeholder="EVENTS" onChange={handleEventChange} isMulti />

              <label>ARE YOU A CHOREOGRAPHER/MENTOR?</label>
              <div className={styles.radioBtns}>
                <Radio id="YES_Choreo" value="YES" name="choreographer" text="YES" onChange={handleChoreoChange} />
                <Radio id="NO_Choreo" value="NO" name="choreographer" text="NO" onChange={handleChoreoChange} />
              </div>

              <label>ARE YOU THE HEAD OF A SOCIETY?</label>
              <div className={styles.radioBtns}>

                <Radio id="YES_Society" value="YES" name="head_of_society" text="YES" onChange={handleHeadChange} />

                <Radio id="NO_Society" value="NO" name="head_of_society" text="NO" onChange={handleHeadChange} />
              </div>
            </div>
          </div>
        </div>
          <div className={styles.imgContainer}>
            <motion.div 
              initial= {{opacity:0 , transform: "scale(1) translateX(0) translateY(0) rotate(0deg)"}}
              animate= {{opacity: isLoading? 0:1 ,transform:isLoading? "scale(1) translateX(0) translateY(0) rotate(0)" :"scale(1.1) translateX(-8rem) translateY(5rem) rotate(-10deg)"}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <Image src ={book} alt="" />
            </motion.div>   
          </div>
        <div className={styles.regBtnContainer}>
          <Image src={register} onClick={handleRegisterations} alt="" />
        </div>
      </div>
    </>
  );
}


