
export default class Session {
    
    static send(url) {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((json) => {
            console.log('json =====>', json)
        }).catch(error => {
            console.log('error =====>', error)
        })
    }

}