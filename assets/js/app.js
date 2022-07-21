let selection = document.querySelector('.selection');
let selection_icon = document.querySelector('#selection-icon');
let selection_bar = document.querySelector('#selection-bar');
let selected = document.querySelector('.selection span');

selection.addEventListener('click', function () {
    ToggleSelectionBar();
})

function ToggleSelectionBar() {
    if (selection_icon.style.transform === 'rotate(-180deg)') {
        selection_icon.style.transform = 'rotate(0deg)';
        selection_bar.classList.add('none');
    }
    else {
        selection_icon.style.transform = 'rotate(-180deg)';
        selection_bar.classList.remove('none');
    }
}

function Change(e) {
    selected.innerText = e.target.innerText;
    let langs = e.target.parentElement.querySelectorAll('li');
    for (let lang of langs) {
        if (lang.classList.contains('none')) {
            lang.classList.remove('none');
        }
    }
    e.target.classList.add('none');
    ToggleSelectionBar();
}

let search_btn = document.querySelector('.search');
let search_area = document.querySelector('#search-area');
let search_close = document.querySelector('#btn-close');

search_btn.addEventListener('click', function(){
    search_area.classList.toggle('none');
    search_btn.classList.toggle('blue');
})

search_close.addEventListener('click', function(){
    search_area.classList.add('none');
    search_btn.classList.remove('blue');
})

let sidebar_btn = document.querySelector('#sidebar-btn');
let sidebar = document.querySelector('#sidebar-menu');


sidebar_btn.addEventListener('click', function(){
    if (sidebar_btn.classList.contains('fa-bars')) {
        sidebar_btn.classList.remove('fa-bars');
        sidebar_btn.classList.add('fa-x');
        sidebar.classList.remove('none');
    }
    else {
        sidebar_btn.classList.remove('fa-x');
        sidebar_btn.classList.add('fa-bars');
        sidebar.classList.add('none');
    }
})