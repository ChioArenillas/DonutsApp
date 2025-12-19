
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllDonuts = async () => {
    const response = await fetch(`${API_URL}/donuts`)
    const donuts = await response.json()
    return donuts
}

export const getDonut = async (id) => {
    const response = await fetch(`${API_URL}/donuts/${donutId}`)
    const donuts = await response.json()
    return donuts
}

export const deleteDonut = async (id) =>{
    const response = await fetch (`${API_URL}/donuts/${donutId}`, {
        method: 'DELETE'
    })
    const donutDelete = await response.json()
    if(donutDelete.error) console.log(donutDelete.error)
        console.log('todo fue bien')
        return
}

export const updateDonut = async (id, bodyParam) => {
    const response = await fetch(`${API_URL}/donuts/${donutId}`,{
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyParam)
    })
    const donutUpdated = await response.json()
    if(donutUpdated.error) console.log(donutUpdated.error)
        console.log(donutUpdated)
        return

}

export const createDonut = async (bodyParam) => {
    const response = await fetch(`${API_URL}/donuts`,{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyParam)
    })
    const donutCreated = await response.json()
    if (donutCreated.error) console.log(donutCreated.error)
        console.log(donutCreated)
        return

}
