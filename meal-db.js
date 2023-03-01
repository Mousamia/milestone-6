const loadMeal = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(meals => displayMeal(meals.meals))
}

loadMeal('pasta');

const displayMeal = (meals) => {
    meals.forEach(meal =>{
        console.log(meal)
    })
}