"use client";

import statesData from "./states.json";
import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useLayoutEffect,
  useMemo,
} from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Select from "react-select";
import Creatable from "react-select/creatable";
import Radio from "../../components/radioButton.jsx";
import styles from "./page.module.css";
import indexStyles from "../page.module.css";
import skull from "../../../public/static/images/skull.svg";
import book from "../../../public/static/images/regBookOptimised.png";
import register from "../../../public/static/images/registerBtn.svg";
import regLogo from "../../../public/static/images/OasisLogo.png";
import cross from "../../../public/static/images/cross.svg";
import { useWindowSize } from "rooks";
import CustomStyles from "./CustomStyles";
import ErrorScreen from "./ErrorScreen";

import { gsap } from "gsap";

import { generateRandomStatesArray } from "../page";

const noCitiesMessage = () => "Select a State First";

const customStylesArray = [
  {
    ...CustomStyles(),
    menu: (provided) => ({
      ...provided,
      zIndex: 10000,
    }),
  },
  {
    ...CustomStyles(),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  },
  {
    ...CustomStyles(),
    menu: (provided) => ({
      ...provided,
      zIndex: 9998,
    }),
  },
  {
    ...CustomStyles(),
    menu: (provided) => ({
      ...provided,
      zIndex: 9997,
    }),
  },
  {
    ...CustomStyles(),
    menu: (provided) => ({
      ...provided,
      zIndex: 9996,
    }),
  },
];

async function getCollegeData() {
  const res = await fetch(
    "https://test.bits-oasis.org/2023/main/registrations/get_college"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch college");
  }
  return res.json();
}
async function getEventsData() {
  const res = await fetch(
    "https://test.bits-oasis.org/2023/main/registrations/events"
  );
  if (!res.ok) {
    throw new Error("Failed to get Events");
  }
  return res.json();
}

function filterObjectsByName(objectsArray, searchName) {
  return objectsArray.filter((object) => object.name === searchName);
}

const formReducerFn = (state, action) => {
  if (action.type === "nameChange") {
    return {
      ...state,
      name: action.value.target.value,
    };
  }
  if (action.type === "emailChange") {
    return {
      ...state,
      email_id: action.value.target.value,
    };
  }
  if (action.type === "phoneChange") {
    return {
      ...state,
      phone: action.value,
    };
  }
  if (action.type === "stateChange") {
    return {
      ...state,
      state: action.value.value,
    };
  }
  if (action.type === "cityChange") {
    return {
      ...state,
      city: action.value.value,
    };
  }
  if (action.type === "collegeChange") {
    return {
      ...state,
      college_id: action.value.value,
    };
  }
  if (action.type === "yearChange") {
    return {
      ...state,
      year: action.value.value,
    };
  }
  if (action.type === "genderChange") {
    return {
      ...state,
      gender: action.value.target.id,
    };
  }
  if (action.type === "choreoChange") {
    // const newValue = state.choreographer === "NO" ? "YES" : "NO";
    return {
      ...state,
      choreographer: action.value.target.value,
    };
  }
  if (action.type === "headChange") {
    // const newValue = state.head_of_society === "NO" ? "YES" : "NO";
    return {
      ...state,
      head_of_society: action.value.target.value,
    };
  }
  if (action.type === "eventChange") {
    const eventsArray = action.value;
    // console.log(eventsArray);
    const eventsName = eventsArray.map((item) => {
      return item.value;
    });
    return {
      ...state,
      events: eventsName,
    };
  }

  return state;
};

const formDataTemplate = {
  email_id: "",
  events: [],
  phone: "",
  year: "",
  choreographer: "NO",
  head_of_society: "NO",
  name: "",
  gender: "",
  city: "",
  state: "",
  college_id: "",
};
const year = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

export default function Page() {
  const { innerWidth, innerHeight } = useWindowSize();

  const numberOfRandom = 6;

  const randomGenerationTopLeftConfig = useMemo(
    () => [20, 0, 26, 90, 0, 67, 0, 0],
    []
  );
  const randomGenerationBottomLeftConfig = useMemo(
    () => [20, 0, 26, 90, 67, 0, 0, 0],
    []
  );

  const [isLoading, setIsLoading] = useState(true);
  const scope = useRef(null);

  const nameFieldRef = useRef(null);
  const emailFieldRef = useRef(null);
  const phoneFieldRef = useRef(null);
  const genderFieldRef = useRef(null);
  const collegeFieldRef = useRef(null);
  const stateFieldRef = useRef(null);
  const cityFieldRef = useRef(null);
  const yearFieldRef = useRef(null);
  const eventsFieldRef = useRef(null);

  const [randomStatesTopLeft1, setRandomStatesTopLeft1] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationTopLeftConfig)
  );

  const [randomStatesTopLeft2, setRandomStatesTopLeft2] = useState(
    generateRandomStatesArray(numberOfRandom, ...randomGenerationTopLeftConfig)
  );

  const [randomStatesBottomLeft1, setRandomStatesBottomLeft1] = useState(
    generateRandomStatesArray(
      numberOfRandom,
      ...randomGenerationBottomLeftConfig
    )
  );

  const [randomStatesBottomLeft2, setRandomStatesBottomLeft2] = useState(
    generateRandomStatesArray(
      numberOfRandom,
      ...randomGenerationBottomLeftConfig
    )
  );

  const randomSetImagesTopLeft1 = randomStatesTopLeft1.map((item, index) => {
    return (
      <Image
        key={index}
        id={`top_left_1_${index}`}
        className={indexStyles.leftSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  const randomSetImagesTopLeft2 = randomStatesTopLeft2.map((item, index) => {
    return (
      <Image
        key={index}
        id={`top_left_2_${index}`}
        className={indexStyles.leftSymbol}
        src={item.file}
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
    );
  });

  const randomSetImagesBottomLeft1 = randomStatesBottomLeft1.map(
    (item, index) => {
      return (
        <Image
          key={index}
          id={`bottom_left_1_${index}`}
          className={indexStyles.leftSymbol}
          src={item.file}
          alt=""
          width={80}
          height={80}
          draggable={false}
        />
      );
    }
  );

  const randomSetImagesBottomLeft2 = randomStatesBottomLeft2.map(
    (item, index) => {
      return (
        <Image
          key={index}
          id={`bottom_left_2_${index}`}
          className={indexStyles.leftSymbol}
          src={item.file}
          alt=""
          width={80}
          height={80}
          draggable={false}
        />
      );
    }
  );

  const [isDelayed, setIsDelayed] = useState(false);
  const [allAssetsLoaded, setAllAssetsLoaded] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // console.log('first')
      setIsLoading(true);
      // setShowLoader(true);
      const assets = [skull, book, register, cross];
      // console.log('second')
      const loadAssets = () => {
        const assetPromises = assets.map((asset) => {
          if (asset) {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = asset;
            });
          }
        });

        Promise.all(assetPromises)
          .then(() => {
            setAllAssetsLoaded(true);
            setTimeout(() => {
              setIsLoading(false);
              // setShowLoader(false);
            }, 10000);
            // console.log('All assets loaded successfully');
          })
          .catch((error) => {
            console.error("Error loading assets:", error);
            // setIsLoading(false);
            setAllAssetsLoaded(true);
            // setShowLoader(false);
            setTimeout(() => {
              setIsLoading(false);
              // setShowLoader(false);
            }, 2000);
          });
      };
      loadAssets();
      // }
    }
  }, []);

  useLayoutEffect(() => {
    // console.log("Animation 1");
    if (!isLoading && innerWidth > 1000) {
      let ctx = gsap.context(() => {
        randomStatesTopLeft1.forEach((item, key) => {
          gsap.set(`#top_left_1_${key}`, {
            right: `${item.startingX}%`,
            top: `${item.startingY}%`,
            opacity: 0,
            scale: 0.3,
          });

          const tl = gsap.timeline({
            onComplete: () => {
              if (key === randomStatesTopLeft1.length - 1) {
                // console.log("Animation 1 complete");
                setRandomStatesTopLeft1(
                  generateRandomStatesArray(
                    numberOfRandom,
                    ...randomGenerationTopLeftConfig
                  )
                );
              }
            },
          });

          tl.to(`#top_left_1_${key}`, {
            right: `${(item.endingX + item.startingX) / 2}%`,
            top: `${(item.endingY + item.startingY) / 2}%`,
            // scale: 0.8,
            // opacity: 1,
            delay: `${key * 1.4}`,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#top_left_1_${key}`,
            {
              opacity: 1,
              duration: 2.5,
              ease: "power2.in",
            },
            "-=2.5"
          );
          tl.to(`#top_left_1_${key}`, {
            right: `${item.endingX}%`,
            top: `${item.endingY}%`,
            opacity: 0,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#top_left_1_${key}`,
            {
              scale: 0.8,
              rotate: 80,
              duration: 5,
              ease: "none",
            },
            "-=5"
          );
        });
      }, scope); // <- IMPORTANT! Scopes selector text

      return () => {
        ctx.revert();
      }; // cleanup
    }
  }, [
    isLoading,
    // randomSetImagesTopLeft1,
    numberOfRandom,
    randomGenerationTopLeftConfig,
    randomStatesTopLeft1,
    innerWidth,
  ]);

  useLayoutEffect(() => {
    // console.log("Animation 2");
    if (!isLoading && innerWidth > 1000) {
      let ctx = gsap.context(() => {
        randomStatesTopLeft2.forEach((item, key) => {
          gsap.set(`#top_left_2_${key}`, {
            right: `${item.startingX}%`,
            top: `${item.startingY}%`,
            opacity: 0,
            scale: 0.3,
          });

          const tl = gsap.timeline({
            delay: isDelayed ? 0 : 7,
            onComplete: () => {
              if (key === randomStatesTopLeft2.length - 1) {
                // console.log("Animation 2 complete");
                setRandomStatesTopLeft2(
                  generateRandomStatesArray(
                    numberOfRandom,
                    ...randomGenerationTopLeftConfig
                  )
                );
              }
            },
          });

          tl.to(`#top_left_2_${key}`, {
            right: `${(item.endingX + item.startingX) / 2}%`,
            top: `${(item.endingY + item.startingY) / 2}%`,
            // scale: 0.8,
            // opacity: 1,
            delay: `${key * 1.4}`,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#top_left_2_${key}`,
            {
              opacity: 1,
              duration: 2.5,
              ease: "power2.in",
            },
            "-=2.5"
          );
          tl.to(`#top_left_2_${key}`, {
            right: `${item.endingX}%`,
            top: `${item.endingY}%`,
            opacity: 0,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#top_left_2_${key}`,
            {
              scale: 0.8,
              rotate: 80,
              duration: 5,
              ease: "none",
            },
            "-=5"
          );
        });
      }, scope); // <- IMPORTANT! Scopes selector text

      return () => {
        ctx.revert();
      }; // cleanup
    }
  }, [
    isLoading,
    // randomSetImagesTopLeft2,
    numberOfRandom,
    randomGenerationTopLeftConfig,
    randomStatesTopLeft2,
    isDelayed,
    innerWidth,
  ]);

  useLayoutEffect(() => {
    // console.log("Animation 3");
    if (!isLoading && innerWidth > 1000) {
      let ctx = gsap.context(() => {
        randomStatesBottomLeft1.forEach((item, key) => {
          gsap.set(`#bottom_left_1_${key}`, {
            right: `${item.startingX}%`,
            top: `${item.startingY}%`,
            opacity: 0,
            scale: 0.3,
          });

          const tl = gsap.timeline({
            onComplete: () => {
              if (key === randomStatesBottomLeft1.length - 1) {
                // console.log("Animation 3 complete");
                setRandomStatesBottomLeft1(
                  generateRandomStatesArray(
                    numberOfRandom,
                    ...randomGenerationBottomLeftConfig
                  )
                );
              }
            },
          });

          tl.to(`#bottom_left_1_${key}`, {
            right: `${(item.endingX + item.startingX) / 2}%`,
            top: `${(item.endingY + item.startingY) / 2}%`,
            // scale: 0.8,
            // opacity: 1,
            delay: `${key * 1.4}`,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#bottom_left_1_${key}`,
            {
              opacity: 1,
              duration: 2.5,
              ease: "power2.in",
            },
            "-=2.5"
          );
          tl.to(`#bottom_left_1_${key}`, {
            right: `${item.endingX}%`,
            top: `${item.endingY}%`,
            opacity: 0,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#bottom_left_1_${key}`,
            {
              scale: 0.8,
              rotate: 80,
              duration: 5,
              ease: "none",
            },
            "-=5"
          );
        });
      }, scope); // <- IMPORTANT! Scopes selector text

      return () => {
        ctx.revert();
      }; // cleanup
    }
  }, [
    isLoading,
    // randomSetImagesBottomLeft1,
    numberOfRandom,
    randomGenerationBottomLeftConfig,
    randomStatesBottomLeft1,
    innerWidth,
  ]);

  useLayoutEffect(() => {
    // console.log("Animation 4");
    if (!isLoading && innerWidth > 1000) {
      let ctx = gsap.context(() => {
        randomStatesBottomLeft2.forEach((item, key) => {
          gsap.set(`#bottom_left_2_${key}`, {
            right: `${item.startingX}%`,
            top: `${item.startingY}%`,
            opacity: 0,
            scale: 0.3,
          });

          const tl = gsap.timeline({
            delay: isDelayed ? 0 : 7,
            onComplete: () => {
              if (key === randomStatesBottomLeft2.length - 1) {
                // console.log("Animation 4 complete");
                setIsDelayed(true);
                setRandomStatesBottomLeft2(
                  generateRandomStatesArray(
                    numberOfRandom,
                    ...randomGenerationBottomLeftConfig
                  )
                );
              }
            },
          });

          tl.to(`#bottom_left_2_${key}`, {
            right: `${(item.endingX + item.startingX) / 2}%`,
            top: `${(item.endingY + item.startingY) / 2}%`,
            // scale: 0.8,
            // opacity: 1,
            delay: `${key * 1.4}`,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#bottom_left_2_${key}`,
            {
              opacity: 1,
              duration: 2.5,
              ease: "power2.in",
            },
            "-=2.5"
          );
          tl.to(`#bottom_left_2_${key}`, {
            right: `${item.endingX}%`,
            top: `${item.endingY}%`,
            opacity: 0,
            duration: 2.5,
            ease: "none",
          });
          tl.to(
            `#bottom_left_2_${key}`,
            {
              scale: 0.8,
              rotate: 80,
              duration: 5,
              ease: "none",
            },
            "-=5"
          );
        });
      }, scope); // <- IMPORTANT! Scopes selector text

      return () => {
        ctx.revert();
      }; // cleanup
    }
  }, [
    isLoading,
    numberOfRandom,
    randomGenerationBottomLeftConfig,
    randomStatesBottomLeft2,
    isDelayed,
    innerWidth,
  ]);

  const [formData, formDispatchFn] = useReducer(
    formReducerFn,
    formDataTemplate
  );
  const router = useRouter();
  const [loaderLoaded, setLoaderLoaded] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [colleges, setColleges] = useState([]);
  const [events, setEvents] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState({
    value: "",
    label: "",
  });
  const skullRef = useRef(null);
  const formContainerRef = useRef(null);
  const regLoaderRef = useRef(null);
  const [errorScreen, setErrorScreen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

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
        asset &&
        (asset.complete || asset.readyState === 4 || asset.tagName === "LINK")
      ) {
        handleAssetLoad();
      } else {
        if (asset) {
          asset.addEventListener("load", handleAssetLoad);
          asset.addEventListener("error", handleAssetLoad);
        }
      }
    });

    const cleanup = () => {
      assets.forEach((asset) => {
        if (asset) {
          asset.removeEventListener("load", handleAssetLoad);
          asset.removeEventListener("error", handleAssetLoad);
        }
      });
    };

    return cleanup;
  }, []);
  useEffect(() => {
    if (loaderLoaded) {
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
          asset &&
          (asset.complete || asset.readyState === 4 || asset.tagName === "LINK")
        ) {
          handleAssetLoad();
        } else {
          if (asset) {
            asset.addEventListener("load", handleAssetLoad);
            asset.addEventListener("error", handleAssetLoad);
          }
        }
      });

      const cleanup = () => {
        assets.forEach((asset) => {
          if (asset) {
            asset.removeEventListener("load", handleAssetLoad);
            asset.removeEventListener("error", handleAssetLoad);
          }
        });
      };

      return cleanup;
    }
  }, [loaderLoaded, colleges, events]);

  const handleRegisterations = async () => {
    const allErrors = document.querySelectorAll(`.${styles.errorMessage}`);
    allErrors.forEach((error) => {
      error.remove();
    });

    if (
      formData.name.trim() === "" ||
      formData.email_id.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.gender === "" ||
      formData.college_id === "" ||
      formData.state === "" ||
      formData.city === "" ||
      formData.year === ""
      // formData.choreographer === "" ||
      // formData.head_of_society === ""
    ) {
      // alert("Please fill in all the fields.");
      let firstErrorField = null;
      // let fieldName = null;
      // const firstErrorFieldIndex = Object.keys(formData).findIndex((key) => {
      //   return formData[key] === "";
      // });

      if (formData.name.trim() === "") {
        // nameFieldRef.current.focus();
        firstErrorField = nameFieldRef.current;
      } else if (formData.email_id.trim() === "") {
        // emailFieldRef.current.focus();
        firstErrorField = emailFieldRef.current;
      } else if (formData.phone.trim() === "") {
        // phoneFieldRef.current.focus();
        firstErrorField = phoneFieldRef.current;
      } else if (formData.gender === "") {
        // genderFieldRef.current.focus();
        firstErrorField = genderFieldRef.current;
      } else if (formData.college_id === "") {
        // collegeFieldRef.current.focus();
        firstErrorField = collegeFieldRef.current;
      } else if (formData.state === "") {
        // stateFieldRef.current.focus();
        firstErrorField = stateFieldRef.current;
      } else if (formData.city === "") {
        // cityFieldRef.current.focus();
        firstErrorField = cityFieldRef.current;
      } else if (formData.year === "") {
        // yearFieldRef.current.focus();
        firstErrorField = yearFieldRef.current;
      }

      // if (firstErrorField && !alert("Please fill in all the fields.")) {
      if (firstErrorField) {
        // console.log(firstErrorField);
        //scroll to first error field using scrollintoview
        firstErrorField.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });

        // Adding an error message div as the next sibling element of the first error field
        AddingErrorMessage(firstErrorField, "field is required.");

        setTimeout(() => {
          firstErrorField.focus();
        }, 700);
      }

      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      // alert("Phone number should be 10 digits.");
      const firstErrorField = phoneFieldRef.current;
      firstErrorField.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
      AddingErrorMessage(firstErrorField, "should be 10 digits.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email_id)) {
      // alert("Please provide a valid email address.");
      const firstErrorField = emailFieldRef.current;
      firstErrorField.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
      AddingErrorMessage(firstErrorField, "is invalid.");
      return;
    }

    function AddingErrorMessage(firstErrorField, errorMessage) {
      const errorMessageDiv = document.createElement("div");
      errorMessageDiv.classList.add(styles.errorMessage);
      errorMessageDiv.innerText = `*${firstErrorField.innerText} ${errorMessage}`;
      firstErrorField.parentNode.insertBefore(
        errorMessageDiv,
        firstErrorField.nextSibling.nextSibling
      );
    }

    async function uploadData(data) {
      if (data.choreographer === "NO") {
        data.choreographer = 0;
      }
      if (data.choreographer === "YES") {
        data.choreographer = 1;
      }
      if (data.head_of_society === "NO") {
        data.head_of_society = 0;
      }
      if (data.head_of_society === "YES") {
        data.head_of_society = 1;
      }
      // console.log(data);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch(
        "https://test.bits-oasis.org/2023/main/registrations/Register/",
        options
      );
      if (!res.ok) {
        res.json().then((data) => {
          setErrorMessage(data["message"]);
          setErrorScreen(true);
          setError(true);
        });
        throw new Error("Failed to register");
      }
      return res.json();
    }

    const response = await uploadData(formData);
    setErrorMessage(response["message"]);
    setError(false);
    setErrorScreen(true);
  };

  function handlePhoneChange(inp) {
    formDispatchFn({
      type: "phoneChange",
      value: inp.target.value.replace(/\D/g, ""),
    });
  }
  function handleNameChange(inp) {
    formDispatchFn({ type: "nameChange", value: inp });
  }
  function handleEmailChange(inp) {
    formDispatchFn({ type: "emailChange", value: inp });
  }
  function handleStateChange(inp) {
    setSelectedState(inp);
    formDispatchFn({ type: "stateChange", value: inp });
  }
  function handleCityChange(inp) {
    formDispatchFn({ type: "cityChange", value: inp });
  }
  function handleCollegeChange(inp) {
    formDispatchFn({ type: "collegeChange", value: inp });
  }
  function handleYearChange(inp) {
    formDispatchFn({ type: "yearChange", value: inp });
  }
  function handleGenderChange(inp) {
    formDispatchFn({ type: "genderChange", value: inp });
  }
  function handleChoreoChange(inp) {
    formDispatchFn({ type: "choreoChange", value: inp });
  }
  function handleHeadChange(inp) {
    formDispatchFn({ type: "headChange", value: inp });
  }
  function handleEventChange(inp) {
    formDispatchFn({ type: "eventChange", value: inp });
  }

  function handleScroll(inp) {
    // const maxScrollTopValue = formContainerRef.current.scrollTopMax;
    const maxScrollTopValue =
      formContainerRef.current.scrollHeight -
      formContainerRef.current.clientHeight;
    // const percentage = (formContainerRef.current.scrollTop / maxScrollTopValue )*100;
    const percentage =
      (formContainerRef.current.scrollTop / maxScrollTopValue) * 100;
    percentage > 100
      ? (skullRef.current.style.top = "100%")
      : (skullRef.current.style.top = `${percentage}%`);
    // console.log(percentage);
    // skullRef.current.style.top = `${percentage}%`;
    // skullElem.style.top = `${percentage}%`;
  }

  useEffect(() => {
    setFetchedData(statesData);
    getCollegeData()
      .then((data) => {
        setColleges(
          data["data"].map((item) => {
            return { value: item.id, label: item.name };
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
    getCollegeData()
      .then((data) => {
        setColleges(
          data["data"].map((item) => {
            return { value: item.id, label: item.name };
          })
        );
      })
      .catch((error) => {
        // console.log(error);
      });
    getEventsData()
      .then((data) => {
        setEvents(
          data["data"][0]["events"].map((item) => {
            return { value: item.id, label: item.name };
          })
        );
        // console.log(data["data"][0]["events"].map((item) => {
        //   return { value: item.id, label: item.name };
        // }))
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [statesData]);

  useEffect(() => {
    if (fetchedData) {
      const keys = Object.values(fetchedData);
      setStates(
        keys.map((key) => ({ value: key["name"], label: key["name"] }))
      );
      if (
        filterObjectsByName(fetchedData, selectedState["value"]) &&
        filterObjectsByName(fetchedData, selectedState["value"])[0]
      ) {
        setCities(
          filterObjectsByName(fetchedData, selectedState["value"])[0][
            "cities"
          ].map((key) => ({ value: key["name"], label: key["name"] }))
        );
      }
    }
  }, [fetchedData, selectedState]);

  useEffect(() => {
    formContainerRef.current.addEventListener("scroll", handleScroll);

    // Removing styling on radiobutton main label on click of other input tags
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach((input) => {
      input.addEventListener("focus", () => {
        const allLabels = document.querySelectorAll("label");
        allLabels.forEach((label) => {
          label.classList.remove(styles.labelFocus);
        });
      });
    });
    
    return () => {
      // formContainerRef.current.removeEventListener("scroll" , handleScroll)
      document.removeEventListener("scroll", handleScroll);
      const allInputs = document.querySelectorAll("input");
      allInputs.forEach((input) => {
        input.removeEventListener("focus", () => {
          const allLabels = document.querySelectorAll("label");
          allLabels.forEach((label) => {
            label.classList.remove(styles.labelFocus);
          });
        });
      });
    };
  }, []);

  const handleSkullMouseDown = (e) => {
    console.log("mousedown");
    e.preventDefault();

    document.addEventListener("mousemove", handleSkullDragMove);
    document.addEventListener("touchmove", handleSkullDragMove);

    document.addEventListener("mouseup", handleSkullDragEnd);
    document.addEventListener("touchend", handleSkullDragEnd);
  };

  const handleSkullDragMove = (e) => {
    // const skullElem = skullRef.current;
    const formContainerElem = formContainerRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );

    const maxScrollTopValue =
      formContainerElem.scrollHeight - formContainerElem.clientHeight;

    const clientY = e.clientY || e.touches[0].clientY;

    const percentage =
      ((clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;

    formContainerElem.scrollTop = (percentage / 100) * maxScrollTopValue;
  };

  const handleSkullDragEnd = (e) => {
    document.removeEventListener("mousemove", handleSkullDragMove);
    document.removeEventListener("mouseup", handleSkullDragEnd);
    document.removeEventListener("touchmove", handleSkullDragMove);
    document.removeEventListener("touchend", handleSkullDragEnd);
  };

  const handleTrackSnap = (e) => {
    const formContainerElem = formContainerRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollBarContainer}`
    );
    const percentage =
      ((e.clientY - scrollBarContainer.offsetTop) /
        scrollBarContainer.clientHeight) *
      100;
    const maxScrollTopValue =
      formContainerElem.scrollHeight - formContainerElem.clientHeight;

    // Smooth scroll to the percentage of the max scroll value
    formContainerElem.scrollTo({
      top: (percentage / 100) * maxScrollTopValue,
      behavior: "smooth",
    });
    // formContainerElem.scrollTop = (percentage / 100) * maxScrollTopValue;
  };

  const CloseModal = () => {
    setError(false);
    setErrorMessage("");
    setErrorScreen(false);
  };

  // console.log(formData)

  return (
    <>
      {errorScreen && (
        <ErrorScreen
          error={error}
          errorMessage={errorMessage}
          CloseModal={CloseModal}
        />
      )}
      {isLoading && (
        // <div className={styles.regLoader}>
        //   <Image
        //     ref={regLoaderRef}
        //     id="regLogoImage"
        //     src={regLogo}
        //     alt="OASIS"
        //     width="auto"
        //     height="2rem"
        //   />
        // </div>
        <div className={styles.loaderContainer}>
          {/* <MyVideoLoader/> */}
          <video
            src={require("../../../public/static/images/landingLoaderVideo.mp4")} // Update with the correct path
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            width="100%"
          />
        </div>
      )}
      <div className={styles.regPage} ref={scope}>
        <h2>REGISTRATIONS</h2>
        {innerWidth < 700 && (
          <Image
            onClick={() => router.back()}
            src={cross}
            alt="close"
            className={styles.close}
          />
        )}
        {innerWidth > 700 && (
          <div className={styles.backBtn} onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M31 3L3 31M3 3L31 31"
                stroke="#5DB3F1"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}
        <div className={styles.regForm}>
          <div className={styles.scrollBarContainer} onClick={handleTrackSnap}>
            <div className={styles.scrollBar}></div>
            <Image
              onMouseDown={handleSkullMouseDown}
              onTouchStart={handleSkullMouseDown}
              id="skull"
              src={skull}
              alt="skull"
              ref={skullRef}
              v
            />
          </div>
          <div
            className={styles.formContainer}
            id="formContainer"
            ref={formContainerRef}
          >
            <div className={styles.form} onScroll={handleScroll}>
              <label htmlFor="name" style={{ marginTop: 0 }} ref={nameFieldRef}>
                NAME
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                onChange={(inp) => handleNameChange(inp)}
                onFocus={(e) => {
                  e.target.placeholder = "";
                  e.target.previousSibling.classList.add(styles.labelFocus);
                }}
                onBlur={(e) => {
                  e.target.placeholder = "Enter your name";
                  e.target.previousSibling.classList.remove(styles.labelFocus);
                }}
              />

              <label htmlFor="email_id" ref={emailFieldRef}>
                EMAIL ID
              </label>
              <input
                type="text"
                placeholder="Enter your Email ID"
                id="email_id"
                onChange={(inp) => handleEmailChange(inp)}
                onFocus={(e) => {
                  e.target.placeholder = "";
                  e.target.previousSibling.classList.add(styles.labelFocus);
                }}
                onBlur={(e) => {
                  e.target.placeholder = "Enter your Email ID";
                  e.target.previousSibling.classList.remove(styles.labelFocus);
                }}
              />

              <label htmlFor="phone" ref={phoneFieldRef}>
                PHONE NUMBER
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                id="phone"
                maxLength="10"
                onChange={(inp) => handlePhoneChange(inp)}
                value={formData.phone}
                onFocus={(e) => {
                  e.target.placeholder = "";
                  e.target.previousSibling.classList.add(styles.labelFocus);
                }}
                onBlur={(e) => {
                  e.target.placeholder = "Enter your phone number";
                  e.target.previousSibling.classList.remove(styles.labelFocus);
                }}
              />

              <label ref={genderFieldRef}>GENDER</label>
              <div className={styles.radioBtns}>
                <Radio
                  id="M"
                  value="M"
                  name="gender"
                  text="Male"
                  onChange={handleGenderChange}
                />
                <Radio
                  id="F"
                  value="F"
                  name="gender"
                  text="Female"
                  onChange={handleGenderChange}
                />
                <Radio
                  id="O"
                  value="O"
                  name="gender"
                  text="Other"
                  onChange={handleGenderChange}
                />
              </div>

              <label ref={collegeFieldRef}>COLLEGE</label>
              <Select
                options={colleges}
                id="college"
                styles={customStylesArray[0]}
                placeholder="Choose your college"
                onChange={handleCollegeChange}
                onFocus={(e) => {
                  // e.target.placeholder = "";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.add(
                    styles.labelFocus
                  );
                }}
                onBlur={(e) => {
                  // e.target.placeholder = "Choose your college";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.remove(
                    styles.labelFocus
                  );
                }}
              />

              <label ref={stateFieldRef}>STATE</label>
              <Select
                options={states}
                id="state"
                styles={customStylesArray[1]}
                placeholder="Choose your state"
                onChange={handleStateChange}
                // onFocus={(e)=> e.target.placeholder = ""}
                // onBlur={(e)=> e.target.placeholder = "Choose your state"}
                onFocus={(e) => {
                  // e.target.placeholder = "";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.add(
                    styles.labelFocus
                  );
                }}
                onBlur={(e) => {
                  // e.target.placeholder = "Choose your state";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.remove(
                    styles.labelFocus
                  );
                }}
              />

              <label ref={cityFieldRef}>CITY</label>
              <Creatable
                options={cities}
                id="city"
                noOptionsMessage={noCitiesMessage}
                onChange={handleCityChange}
                placeholder="Choose your city"
                styles={customStylesArray[2]}
                // onFocus={(e)=> e.target.placeholder = ""}
                // onBlur={(e)=> e.target.placeholder = "Choose your city"}
                onFocus={(e) => {
                  // e.target.placeholder = "";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.add(
                    styles.labelFocus
                  );
                }}
                onBlur={(e) => {
                  // e.target.placeholder = "Choose your city";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.remove(
                    styles.labelFocus
                  );
                }}
              />

              <label ref={yearFieldRef}>YEAR OF STUDY</label>
              <Select
                options={year}
                id="year"
                styles={customStylesArray[3]}
                placeholder="Choose your year"
                onChange={handleYearChange}
                // onFocus={(e)=> e.target.placeholder = ""}
                // onBlur={(e)=> e.target.placeholder = "Choose your year of study"}
                onFocus={(e) => {
                  // e.target.placeholder = "";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.add(
                    styles.labelFocus
                  );
                }}
                onBlur={(e) => {
                  // e.target.placeholder = "Choose your year of study";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.remove(
                    styles.labelFocus
                  );
                }}
              />

              <label ref={eventsFieldRef}>EVENTS</label>
              <Select
                options={events}
                id="events"
                styles={customStylesArray[4]}
                placeholder="Select the events"
                onChange={handleEventChange}
                isMulti
                // onFocus={(e)=> e.target.placeholder = ""}
                // onBlur={(e)=> e.target.placeholder = "Select the events"}
                onFocus={(e) => {
                  // e.target.placeholder = "";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.add(
                    styles.labelFocus
                  );
                }}
                onBlur={(e) => {
                  // e.target.placeholder = "Select the events";
                  e.target.parentElement.parentElement.parentElement.parentElement.previousSibling.classList.remove(
                    styles.labelFocus
                  );
                }}
              />

              <label>ARE YOU A CHOREOGRAPHER / MENTOR?</label>
              <div className={styles.radioBtns} style={{ width: "60%" }}>
                <Radio
                  id="YES_Choreo"
                  value="YES"
                  name="choreographer"
                  text="YES"
                  onChange={handleChoreoChange}
                  // checked={formData.choreographer === "YES"? true : false}
                />
                <Radio
                  id="NO_Choreo"
                  value="NO"
                  name="choreographer"
                  text="NO"
                  onChange={handleChoreoChange}
                  checked={formData.choreographer === "NO" ? true : false}
                />
              </div>

              <label>ARE YOU THE HEAD OF A SOCIETY?</label>
              <div className={styles.radioBtns} style={{ width: "60%" }}>
                <Radio
                  id="YES_Society"
                  value="YES"
                  name="head_of_society"
                  text="YES"
                  onChange={handleHeadChange}
                  // checked={formData.head_of_society === "YES"? true : false}
                />

                <Radio
                  id="NO_Society"
                  value="NO"
                  name="head_of_society"
                  text="NO"
                  onChange={handleHeadChange}
                  checked={formData.head_of_society === "NO" ? true : false}
                />
              </div>
            </div>
            <div className={styles.regBtnContainer}>
              <Image
                src={register}
                onClick={handleRegisterations}
                alt=""
                width="1rem"
                height="1rem"
              />
            </div>
          </div>
        </div>
        {innerWidth > 1000 && (
          <motion.div
            className={styles.imgContainer}
            initial={{
              opacity: 0,
              transform: "scale(1) translateX(0) translateY(0) rotate(0deg)",
            }}
            animate={{
              opacity: isLoading ? 0 : 1,
              transform: isLoading
                ? "scale(1) translateX(0) translateY(0) rotate(0)"
                : "scaleX(.9) translateX(-8rem) translateY(5rem) rotate(-10deg)",
            }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <div className={styles.topLeftRandomDiv}>
              {randomSetImagesTopLeft1}
              {randomSetImagesTopLeft2}
            </div>

            <div className={styles.bottomLeftRandomDiv}>
              {randomSetImagesBottomLeft1}
              {randomSetImagesBottomLeft2}
            </div>

            <Image src={book} alt="" style={{ transform: "scaleX(.8)" }} />
          </motion.div>
        )}
      </div>
    </>
  );
}
