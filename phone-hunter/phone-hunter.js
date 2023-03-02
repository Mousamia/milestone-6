const loadPhones = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const phones = await res.json();
    diplayPhones(phones.data);
}

loadPhones();

const diplayPhones = (phones)=>{
    console.log(phones);
    phones.forEach(phone => {
        console.log(phone);
    })
}