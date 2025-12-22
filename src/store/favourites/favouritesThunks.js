import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getFavourites,
    addFavourite as addFavAPI,
    deleteFavourite as deleteFavAPI
} from '@/api/favouritesFetch'

export const fetchFavourites = createAsyncThunk(
    'favourites/fetchAll',
    async () => {
        const res = await getFavourites()
        return res.data
    } 
)

export const addFavourite = createAsyncThunk(
    'favourites/add',
    async (donutId) => {
        const res = await addFavAPI(donutId)
        return res.data
    }
)
export const deleteFavourite = createAsyncThunk(
    'favourites/delete',
    async (donutId) => {
        const res = await deleteFavAPI(donutId)
        return donutId
    }
)