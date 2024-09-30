// task1 ////Filtering an Array 
let arr1 =[]
let inp1=document.getElementById("Filtering_input")
let btn1=document.getElementById("Filtering_btn")
let div1=document.getElementById("Filtering_result")
btn1.addEventListener("click" ,function(){
    arr1.push(inp1.value)
    inp1.value=""
    var arr1_filter = arr1.filter((ele) =>
         ele % 2 === 0 )
    div1.innerHTML =`
      <h4> your array :</h4>
      <h5> [ ${arr1}]</h5>
      <h4> even numbers :</h4>
      <h5>[${arr1_filter}]</h5>
    `
})
// /////////////////////////////
//  task2 ////Maximum number in array
let arr2 = []
let inp2 = document.getElementById("Largest_input")
let btn2 = document.getElementById("Largest_btn")
let div2 = document.getElementById("Largest_result")
btn2.addEventListener('click', function(){
    arr2.push(inp2.value)
    inp2.value = ""
    let num = Math.max(...arr2)
    div2.innerHTML = `
    <h4> your array :</h4>
      <h5> [ ${arr2}]</h5>
      <h4> Largest number : </h4>
      <h5>{${num}}</h5>
    `
})
// /////////////////////////////////////////////
// Reverse a string
let inp3 = document.getElementById("reverse_input")
let btn3 = document.getElementById("reverse_btn")
let div3 = document.getElementById("reverse_result")
btn3.addEventListener('click', function(){
    var string = inp3.value
    div3.innerHTML = `
     <h4> string is :  </h4>
    <h5> ${string}</h5>
    <h4>Reverse string is :  </h4>
    <h5> ${string.split('').reverse('').join('')}</h5>
    `
    inp3.value=""
})
// /////////////////////////////////////
// dublicated
let arr4=[]
let inp4 = document.getElementById("dublicated_input")
let btn4 = document.getElementById("dublicated_btn")
let div4 = document.getElementById("dublicated_result")
 btn4.addEventListener('click', function () {
   let num = inp4.value;
   arr4.push (num)
   inp4.value=""
    let unique = []
    for (let i = 0; i < arr4.length; i++) {
        if (unique.indexOf(arr4[i]) === -1) {
         unique.push(arr4[i]);}
    }
   div4.innerHTML=`
   <h4> your array :</h4>
    <h5> [ ${arr4}]</h5>
     <h4> array without dublicated :</h4>
    <h5> [${unique}]</h5>
  `
 })
//  ///////////////////////////////////////////





