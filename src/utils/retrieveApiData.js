
// This contains all the information related to making API data requests 

export const searchOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY_CMONG,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const retrieveApiData = async (url, options) => {
  
    const response = await fetch(url, options);

    // We are using fetch and in an asynchronous situation. So we use .json(), so that it will return a promise object that resolves to a JavaScript object

    const data = await response.json();

    return data;
}