import { createSlice } from '@reduxjs/toolkit'
import { OBJECT_PROTOTYPE, PROPERTIES } from '../../components/Constants';

const initialState = {
    1: {
        ...OBJECT_PROTOTYPE.DOCUMENT,
        [PROPERTIES.POS]: 1,
        [PROPERTIES.PARENT]: null
    },
    2: {
        ...OBJECT_PROTOTYPE.PAGE,
        [PROPERTIES.POS]: 1,
        [PROPERTIES.PARENT]: '1'
    },
    3: {
        ...OBJECT_PROTOTYPE.VIEW,
        [PROPERTIES.POS]: 1,
        [PROPERTIES.PARENT]: '2'
    }
}

const objectsSlice = createSlice({
    name: 'objects',
    initialState: initialState,
    reducers: {
        addObject: (state, action) => {
            let id = uuid(state);
            let parent = action.payload[PROPERTIES.PARENT]
            let pos = action.payload[PROPERTIES.POS]
            for (const key in state) {
                if (state[key][PROPERTIES.PARENT] === parent && state[key][PROPERTIES.POS] >= pos) {
                    state[key][PROPERTIES.POS] = state[key][PROPERTIES.POS] + 1;
                }
            }
            state[id] = action.payload
            return state;
        },

        removeObject: (state, action) => {
            const currentId = action.payload.id
            let parent = state[currentId][PROPERTIES.PARENT]
            let pos = state[currentId][PROPERTIES.POS]
            for (const key in state) {
                if (state[key][PROPERTIES.PARENT] === parent && state[key][PROPERTIES.POS] > pos) {
                    state[key][PROPERTIES.POS] = state[key][PROPERTIES.POS] - 1;
                }
            }

            let list = recurRemoveList(currentId, state)

            for (const key of list) {
                if (state[key]) {
                    delete state[key]
                }
            }

            return state;
        },

        updateObject: (state, action) => {
            let id = action.payload.id;
            let key = action.payload.key;
            state[id][key] = action.payload.data;
            return state;
        },

        addMultipleObjects: (state, action) => {
            let newObjects = {
                ...action.payload.data
            }
            let rootId = action.payload.rootId
            for (const key in state) {
                if (state[key][PROPERTIES.PARENT] === newObjects[rootId][PROPERTIES.PARENT]
                    && state[key][PROPERTIES.POS] >= newObjects[rootId][PROPERTIES.POS]) {
                    state[key][PROPERTIES.POS] = state[key][PROPERTIES.POS] + 1;
                }
            }
            for (const key in newObjects) {
                state[key] = {
                    ...newObjects[key]
                }
            }
            return state;
        },

        addStyle: (state, action) => {
            let id = action.payload.id;
            let style = action.payload.data
            state[id][PROPERTIES.STYLE] = style;
            return state
        }
    }
})

// Return key which is maximum among all the present keys
export const uuid = (state) => {
    let maxKey = 1;
    for (const objectKey in state) {
        if (parseInt(objectKey) > maxKey) {
            maxKey = parseInt(objectKey);
        }
    }
    return (maxKey + 1).toString()
}

// Creates List of all the keys to be removed.
// Contains current key with all child nodes
export const recurRemoveList = (id, state) => {
    let list = [id]
    for (const key in state) {
        if (state[key][PROPERTIES.PARENT] === id) {
            list = [...list, ...recurRemoveList(key, state)]
        }
    }
    return list
}

export const selectObjects = (state) => state.objects
export const { addObject, removeObject, updateObject, addMultipleObjects, addStyle } = objectsSlice.actions
export default objectsSlice.reducer