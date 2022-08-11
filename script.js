form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    inpValue = e.target.querySelector('input').value
    fetchData4mAPI(inpValue)
})

async function fetchData4mAPI(inpVal) {
    app_id = 'caed482c';
    app_key = 'a8ad96bbf1b696a4c5b59231268a4ad4';
    // baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}`;
    baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&to=8`;
    result = await fetch(baseURl);
    datas = await result.json()
    console.log(datas)
    generateHTML(datas.hits);
    // https://api.edamam.com/search?q=burger&app_id=caed482c&app_key=a8ad96bbf1b696a4c5b59231268a4ad4

}

function generateHTML(results) {
    showINHTML = '';
    results.map(result => {
        showINHTML += `
        <div class="col-3 my-3">
                <div class="card">
                    <div class="card-body">
                        <img src="${result.recipe.image}" alt="" class='img-fluid'>
                        <h6 class=' text-center my-2'> ${result.recipe.label} </h6>
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
                            <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
                        </div>
                    </div>
                </div>
            </div>
        `
        document.querySelector('#showRecipe').innerHTML = showINHTML;
    })
}
