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

// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }

//   class ShowAge extends React.Component {
//     render() {
//       return <h1>your age is {this.props.age}</h1>;
//     }
//   }

//   var person = [
//     {name: "sarah", age: 25},
//     {name: "michael", age: 30},
//     {name: "john", age: 33}
//   ]

//   class Tugas10 extends React.Component {
//     render() {
//       return (
//         <>
//           {person.map(el=> {
//             return (
//               <div style={{border: "1px solid #000", padding: "20px"}}>
//                 <Welcome name={el.name}/> 
//                 <ShowAge age={el.age}/> 
//               </div>
//             )
//           })}
//         </>
//       )
//     }
//   }
export default Tugas10;