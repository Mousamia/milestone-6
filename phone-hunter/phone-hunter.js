const loadPhones = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const phones = await res.json();
    diplayPhones(phones.data);
}

loadPhones();

const diplayPhones = (phones)=>{
    console.log(phones);
    let holder = document.getElementById('phone-holder');
    
    console.log(phones);
    phones = phones.slice(0,2);
    console.log(phones);
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
}


const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function(){
    searchBtn.style.backgroundColor = 'tomato';
    const searchText = document.getElementById('search-field').value;
    loadPhones(searchText);
    

    
})

