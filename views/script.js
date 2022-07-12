function updateView(result){
    const mainSection = document.getElementById('main');
    console.log(result);

    const list = result.Search;
    let html = ''
    for(let i=0;i<list.length;i++)
    {

        html+= `<h1>${list[i].Title}</h1>
                <img src="${list[i].Poster}">
                      <h3>${list[i].Year}</h3>
                      <h3>${list[i].Type}</h3>
                      <hr>`;
    }

    mainSection.innerHTML = html;
    
}


function getDataFromApi(inputData){
    const {title, page} = inputData;
    const URL = `http://localhost:3000/api/omdb/search?title=${title}&page=${page}`;
    
    fetch(URL).then(response => response.json())
    .then(result => updateView(result))
    .catch(err => console.log(err));

}

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", function(event){
    event.preventDefault();
    const title = searchForm.elements['title-input'].value.trim();
    const page = searchForm.elements['page-input'].value.trim();
    getDataFromApi({title: title,page:page });
    
    
});


