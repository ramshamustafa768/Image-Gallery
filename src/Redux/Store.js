// import { configureStore } from "@reduxjs/toolkit";

// import CounterReduser from './CounterSlice'

// export const store = configureStore({
//     reducer:{
//         counter:CounterReduser
//     }
// });


import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from './Searchslice'
import collectionslice from './fetures/collectionslice'

export const  store = configureStore({
    reducer:{
        search:SearchSlice,
        collection:collectionslice

    }
})

