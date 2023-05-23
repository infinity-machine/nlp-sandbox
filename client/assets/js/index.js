const form = document.getElementById('form');
const input = form.children[0];
const data_node = document.getElementById('data');
const tokens_list = data_node.children[0].children[1];
const lemmas_list = data_node.children[1].children[1];

function createAndAppendLi(text, list){
    const list_item = document.createElement('li');
    list_item.innerText = text;
    list.appendChild(list_item);
};

function renderData(data){
    tokens_list.innerHTML = '';
    data.tokens.map((token) => {
        createAndAppendLi(token, tokens_list);
    });

    data.lemmas.map((lemma) => {
        createAndAppendLi(lemma, lemmas_list);
    })
};

async function getSpacyResponse(string){
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
    const response = await getSpacyResponse(input.value);
    const data = await response.json();
    renderData(data);
    input.value = '';
};

form.addEventListener('submit', handleSubmit);