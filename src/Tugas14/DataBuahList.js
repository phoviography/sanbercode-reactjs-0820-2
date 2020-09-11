import React, { useContext } from "react"
import { DataBuahContext } from "./DataBuahContext"

import './DataBuahList.css'

const DataBuahList = () => {
    const [dataBuah] = useContext(DataBuahContext)

    return (
        // <ul>
        //     {dataBuah.map(el => {
        //         return <li>name: {el.name} {el.lengthOfTime} minutes</li>
        //     })}
        // </ul>
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
                                            <button class="button button1">Edit</button>
                                            {/* <button className="button button2" onClick={handleDelete} value={index}>Delete</button> */}
                                            {/* <button className="button button2" onClick={() => this.handleDelete(val)}>Delete</button> */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br />
                <br />
                {/* <form onSubmit={submitForm}>
                    <h2>Tambah Buah</h2>
                    <p>Nama</p>
                    <input required type="text" className="namaBuah" value={input.inputName} onChange={changeInputNama} /> <br/>
                    <p>Harga</p>
                    <input required type="text" className="namaBuah" value={input.inputName} onChange={changeInputHarga} /> <br/>
                    <p>Berat</p>
                    <input required type="text" className="namaBuah" value={input.inputName} onChange={changeInputBerat} /> <br/>
                    <button>Save</button>
                </form> */}
            </div>
        </div>
    )

}

export default DataBuahList