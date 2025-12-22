import { createAsyncThunk } from "@reduxjs/toolkit";
import{
    getAllDonuts, 
    getDonut, 
    createDonut as createDonutAPI,
    updateDonut as updateDonutAPI,
    deleteDonut as deleteDonutAPI
} from '@/api/donutFetch'

export const fetchDonuts = createAsyncThunk(
    'donuts/fetchAll',
    async () => {
        const res = await getAllDonuts()
        return res.data
    }
)

export const fetchDonutById = createAsyncThunk(
    'donuts/fetchById',
    async(donutId) => await getDonut(donutId)
)

export const createDonut = createAsyncThunk(
    'donuts/create',
    async(donut) => {
        const res = await createDonutAPI(donut)
        return res.data
    }
)

export const updateDonut = createAsyncThunk(
    'donuts/update',
    async({donutId, donut}) => await updateDonutAPI(donutId, donut)
)

export const deleteDonut = createAsyncThunk(
    'donuts/delete',
    async(donutId) => { 
        await deleteDonutAPI(donutId) 
        return donutId
    }
)


