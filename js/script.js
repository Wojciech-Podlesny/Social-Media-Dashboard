const darkBtn = document.querySelector(".dark-button");


const toogleTheme =() => {
    darkBtn.classList.toggle("dark-theme");
    document.body.classList.toggle('dark-theme');
}

darkBtn.addEventListener('click',toogleTheme)








