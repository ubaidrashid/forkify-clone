
let button = document.querySelector('#button');



button.addEventListener('click', () => {
    let input = document.querySelector('#input');
    let inputValue = input.value.trim();
    console.log(inputValue)
    async function ubaid() {
        let api = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${inputValue}&key=8d488d17-fae0-474f-a48f-b7eab7d8c578`);
        let apiJson = await api.json();
        console.log(apiJson.data.recipes)
        let recipesL = apiJson.data.recipes;
        console.log(recipesL.length)
        let container = document.querySelector('.container')
        let firstArea = document.querySelector('.first-area');
        firstArea.innerHTML = '';
        console.log(firstArea.innerHTML)
        for(let i =0; i <= recipesL.length ; i++ ){
            let li = document.createElement('div');
            li.classList = 'li'
            li.innerHTML = `<div class="im"><img src="${apiJson.data.recipes[i].image_url}" alt=""></div>
                    <div class="text">
                    <div class="p-title">${apiJson.data.recipes[i].title}</div>
                    <div class="p-desc">${apiJson.data.recipes[i].publisher}</div>
                    </div>`
                    firstArea.appendChild(li)
                    container.style.height = 'auto'
        }
        // let createlis = 
    }
    ubaid()
})

// function forli(){

// }