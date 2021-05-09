import { configureStore } from '@reduxjs/toolkit'
import copyReducer from './slices/copy'
import objectsReducer from './slices/objects'
import selectedReducer from './slices/selected'

export default configureStore({
    reducer: {
        objects: objectsReducer,
        selected: selectedReducer,
        copy: copyReducer
    }
})