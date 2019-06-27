const toggler = document.getElementById('toggle-dropdown');
const toggleSearch = document.getElementById('toggle-search');

localStorage.setItem('dropdown', 'off');
localStorage.setItem('searchDropdown', 'off');

toggler.addEventListener('click', ()=>{
    const dropdown = localStorage.getItem('dropdown');
    const navDropdown = document.querySelector('.nav-dropdown');
    if(dropdown == 'off'){
        localStorage.setItem('dropdown', 'on');
        navDropdown.setAttribute('class', 'nav-dropdown dropdonw');
    } else{
        localStorage.setItem('dropdown', 'off');
        navDropdown.setAttribute('class', 'nav-dropdown');
    }
});

toggleSearch.addEventListener('click', ()=>{
    const dropdonw = localStorage.setItem('searchDropdown');
    const seachDropdown = document.querySelector('.search-dropdown');
    if(dropdonw == 'off'){
        localStorage.setItem('searchDropdown', 'on');
        searchDropdown.setAttribute('class', 'search-dropdown searchDropdownHeight');
    } else{
        localStorage.setItem('searchDropdown', 'off');
        searchDropdown.setAttribute('class','search-dropdown');
    }
});