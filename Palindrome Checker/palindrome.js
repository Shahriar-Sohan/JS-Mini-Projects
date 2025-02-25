const button = document.getElementById("button")
button.addEventListener("click", ()=> check() )

const input = document.getElementById("input")


function check(){
    const value = input.value
    let cache = ""
 for(let i = value.length - 1; i >= 0; i--){
    cache += value[i]
}

if( value === cache){
    alert("palindrome")
}else{
    alert("not palindrome")
}
}


