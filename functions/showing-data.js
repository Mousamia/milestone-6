// fetchig data

const loadData = async () =>{

    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await (res.json());
    displayData(data.data.tools);

}

loadData();

const displayData = (data) =>{
    console.log(data);

    // geeting the card div
    const cardDiv = document.getElementById('card-container');
    console.log(cardDiv);
    data.forEach( (datam)=>{
        console.log(datam);
    })

}


data.forEach((datam, index) => {
    const card = document.createElement('div');
    card.classList.add('max-w-sm');
    //    card.classList.add('min-h-md');
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

   <hr>

   <div class="flex justify-between items-center px-3 py-2 text-sm font-bold text-center text-purple-900 rounded-lg hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800"> 
   
   <div class="text-xl">
   <h3>${datam.name}</h3>
   <h3><i class="fa-regular fa-calendar-days text-purple-700 flex justify-start px-1 py-2"></i></h3>
   </div>

   <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    attempt
   </button>
   
   </div>

  
   
</div>`;

    cardDiv.appendChild(card);
    //    console.log(index);

    //    hiding card 
    if (index > 5) {
        card.classList.add('hidden')
    }

})
const modalBody = document.getElementById('defaultModal');
console.log(modalBody);