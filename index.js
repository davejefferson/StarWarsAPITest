let content;

const fetchApiData =  fetch("https://swapi.co/api/planets/1/")
.then((response) => {
    return response.json();
 })
    .then ((myJson) => {
        console.log(myJson);
        content = myJson; 
        changeInnerHtml();
       
        console.log(content.name)
    });

const changeInnerHtml = () => {
    console.log("HI")
    document.getElementById("apiInfo").innerHTML = content.name;
}


