const getData = async (endpoint) => {
  const url = `https://f1-takes-vegas.herokuapp.com/api/v1/${endpoint}`

  try {
    const response = await fetch(url)
    const data = await response.json()
     return data
  } catch(error) {
    window.alert(error)
  }
}

export default getData;
