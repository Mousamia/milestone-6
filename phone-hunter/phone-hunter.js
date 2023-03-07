const loadPhones = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const phones = await res.json();
    diplayPhones(phones.data);
}

loadPhones();

const diplayPhones = (phones)=>{
    console.log(phones);
    const holder = document.getElementById('phone-holder');
    phones.forEach(phone => {
        const eachPhone = document.createElement('div');
        
        eachPhone.innerHTML = `
        <h1>${phone.brand}</h1>
        <h2 class = "text-xl"> ${phone.phone_name}</h2>
        <img src='${phone.image}'>
        
        
        
        
        
        `
        eachPhone.classList.add('p-12');
    
        holder.appendChild(eachPhone);
        
    })
}