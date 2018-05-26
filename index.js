


let orignalNumber;

const planetNumber = () => {
    return Math.floor(Math.random() * 61 + 1);
   
}



const fetchApiData = (event) => {
    if (event){
    fetch("https://swapi.co/api/planets/"+ planetNumber())
    .then((response) => {
        return response.json();
    })
        .then ((myJson) => {
            console.log(myJson);
            content = myJson; 
            changeInnerHtml();
        
            console.log(content.name)
        });
    } else{}
}






const changeInnerHtml = () => {
    console.log("HI")
    document.getElementById("apiInfo").innerHTML = content.name;
}

const button = document.getElementById("button").addEventListener("click", fetchApiData) ;
