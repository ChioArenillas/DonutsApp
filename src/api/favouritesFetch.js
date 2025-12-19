const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const getFavourites = async () => {
  const res = await fetch(`${API_URL}/favourites`)
  return res.json()
}

export const addFavourite = async (donutId) => {
  const res = await fetch(`${API_URL}/favourites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ donutId })
  })
  return res.json()
}

export const deleteFavourite = async (donutId) => {
  const res = await fetch(`${API_URL}/favourites/${donutId}`, {
    method: 'DELETE'
  });
  return res.json(); 
}

export const isFavourite = async (donutId) => {
  const res = await fetch(`${API_URL}/favourites/${donutId}`)
  return res.json()
}
