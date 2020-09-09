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
                    <th>Action</th>
                </tr>
                {dataBuah.map(el => {
                    return (
                        <tr>
                            <td>{el.nama}</td>
                            <td>{el.harga}</td>
                            <td>{el.berat / 1000} Kg</td>
                            <td className="buttonAction">
                                <button class="button button1">Edit</button>
                                <button class="button button2">Delete</button>
                            </td>
                        </tr>
                    )
                })}

            </table>
        </div>
    )
}

export default Tabel;