import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tugas13 = () => {
    const [dataHargaBuah, setDataHargaBuah] = useState([])
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    useEffect(() => {
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataHargaBuah(res.data)
            })
            .catch(error => {
                setError(true)
                setErrorMessage(error.message)
            })
        axios.delete('http://backendexample.sanbercloud.com/api/fruits/:id')
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }, [])

    // const handleDelete = (taskToDelete) => {
    //     const newArray = setDataHargaBuah.filter(dataBuah => dataBuah !== taskToDelete);
    //     this.setState({ dataHargaBuah: newArray });
    // }

    // const handleDelete = (event) => {
    //     let index = event.target.value
    //     let newDataHargaBuah = dataHargaBuah
    //     let editedDataHargaBuah = newDataHargaBuah[indexOfForm]
    //     newDataHargaBuah.splice(index, 1)

    //     if (editedDataHargaBuah !== undefined) {
    //         var newIndex = newDataHargaBuah.findIndex((el) => el === editedDataHargaBuah)
    //         setDataHargaBuah([...newDataHargaBuah])
    //         setIndexOfForm(newIndex)

    //     } else {

    //         setDataHargaBuah([...newDataHargaBuah])
    //     }

    // }

    // const changeInputNama = (event) => {
    //     let value = event.target.value
    //     console.log(value);
    //     setInput({...input, inputNama:value})
    // }

    // const changeInputHarga = (event) => {
    //     let value = event.target.value
    //     console.log(value);
    //     setInput({...input, inputHarga:value})
    // }

    // const changeInputBerat = (event) => {
    //     let value = event.target.value
    //     console.log(value);
    //     setInput({...input, inputBerat:value})
    // }

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
                            error ? (
                                <div>{errorMessage}</div>
                            ) : (
                                    dataHargaBuah !== null && dataHargaBuah.map((val, index) => {
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
                                )
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
    );
}

export default Tugas13;