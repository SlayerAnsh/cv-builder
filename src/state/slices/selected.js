import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id:null,
    type:null
};

const selectedSlice = createSlice({
    name: 'selected',
    initialState: initialState,
    reducers: {
        setSelected:(state,action)=>{
            state.id = action.payload.id
            state.type = action.payload.type
            return state;
        }
    }
})


export const selectSelected = (state) => state.selected
export const { setSelected } = selectedSlice.actions
export default selectedSlice.reducer