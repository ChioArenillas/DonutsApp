
export const getAllDonuts = async () => {
    const response = await fetch("http://localhost:9000/donuts")
    const donuts = await response.json()
    return donuts
}

export const getDonut = async (id) => {
    const response = await fetch("http://localhost:9000/donuts/"+id)
    const donuts = await response.json()
    return donuts
}

export const deleteDonut = async (id) =>{
    const response = await fetch ('http://localhost:9000/donuts/'+id, {
        method: 'DELETE'
    })
    const donutDelete = await response.json()
    if(donutDelete.error) console.log(donutDelete.error)
        console.log('todo fue bien')
        return
}

export const updateDonut = async (id, bodyParam) => {
    const response = await fetch('http://localhost:9000/donuts/'+id,{
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: bodyParam
    })
    const donutUpdated = await response.json()
    if(donutUpdated.error) console.log(donutUpdated.error)
        console.log(donutUpdated)
        return

}

export const createDonut = async (bodyParam) => {
    const response = await fetch('http://localhost:9000/donuts/',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: bodyParam
    })
    const donutCreated = await response.json()
    if (donutCreated.error) console.log(donutCreated.error)
        console.log(donutCreated)
        return

}
