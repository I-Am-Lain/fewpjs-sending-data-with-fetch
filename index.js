// Add your code here
function submitData(name, email){


    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    }

    // can also replace configObject with the declaration itself
    return fetch('http://localhost:3000/users', configObject)
    .then(resp => resp.json())
    .then(function(json) {
        const body = document.querySelector("body")

        body.innerHTML = json.id
    })
    .catch(error => {
        const body = document.querySelector("body")
        body.innerHTML = error
      })
}