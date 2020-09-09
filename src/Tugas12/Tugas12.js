// import React from 'react';

// import './Tugas12.css';
// import Tabel from '../Components/Tabel';

// class Tugas12 extends React.Component {
//     render() {
//         let dataHargaBuah = [
//             { nama: "Semangka", harga: 10000, berat: 1000 },
//             { nama: "Anggur", harga: 40000, berat: 500 },
//             { nama: "Strawberry", harga: 30000, berat: 400 },
//             { nama: "Jeruk", harga: 30000, berat: 1000 },
//             { nama: "Mangga", harga: 30000, berat: 500 }
//         ]
//         return (
//             <div className="HargaBuah">
//                 <header>
//                     <h1 style={{ textAlign: "center" }}>Tabel Harga Buah</h1>
//                 </header>
//                 <div className="TabelBuah">
//                     <Tabel dataBuah={dataHargaBuah}/>
//                 </div>
//             </div >
//         );
//     }
// }

// export default Tugas12;

import React, { Component } from "react"
// import "./Lists.css"

class Tugas12 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // pesertaLomba: ['Budi', 'Susi', 'Lala', 'Agung'],
            dataHargaBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }
            ],
            inputName: ""
        }

        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(taskToDelete) {
        const newArray = this.state.dataHargaBuah.filter(dataBuah => dataBuah !== taskToDelete);
        this.setState({ dataHargaBuah: newArray });
    }

    render() {
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
                                this.state.dataHargaBuah.map((val, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{val.nama}</td>
                                            <td>{val.harga}</td>
                                            <td>{val.berat} gram</td>
                                            <td className="buttonAction">
                                                <button class="button button1">Edit</button>
                                                <button className="button button2" onClick={() => this.handleDelete(val)}>Delete</button>
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
}

export default Tugas12