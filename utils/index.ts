
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '7f779845a8mshd52f8c551b9da9fp17dc2ajsn6cb0644f2e2a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=coroll',
        { headers: headers })
        
    const result = await response.json()

    return result

}