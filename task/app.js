const arr=["eli","emil","pervin","murad"]
let btn = document.querySelector('.btn')
let heading = document.querySelector('.heading')

let randomNumber = Math.floor(Math.random()*arr.length)

btn.addEventListener('click',()=>{
  
  console.log(arr[randomNumber]);
  })