import React, { useContext, useEffect } from "react"
import axios from "axios"

import { DataBuahContext } from "./DataBuahContext"

import './DataBuahList.css'

const DataBuahList = () => {
    const [dataBuah, setDataBuah, input, setInput] = useContext(DataBuahContext)

    useEffect( () => {
        if (dataBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDataBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
          })
        }
      }, [dataBuah, setDataBuah])

      
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
        let dataBuahEdit = dataBuah.find(x=> x.id === idDataBuah)
        setInput({name: dataBuahEdit.name, price: dataBuahEdit.price, weight: dataBuahEdit.weight, id: idDataBuah})
  }

    return (
        <div className="HargaBuah">
            <div className="TabelHargaBuah">
                <h1>Tabel Harga Buah</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataBuah !== null && dataBuah.map((val, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{val.name}</td>
                                        <td>{val.price}</td>
                                        <td>{val.weight} gram</td>
                                        <td className="buttonAction">
                                            <button className="button button1" onClick={handleEdit} value={val.id}>Edit</button>
                                            <button className="button button2" onClick={handleDelete} value={val.id}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default DataBuahList