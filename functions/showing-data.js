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