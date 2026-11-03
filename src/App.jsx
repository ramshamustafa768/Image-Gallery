// import { useSelector, useDispatch } from 'react-redux';
// // import { increment, decrement } from './Redux/CounterSlice.js'

// function App() {
//   // const count = useSelector((state) => state.counter.value);

//   // const dispatch = useDispatch();

//   return (
// //     <div style={{ textAlign: 'center', marginTop: '100px' }}>
// //       <h1>Redux Counter</h1>

// //       <h2>Count: {count}</h2>

// //       <button onClick={() => dispatch(increment())}>
// //         Increment +
// //       </button>

// //       <button
// //         onClick={() => dispatch(decrement())}
// //         style={{ marginLeft: '10px' }}
// //       >
// //         Decrement -
// //       </button>
// //     </div>
  
// )}

// export default App;


//  import {FetchApi} from './API/medaApi'

//  import FetchApi, { FetchGif } from './API/medaApi';
import SearchBar from './Componet/SearchBar';
import Tabs from './Componet/Tabs';
import ResultGrid from './Componet/ResultGrid';
import Collection from './Componet/Collection'
import { useState } from 'react';
// import { useEffect } from 'react';

const App = () => {

    const [showCollection, setShowCollection] = useState(false);


// async function getphoto() {

//    const data = await FetchApi();
//   console.log(data);
     
// }

//   async function getGif() {
//     const data = await FetchGif("nature");
//     console.log("GIF Data:", data);
//   }  

// useEffect(() => {

//     FetchApi();
//     FetchGif("nature");

//   }, []);className=" bg-black text-green  w-full

  return (
    <div className="gallery-app">
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>

      {/* <button className='text-white text-3xl ' onClick={() => setShowCollection(!showCollection)}>
        Collection
      </button> */}
      <div className="gallery-content">
       <button   id="collection-btn"

      className="text-white text-3xl"
      onClick={() => setShowCollection(!showCollection)}
    >
      {showCollection ? "← Back" : "Collection"}
    </button>

      {showCollection && <Collection />}

      {!showCollection && (
        <>
      {/* <button onClick={getphoto}>Get Photo</button>
      <button onClick={getGif}>API GIF</button> */}
    <SearchBar/>
    <Tabs />
   < ResultGrid/>
       </>
)}   
</div>
    </div>
  ) }

export default App





