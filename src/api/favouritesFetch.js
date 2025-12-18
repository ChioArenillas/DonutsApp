export const getFavourites = async () => {
  const res = await fetch('http://localhost:9000/favourites')
  return res.json()
}

export const addFavourite = async (donutId) => {
  const res = await fetch('http://localhost:9000/favourites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ donutId })
  })
  return res.json()
}

export const deleteFavourite = async (donutId) => {
  const res = await fetch(`http://localhost:9000/favourites/${donutId}`, {
    method: 'DELETE'
  });
  return res.json(); 
}

export const isFavourite = async (donutId) => {
  const res = await fetch(`http://localhost:9000/favourites/${donutId}`)
  return res.json()
}
