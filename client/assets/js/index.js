const form = document.getElementById('form');
const input = form.children[0];
const data_node = document.getElementById('data');
const tokens_list = data_node.children[0].children[1];
const lemmas_list = data_node.children[1].children[1];

function createAndAppendListItems(strings_array, list_element){
    strings_array.map((string) => {
        const list_item = document.createElement('li');
        list_item.innerText = string;
        list_element.appendChild(list_item);
    });
};

function renderData(data){
    tokens_list.innerHTML = '';
    lemmas_list.innerHTML = '';
    createAndAppendListItems(data.tokens, tokens_list);
    createAndAppendListItems(data.lemmas, lemmas_list);
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
    const data = await response.json();
    renderData(data);
    input.value = '';
};

form.addEventListener('submit', handleSubmit);