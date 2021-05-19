import { configureStore } from '@reduxjs/toolkit'
import layerSelect from './slices/layerSelect'
import objects from './slices/objects'

export default configureStore({
    reducer: {
        objects: objects,
        layerSelect: layerSelect,
    }
})