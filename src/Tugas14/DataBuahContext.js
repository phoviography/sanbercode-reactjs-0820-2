import React, { useState, createContext } from "react";

export const DataBuahContext = createContext();

export const DataBuahProvider = props => {

  const [dataBuah, setDataBuah] =  useState([])
  const [input, setInput]  =  useState({name: "", email: "", password: "", phoneNumber: ""})

  return (
    <DataBuahContext.Provider value={[dataBuah, setDataBuah, input, setInput]}>
      {props.children}
    </DataBuahContext.Provider>
  );
};