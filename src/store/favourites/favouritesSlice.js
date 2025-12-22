import { createSlice } from "@reduxjs/toolkit";
import {
    fetchFavourites,
    addFavourite,
    deleteFavourite
} from './favouritesThunks'

const initialState = {
    list: [],
    loading: false,
    error: null
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFavourites.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchFavourites.fulfilled, (state, action) => {
            state.loading = false 
            state.list = action.payload || action.payload || []
        })
        .addCase(fetchFavourites.rejected, (action, state) => {
            state.loading = false
            state.list = action.error.message
        })
        .addCase(addFavourite.fulfilled, (state, action) =>{
            state.list.push(action.payload)
        })
        .addCase(deleteFavourite.fulfilled, (state, action) => {
            state.list = state.list.filter(
                fav => fav.donutId?._id !== action.payload
            )
        })

    }
})
export default favouritesSlice.reducer