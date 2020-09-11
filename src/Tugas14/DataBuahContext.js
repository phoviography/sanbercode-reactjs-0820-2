import React, { useState, useEffect, createContext } from "react";
import axios from "axios"

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

  useEffect( () => {
    if (dataBuah === null){
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        setDataBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
      })
    }
  }, [dataBuah])
  
  const handleDelete = (event) => {
    let idDataBuah = parseInt(event.target.value)

    let newdataBuah = dataBuah.filter(el => el.id !== idDataBuah)

    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
    .then(res => {
      console.log(res)
    })
          
    setDataBuah([...newdataBuah])
    
  }
  
  const handleEdit = (event) =>{
    let idDataBuah = parseInt(event.target.value)
    let dataBuah = dataBuah.find(x=> x.id === idDataBuah)
    setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight, id: idDataBuah})
  }

  return (
    <DataBuahContext.Provider value={[dataBuah, setDataBuah]}>
      {props.children}
    </DataBuahContext.Provider>
  );
};