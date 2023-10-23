import CustomStyles from '@/app/register/CustomStyles'

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
]

export default customStylesArray
