const form = document.getElementById('form');
const input = form.children[0];
const data_node = document.getElementById('data');
const tokens_list = data_node.children[0].children[1];
const lemmas_list = data_node.children[1].children[1];

// const table_node = document.getElementById('table');
// const heading_row = table_node.children[0];


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

// CREATES AND APPENDS ELEMENTS TO A GIVEN NODE WITH GIVEN INNERTEXT VALUES
// function appendTableRows(data_object, table_to_append, element_type){
//     // strings_array.map((string, index) => {
//     //     const new_row = document.createElement('tr');
//     //     const item_to_add = document.createElement(element_type);
//     //     item_to_add.innerText = string;
//     //     new_row.appendChild(item_to_add)
//     //     table_to_append.appendChild(new_row);
//     // });
//     data_object.tokens.map((string, index) => {
//         const new_row = document.createElement('tr');
//         const token = document.createElement('td');
//         const lemma = document.createElement('td');
//         token.innerText = string;
//         lemma.innerText = data_object.lemmas[index];
//         new_row.append(token, lemma)
//         table_to_append.append(new_row)
//     })
// };

// function renderTable(data){
//     table_node.innerHTML = '';
//     appendTableRows(data, table_node, 'td')
// }


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
    // renderTable(data);
    input.value = '';
};

form.addEventListener('submit', handleSubmit);