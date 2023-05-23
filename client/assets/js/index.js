const form = document.getElementById('form');
const input = form.children[0]

async function getSpacyResponse(string){
    const response = await fetch('/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(string)
    });
    console.log(response)
}

function handleSubmit(e){
    e.preventDefault();
    getSpacyResponse(input.value)
    input.value = '';

}

form.addEventListener('submit', handleSubmit)

