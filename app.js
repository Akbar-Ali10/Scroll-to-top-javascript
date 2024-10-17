


const scrollbtn = document.querySelector("#scroll-to-top");

window.addEventListener("scroll",() =>{
     if(window.pageYOffset > 300){
        scrollbtn.style.display = "block";
     }else{
        scrollbtn.style.display = "none";
     }
     
     scrollbtn.addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
     });
});