import React from "react"
import {DataBuahProvider} from "./DataBuahContext"
import DataBuahList from "./DataBuahList"
import DataBuahForm from "./DataBuahForm"

const DataBuah = () =>{
  return(
    <DataBuahProvider>
      <DataBuahList/>
      <DataBuahForm/>
    </DataBuahProvider>
  )
}

export default DataBuah