import axios from 'axios'

const key = import.meta.env.VITE_API_ALPHA
// const key = process.env.API_ALPHA

async function Request(ativo) {
    console.log("Está é a chave" + key)
    // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    // var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ativo}.SA&apikey=${key}`;
    var url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${ativo}.SA&outputsize=full&apikey=${key}`;

    const response = await axios.get(url).then((response) => {
			console.log(response.data)});
    return response
}

export default Request
// url: url,
// json: true,
// headers: {'User-Agent': 'request'}
// }, (err, res, data) => {
//     if (err) {
//         console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//         console.log('Status:', res.statusCode);
//     } else {
//         // data is successfully parsed as a JSON object:
//         console.log(data);
//     }