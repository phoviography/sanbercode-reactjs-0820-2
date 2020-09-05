import React from 'react';
import './Tabel.css'

const Tabel = ({ dataBuah }) => {
    return (
        <div className="TabelHargaBuah">
            <table style={{ width: "100%" }}>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                </tr>
                {dataBuah.map(el => {
                    return (
                        <tr>
                            <td>{el.nama}</td>
                            <td>{el.harga}</td>
                            <td>{el.berat / 1000} Kg</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Tabel;