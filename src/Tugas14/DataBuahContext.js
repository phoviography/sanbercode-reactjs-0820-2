import React, { useState, createContext } from "react";


export const DataBuahContext = createContext();

export const DataBuahProvider = props => {
  // const [dataBuah, setDataBuah] = useState([
  //   { name: "Harry Potter", lengthOfTime: 120},
  //   { name: "Sherlock Holmes", lengthOfTime: 125},
  //   { name: "Avengers", lengthOfTime: 130},
  //   { name: "Spiderman", lengthOfTime: 124},
  // ]);

  const [dataBuah, setDataBuah] =  useState(null)
  const [input, setInput]  =  useState({name: "", price: "", weight: 0, id: null})

  return (
    <DataBuahContext.Provider value={[dataBuah, setDataBuah, input, setInput]}>
      {props.children}
    </DataBuahContext.Provider>
  );
};