
import { createSlice } from "@reduxjs/toolkit"


const collectionslice = createSlice({

name:"collection",
initialState:[],


reducers:{
    addcollection:(state,action) =>{
        const exist = state.find(

            (img) => img.id == action.payload.id
        );

if (!exist) {
    state.push(action.payload)
    
}
    },
    removecollection:(state,action) =>{
return state.filter(
    (img) =>  img.id !== action.payload
)

    }

}


})

 export const {addcollection,removecollection} =collectionslice.actions
export default collectionslice.reducer
