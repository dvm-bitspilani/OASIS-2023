export default function CustomStyles() {
  return {
    control: (provided, state) => ({
      ...provided,
      minHeight: "2rem",
      height: "2rem",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: state.isFocused ? "2px solid white" : "2px solid white",
      "&:hover": {
        borderColor: "white",
      },
      cursor: "text",
      outline: "none",
      boxShadow: "none",
      borderRadius: "0px",
    }),
    indicatorSeparator: () => {},
    valueContainer: (provided) => ({
      ...provided,
      height: "1.8rem",
      paddingLeft: 0,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "1.8rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#eee",
      fontFamily: "NightmarePills",
      fontSize: "1.5rem",
      fontWeight: 700,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#fff" : "#fff",
      backgroundColor: state.isSelected ? "#7CC6DB" : "#222",
      fontFamily: "NightmarePills",
      fontSize: "1.5rem",
      fontWeight: 500,
      zIndex: 1002,
      "&:hover": {
        backgroundColor: "#7CC6DB",
        color: "#121212",
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 1002,
      backgroundColor: "#222222",
      paddingTop: "0px",
      paddingBottom: "0px",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::-webkit-scrollbar-thumb": {
        display: "none",
      },
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: "0",
      paddingBottom: "0",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::-webkit-scrollbar-thumb": {
        display: "none",
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "white",
      cursor: "pointer",
      padding: "5px",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: "NightmarePills",
      fontSize: "1.5rem",
      opacity: "1",
      color: "#FFFFFF",
    }),
    container: (provided) => ({
      ...provided,
      overflow: "visible",
    }),
    input: (provided) => ({
      ...provided,
      color: "#eee",
      fontFamily: "NightmarePills",
      fontSize: "1.5rem",
      fontWeight: 700,
      zIndex: 1002,
      margin: "0",
      paddingTop: "0",
      paddngBottom: "0",
      marginLeft: "2px",
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: "#fff",
      fontFamily: "NightmarePills",
      fontSize: "1.5rem",
      paddingLeft: "1rem",
      backgroundColor: "#222222",
      paddingTop: "0px",
      paddingBottom: "0px",
    }),
  };
}
