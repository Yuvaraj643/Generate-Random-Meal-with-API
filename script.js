const get_meal_1=document.querySelector('#get_meal')
const meal_container =document.querySelector('#meal')



get_meal_1.addEventListener('click',() => {
    const url="https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(url)
        .then(response => response.json())
        .then(response => {
        createMeal(response.meals[0]);
        })
});


const createMeal = (meal) => {
    const ingredients = [];
        for(let i=1; i<=20; i++) {
      if(meal[`strIngredient${i}`]) {
        ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
      } else {

        break;
      }
    }



const div_section =`
    <div class="main">
        <div class="second">
            <img src="${meal.strMealThumb}" alt="image">
            <p><b>Category</b>: ${meal.strCategory}</p>
            <p><b>Area</b>: ${meal.strArea}</p>
            ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(',')}</p>` : ''}
            <h4>Ingredients:</h4>
            <ul>   
          ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
          </div>
          <div class="information">
            <h4>${meal.strMeal}</h4>
            <p>${meal.strInstructions}</p>
          </div>
    </div>
    ${meal.strYoutube ? `
    <div class="youtube">
      <h2>Video Recipe</h2>
      <div class="videoWrapper">
        <iframe width="800" height="400"
        src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
        </iframe>
      </div>
    </div>` : ''}
  `;

    meal_container.innerHTML =div_section;

}