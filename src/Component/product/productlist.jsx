// // import React from 'react'
// import {useState, useEffect} from 'react'
// import "./productlist.css"

// const productlist = () => {
//     const[data, setData]=useState ([]);
//     const[ product, setProduct ] = useState ([]);


//     useEffect(()=>{
//      fetch("https://fakestoreapi.com/products")
//      .then((responese) => responese.json())
//      .then((result)=>setData(result))
//      .catch((error) => console.log("Error", error));
//     }, []);

//   return (
//     <>
//     <div className="Product-contenor">
//       {data.slice().map((item) => (
//         <div className="Product-card" key={item.id}>
//           <img src={item.image} alt={item.titel}  className='Product-img'/>
//           <h3>{item.title.slice(0,30)}</h3>
//           <p>Price:${item.price}</p>
//           <button className='Product-Button'>Add to Card</button>
//         </div>
//       ))}
//     </div>
//     </>
    
//   )
// }

// export default productlist
