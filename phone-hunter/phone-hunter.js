const loadPhones = async(searchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const phones = await res.json();
    diplayPhones(phones.data, dataLimit);
}

const showAll = document.getElementById('show-all');
console.log(showAll);
loadPhones();

const diplayPhones = (phones, dataLimit)=>{
    console.log(phones);
    let holder = document.getElementById('phone-holder');
   console.log(phones.length);
    if(dataLimit && phones.length> 10){
        phones = phones.slice(0,5);
        showAll.classList.remove('hidden');
        console.log(showAll);
    }

   

    else 
        {
            showAll.classList.add('hidden');

        }
    phones.forEach(phone => {
        const eachPhone = document.createElement('div'); 
        eachPhone.innerHTML = `
        <h1>${phone.brand}</h1>
        <h2 class = "text-3xl"> ${phone.phone_name}</h2>
        <img src='${phone.image}'>
        <p>
            Lorem ipsum, consectetur adipisicing elit. Neque non quia nesciunt impedit, fuga minima eum perferendis quos ducimus voluptates molestiae, omnis, ullam id hic. Consectetur repellendus doloribus at facere?
        </p> 
        `
        eachPhone.classList.add('p-12');
        holder.appendChild(eachPhone);
        
    })
    // spinner off 
    toggleSpinner(false);
}


const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function(){
    searchBtn.style.backgroundColor = 'tomato';
    const searchText = document.getElementById('search-field').value;
    loadPhones(searchText);
    toggleSpinner(true);
    processSearch(5);

    
});



const toggleSpinner = isLoading => {
    const loaderSection =  document.getElementById('spinner');
    
    if(isLoading){
        loaderSection.classList.remove('hidden');
    }

    else{
        loaderSection.classList.add('hidden');
    }
}

document.getElementById('show-all').addEventListener('click', function () {
    processSearch();
})

const processSearch = (dataLimit) => {
    const searchText = document.getElementById('search-field').value;
    loadPhones(searchText, dataLimit);
    toggleSpinner(true);
}