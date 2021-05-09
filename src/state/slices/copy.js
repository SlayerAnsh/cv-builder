import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id:null,
    type:null
};

const copySlice = createSlice({
    name: 'copy',
    initialState: initialState,
    reducers: {
        setCopy:(state,action)=>{
            state.id = action.payload.id
            state.type = action.payload.type
            return state;
        }
    }
})


export const selectCopy = (state) => state.copy
export const { setCopy } = copySlice.actions
export default copySlice.reducer