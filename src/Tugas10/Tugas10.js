import React from 'react';

import './Tugas10.css';
import Tabel from '../Components/Tabel';

class Tugas10 extends React.Component {
    render() {
        let dataHargaBuah = [
            { nama: "Semangka", harga: 10000, berat: 1000 },
            { nama: "Anggur", harga: 40000, berat: 500 },
            { nama: "Strawberry", harga: 30000, berat: 400 },
            { nama: "Jeruk", harga: 30000, berat: 1000 },
            { nama: "Mangga", harga: 30000, berat: 500 }
        ]
        return (
            <div className="HargaBuah">
                <header>
                    <h1 style={{ textAlign: "center" }}>Tabel Harga Buah</h1>
                </header>
                <div className="TabelBuah">
                    <Tabel dataBuah={dataHargaBuah}/>
                </div>
            </div >
        );
    }
}

export default Tugas10;