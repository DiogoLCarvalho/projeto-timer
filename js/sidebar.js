// Menu de opções
let listElements = document.querySelector('.list__options');
let optionsOfList = document.querySelector('.list__show');
let sidebar = document.querySelector('.sidebar');

// horas - minutos - segundos
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');



function openOptions() {
    listElements.classList.toggle('arrow--active');
    optionsOfList.classList.toggle('list__show--active');

    // O esquema é mexer com o height, pq? Pq Assim vc pode aplicar uma transitions mais legal, com o display isto não é possivel.
    let height = 0;
    let menu = listElements.nextElementSibling; //Pegue o filho de listElements = a div onde está a pergunta - onde vc clica



    console.log(menu); //veja
    console.log('Altura do  .list__show ' + menu.clientHeight); //veja - o que está setado no css Padrão começa com 0
    console.log('Altura dos li somados ' + menu.scrollHeight); //veja - soma da altura maxima do list__show - que é a ul - é tipo a max-content do css


    if (menu.clientHeight == '0') { //pega o valor do height .list__show. 0 é o valor padrão. Ou seja se ele esta apagado

        height = menu.scrollHeight; //é o valor de todas as li dentro de .list__show. 
        // coloque a na variavel a altura dos li's
    }

    menu.style.height = `${height}px`;
    // Coloque o valor no list__show

    // 1° Passo: Você precisa ter uma a variavel " let height = 0;" pq quando vc clicar de novo ele reseta
    // 2° Passo: pegue o filho da div q esta a pergunta "Quanto tempo falta para acabar o..." - list__options
    // 3° Passo: Verifique se o o height da ul esta 0 - se estiver significa q ele esta escondido
    // 4° Passo: Se ele estiver escondido, coloque o valor total dos elementos dentro da variavel
    // 5° Passo: Mude o height
    // Depois q eu clico e as opções aparecem q o height esta 230 então ele n cai no if. Mas ao eu clicar de novo ele reseta o height  let height = 0; mas ele só volta padrão depois do if
}

// Ao clicar na div
listElements.addEventListener('click', () => {
    
    if (sidebar.getAttribute('class') === 'sidebar') {
        sidebar.classList.toggle('active');   
    }

    if (sidebar.getAttribute('class') === 'sidebar active') {
        openOptions();
    }
})




// Abrir e fechar Sidebar - Burger
let btn = document.querySelector('#btn');


btn.addEventListener('click', function () {
    sidebar.classList.toggle('active');

    if (sidebar.getAttribute('class') === 'sidebar' && optionsOfList.getAttribute('class') != 'list__show') {
        openOptions();
    }
})
