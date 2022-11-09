const burger = document.querySelector("nav svg");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {    
    if(links.classList.contains("links-active"))
    {
        links.classList.remove("links-active");    
        burger.classList.remove("line-active");    
    }
    else{
        links.classList.add("links-active");    
        burger.classList.add("line-active");    
    }    
});