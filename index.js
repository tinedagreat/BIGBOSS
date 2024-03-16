const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=radiohead+nosurprises&type=track', {
    headers: {
    'Authorization': 'Bearer BQBWX7vE2PtuZPjxnEIeFNjOX1KrTkIg2rm2yS_gR-635ZmPGMMQ4EydzTmSzX-V1_q3mWVjTaVH3LANjv3nzuoCMW_9OD_5ZEZ5FeMt4o-NgLjjhADzk7Do3eMD_5yS8Qu78sv0l2769-NW1ubmyv4Zzgbr0CIk2EA4YaSNHKJ_ANeUq6fFFK2hPQXsTFIWq2xufDiWVseeYjm1fwA'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})