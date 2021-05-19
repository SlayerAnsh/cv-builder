import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selected: {
        id: null,
        type: null
    },
    copy: {
        id: null,
        type: null
    }
}

const layerSelectSlice = createSlice({
    name: 'layerSelect',
    initialState: initialState,
    reducers: {
        setSelected: (state, action) => {
            state.selected.id = action.payload.id
            state.selected.type = action.payload.type
            return state
        },
        resetSelected: (state, action) => {
            state.selected = initialState.selected
            return state
        },
        setCopy: (state, action) => {
            state.copy.id = action.payload.id
            state.copy.type = action.payload.type
            return state
        },
        resetCopy: (state, action) => {
            state.copy = initialState.copy
            return state
        },
    }
})


export const selectLayerSelect = (state) => state.layerSelect
export const { setSelected, resetSelected, setCopy, resetCopy } = layerSelectSlice.actions
export default layerSelectSlice.reducer