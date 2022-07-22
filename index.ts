let input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) =>{
    const evento = event.currentTarget as HTMLInputElement;
    let texto: string = input.value;
    if(texto.length > 6){
        input.style.backgroundColor = "green";
    }
    else{
        input.style.backgroundColor = "red";
    }

    console.log(evento.value);
    
});