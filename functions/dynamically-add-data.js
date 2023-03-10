const displayData = (data) =>{
    console.log(data);

    // geeting the card div
    const cardDiv = document.getElementById('card-container');
    // dynamically adding and showing data
    data.forEach( (datam)=>{
       const card = document.createElement('div');
       card.classList.add('max-w-sm');
       card.innerHTML = `
       <a href="#">
       <img class="rounded-t-lg" src="/images/chatgpt_assistente 1-1.png" alt="" />
        </a>
   <div class="p-5">
       <a href="#">
           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
       </a>
       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Read more
           <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       </a>
   </div>`;
       
       console.log(datam.description);
       cardDiv.appendChild(card);
    //    card.style.backgroundColor ="tomato";
    })

}

data.forEach( (datam, id)=>{
    const card = document.createElement('div');
    card.classList.add('max-w-sm');
    card.innerHTML = `
    <a href="#">
    <img class="rounded-t-lg" src="${datam.image}" alt="" />
     </a>
<div class="p-5">
     
     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Features</h5>

    <ol class="mb-3 font-normal text-gray-700 dark:text-gray-400 list-decimal list-inside	">
    <li>${datam.features[0]}</li>
    <li>${datam.features[1]}</li>
    <li>${datam.features[2]}</li>
    </ol>

    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>`;
    
 //    console.log(datam.description);
    cardDiv.appendChild(card);
 //    card.style.backgroundColor ="tomato";
 })


//  hidin gadata
cardDiv.appendChild(card);
//    console.log(index);

//    hiding card 
if(index>5){
    card.classList.add('hidden')
}

// forEach function returns index of something
