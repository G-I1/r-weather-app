const fetchWeather = async (url,key,city,setDataState) =>{
    try {
        const response = await fetch(`${url}?key=${key}&q=${city}`);
        if(!response.ok) throw Error('failed to fetch weather api');
        const data = await response.json();
        setDataState(data);
    } catch (error) {
        console.log(error.message);
    }
}
export default fetchWeather;