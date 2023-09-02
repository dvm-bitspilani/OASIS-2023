"use client" 

import statesData from "./states.json";
import React, { useState, useEffect , useReducer , useRef} from "react";
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import Image from "next/image";
import Select from 'react-select';
import Creatable from "react-select/creatable";
import Radio from '../../components/radioButton.jsx';
import styles from "./page.module.css";
import skull from "../../../public/static/images/skull.svg";
import book from "../../../public/static/images/regBookOptimised.png";
import register from "../../../public/static/images/registerBtn.svg";
import regLogo from "../../../public/static/images/OasisLogo.png";
import cross from "../../../public/static/images/cross.svg";
import { useWindowSize } from "rooks";
import CustomStyles from "./CustomStyles";


const noCitiesMessage=()=>"Select a State First";

const customStylesArray = [
  {
    ...CustomStyles(),
    menu: provided => ({
      ...provided,
      zIndex: 10000,
    }),
  },
  {
    ...CustomStyles(),
    menu: provided => ({
      ...provided,
      zIndex: 9999,
    }),
  },
  {
    ...CustomStyles(),
    menu: provided => ({
      ...provided,
      zIndex: 9998, 
    }),
  },
  {
    ...CustomStyles(),
    menu: provided => ({
      ...provided,
      zIndex: 9997, 
    }),
  },
  {
    ...CustomStyles(),
    menu: provided => ({
      ...provided,
      zIndex: 9996, 
    }),
  },
];

async function getCollegeData(){
  const res = await fetch("https://test.bits-oasis.org/2023/main/registrations/get_college")
  if(!res.ok){
    throw new Error("Failed to fetch college");
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

  const { innerWidth, innerHeight} = useWindowSize();

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
  const skullRef = useRef(null);
  const formContainerRef = useRef(null);
  const regLoaderRef = useRef(null);

  useEffect(() => {
    const assets = [regLoaderRef.current];
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
        if(colleges.length>0 && events.length>0){
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);}
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

  function handlePhoneChange(inp){
    formDispatchFn({type:'phoneChange',value:inp.target.value.replace(/\D/g, '')})
  }
  function handleNameChange (inp){
    formDispatchFn({type:'nameChange', value:inp})
  }
  function handleEmailChange(inp){
    formDispatchFn({type:'emailChange', value:inp})
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
    // const maxScrollTopValue = formContainerRef.current.scrollTopMax;
    const maxScrollTopValue = formContainerRef.current.scrollHeight - formContainerRef.current.clientHeight;
    // const percentage = (formContainerRef.current.scrollTop / maxScrollTopValue )*100;
    const percentage = (formContainerRef.current.scrollTop / maxScrollTopValue)*100;
    percentage > 100 ? skullRef.current.style.top = "100%" : skullRef.current.style.top = `${percentage}%`;
    // console.log(percentage);
    // skullRef.current.style.top = `${percentage}%`;
    // skullElem.style.top = `${percentage}%`;
  }


  useEffect(() => {
    setFetchedData(statesData);
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
  }, [statesData]);

  useEffect(() => {
    if (fetchedData) {
      const keys = Object.values(fetchedData);
      setStates(keys.map((key) => ({ value: key["name"], label: key["name"] })));
      if(filterObjectsByName(fetchedData, selectedState["value"])&& filterObjectsByName(fetchedData,selectedState["value"])[0]){
        setCities(filterObjectsByName(fetchedData,selectedState["value"])[0]["cities"].map((key)=>({value: key["name"], label: key["name"]})))
      }
    }
  }, [fetchedData , selectedState])

  useEffect(() => {
    formContainerRef.current.addEventListener("scroll" , handleScroll);

    return () => {
      formContainerRef.current.removeEventListener("scroll" , handleScroll)
    }
  }, [])


  return (
    <>
      {isLoading && <div className={styles.regLoader}><Image ref={regLoaderRef} id="regLogoImage" src={regLogo} alt="OASIS" width="auto" height="2rem" /></div>}
      <div className={styles.regPage}>
        <h2>REGISTRATIONS</h2>
        {innerWidth<700 && <Image onClick={()=>router.back()} src={cross} alt="close" className={styles.close} />}
        {innerWidth>700 &&
        <button onClick={() => router.back()}>BACK TO HOME</button>}
        <div className={styles.regForm}>
          <div className={styles.scrollBarContainer}>
            <div className={styles.scrollBar}></div> 
            <Image id="skull" src={skull} alt="skull" ref={skullRef} />
          </div>
          <div className={styles.formContainer} id="formContainer" ref={formContainerRef} >
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
              <Select options={colleges} id="college" styles={customStylesArray[0]} placeholder="COLLEGE" onChange={handleCollegeChange} />

              <label>STATE</label>
              <Select options={states} id="state" styles={customStylesArray[1]} placeholder="STATE" onChange={handleStateChange} />

              <label>CITY</label>
              <Creatable options={cities} id="city" noOptionsMessage={noCitiesMessage} onChange={handleCityChange} placeholder="CITY" styles={customStylesArray[2]} />

              <label>YEAR OF STUDY</label>
              <Select options={year} id="year" styles={customStylesArray[3]} placeholder="YEAR" onChange={handleYearChange} />

              <label>EVENTS</label>
              <Select options={events} id="events" styles={customStylesArray[4]} placeholder="EVENTS" onChange={handleEventChange} isMulti />

              <label>ARE YOU A CHOREOGRAPHER / MENTOR?</label>
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
          {innerWidth > 1000 && <div className={styles.imgContainer} >
            <motion.div 
              initial= {{opacity:0 , transform: "scale(1) translateX(0) translateY(0) rotate(0deg)"}}
              animate= {{opacity: isLoading? 0:1 ,transform:isLoading? "scale(1) translateX(0) translateY(0) rotate(0)" :"scaleX(.9) translateX(-8rem) translateY(5rem) rotate(-10deg)"}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <Image src ={book} alt="" onLoad={(e)=> console.log(e)} style={{transform: 'scaleX(.8)'}}/>
            </motion.div>   
          </div>}
        <div className={styles.regBtnContainer}>
          <Image src={register} onClick={handleRegisterations} alt="" />
        </div>
      </div>
    </>
  );
}


