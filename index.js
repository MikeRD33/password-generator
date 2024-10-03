const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById('password1')
let password2El = document.getElementById('password2')
let buttonPasswordEl = document.getElementById('button-password')

function randomPassword(){
  let randomIndex = ''
  for(let i =0; i < 15; i++){
    randomIndex+=characters[Math.floor(Math.random()*91)]
  }
  return randomIndex
}

buttonPasswordEl.addEventListener("click", function(){
  password1El.textContent = randomPassword()
  password2El.textContent = randomPassword()
})


password1El.addEventListener("click", function(){
  let copyText = password1El.innerText;
  navigator.clipboard.writeText(copyText).then(function(){
    alert('Text copied to clipboard!');
  }).catch(function(error){
    alert('failed to copy text:' + error);
  })
})

password2El.addEventListener("click", function(){
  let copyText = password2El.innerText;
  navigator.clipboard.writeText(copyText).then(function(){
    alert('Text copied to clipboard!');
  }).catch(function(error){
    alert('failed to copy text:' + error);
  })
})



console.log(password1 + " " + password2);
