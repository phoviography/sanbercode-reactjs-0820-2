import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 style={{ textAlign: "center" }}>Form Pembelian Buah</h1>
      </header>
      <div>
        <table style={{textAlign:"left"}}>
          <tr>
            <th><label>Nama Pelanggan</label></th>
            <th><input placeholder="Nama pelanggan"></input></th>
          </tr>
          <tr>
            <th><label>Daftar item</label></th>
            <th>
              <input type="checkbox"></input>
              <label>Semangka</label><br/>
              <input type="checkbox"></input>
              <label>Jeruk</label><br/>
              <input type="checkbox"></input>
              <label>Nanas</label><br/>
              <input type="checkbox"></input>
              <label>Salak</label><br/>
              <input type="checkbox"></input>
              <label>Anggur</label><br/>
            </th>
          </tr>
          <tr>
            <td>
              <button style={{borderRadius: "20px"}}>Kirim</button>
            </td>
          </tr>
        </table>
      </div>

    </div>
  );
}

export default App;
