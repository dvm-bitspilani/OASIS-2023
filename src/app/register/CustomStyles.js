export default function CustomStyles() {
  return {
    control: (provided, state) => ({
      ...provided,
      minHeight: "2rem",
      // height: "2rem",
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
      // height: "1.8rem",
      paddingLeft: 0,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      // height: "1.8rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#eee",
      fontFamily: "KoPub Batang",
      fontSize: "1.5rem",
      fontWeight: 700,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#fff" : "#fff",
      backgroundColor: state.isSelected ? "#7CC6DB" : "#222",
      fontFamily: "KoPub Batang",
      fontSize: "1.2rem",
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
      paddingTop: "1rem",
      paddingBottom: "1rem",
      backgroundColor: "#222222",
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
    placeholder: (provided , state) => ({
      ...provided,
      fontFamily: "KoPub Batang",
      fontSize: "1.2rem",
      opacity: "1",
      color: "rgba(255, 255, 255, 0.6)",
      opacity: state.isFocused ? "0" : "1",
    }),
    container: (provided) => ({
      ...provided,
      overflow: "visible",
    }),
    input: (provided) => ({
      ...provided,
      color: "#fff",
      fontFamily: "KoPub Batang",
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
      fontFamily: "KoPub Batang",
      fontSize: "1.2rem",
      paddingLeft: "1rem",
      backgroundColor: "#222222",
      paddingTop: "0px",
      paddingBottom: "0px",
    }),
    multiValue: (provided) => ({
      ...provided,
      color: '#fff',
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 700,
      backgroundColor: 'transparent',
      border: '1px solid #5db3f1',
      paddingLeft: '.25rem',
      alignItems: 'center',
      paddingRight: '3px',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#ffffff !important',
      backgroundColor: 'transparent',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#fff',
      padding: '0',
      paddingLeft: '0',
      marginRIght: '3px',
      width:'14px',
      height:'100%',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#5db3f1',
        color: '#000',
      },   
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: '#fff',
      cursor: 'pointer',
      '&:hover': {
        color: '#5db3f1'
      }
    }),
  };
}
