
let count = 0;

document.getElementById('btn').addEventListener('click', function (event) {

   

    count++;

    const input = document.getElementById('input-field').value;

    // console.log(input)



    const contenContainer = document.getElementById('content-container');

    const trData = document.createElement('tr');


    trData.innerHTML = `
    
    <td>${count}</td>

    <td>${input}</td>

    <td>
           <button  class="btn-delete  btn btn-secondary mb-3">Delete</button>
           <button  class="btn-done  btn btn-primary">Done</button>
    </td>

    `;

    contenContainer.appendChild(trData);

    document.getElementById('input-field').value = '';


    // delete btn

    let bnt1 = document.getElementsByClassName('btn-delete')

    for (let btn of bnt1) {

        btn.addEventListener('click', function (event) {

            event.target.parentNode.parentNode.style.display = 'none';

            // console.log(event.target.parentNode.parentNode.parentNode);

        })

    }


     // btn done

     let bnt2 = document.getElementsByClassName('btn-done')

     for (let btn of bnt2) {
 
         btn.addEventListener('click', function (event) {
 
             event.target.parentNode.parentNode.style.textDecoration = 'line-through';
 
             // console.log(event.target.parentNode.parentNode.parentNode);
 
         })
 
     }


   

})


 // clear all button

 let clearButton=document.getElementById('clearButton').addEventListener('click',function(event){

  event.target.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML='';

//  console.log(event.target.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML)
 count=0;

  

 })

 








