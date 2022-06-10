import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './slices/selectSlice'
import searchReducer from './slices/searchSlice'
import petListReducer from './slices/petListSlice'
import sortReducer from './slices/sortSlice'

export default configureStore({
    reducer: {
        select: selectReducer,
        search: searchReducer,
        petList: petListReducer,
        sort: sortReducer,
    },
})
