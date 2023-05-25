const form = document.getElementById('form');
const input = form.children[0];

function createAndAppendListItems(strings_array, list_element){
    strings_array.map((string) => {
        const list_item = document.createElement('li');
        list_item.innerText = string;
        list_element.appendChild(list_item);
    });
};

function renderData(data){
    console.log(data)
};

async function fetchAPIResponse(string){
    const response = await fetch('/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(string)
    });
    return response;
};

async function handleSubmit(e){
    e.preventDefault();
    const response = await fetchAPIResponse(input.value);
    if(response.status !== 200) return false;
    const data = await response.json();
    renderData(data);
    input.value = '';
};

form.addEventListener('submit', handleSubmit);