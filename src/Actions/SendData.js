import fetch from 'isomorphic-fetch';


export function SendData(data) {
    return fetch('http://localhost:3001/API/contact', {
        method: 'POST',
        body: JSON.stringify({
            email: data.email,
            message: data.message

        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {

            alert("Message sent");
            window.location.reload(false);

        }).catch(function (err) {
            console.log(err)
        });


}

