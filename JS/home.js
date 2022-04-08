function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

setInterval(async function(){ 
    var elem = document.getElementById("welcome");
   elem.innerHTML="Bienvenue!";
   await delay(2);
   elem.innerHTML="Bun venit!";
   await delay(2);
   elem.innerHTML="Benvenuta!";
   await delay(2);
   elem.innerHTML="Herzlich willkommen!";
   await delay(2);
   elem.innerHTML="Welcome!";
   await delay(2);

}, 10000);


var quote=document.getElementById("quote");
quote.addEventListener("mouseover", async function(){
var size = quote.style.fontSize;
quote.style.fontSize="250%";
quote.addEventListener("mouseout", async function(){
    quote.style.fontSize=size;
    })
})

