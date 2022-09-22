import axios from 'axios'

const key = import.meta.env.VITE_API_ALPHA

async function Request(ativo) {
    // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ativo}.SA&outputsize=full&apikey=${key}`;
    // Get the JSON data from the API using axios
    const response = await axios.get(url);
    return response.data
}

export default Request
