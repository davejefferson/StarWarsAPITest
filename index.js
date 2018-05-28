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
            
            content = myJson;
            console.log(content);            
            
            changeInnerHtml(planetInfoBuilder(content));
            
        });
    } else{
        throw error;
    }
}

const planetInfoBuilder = (content) => {
   
    stringToReturn = stringBuilder(content)   
    return stringToReturn;
}

const changeInnerHtml = (stringToDisplay) => {
    document.getElementById("apiInfo").innerHTML = stringToDisplay;
    // console.log(stringToDisplay);
}




const stringBuilder = (content) => {
    const keys = Object.keys(content);
    const values = Object.values(content);
    let planetInfo ="";

        for (let index = 0; index < keys.length; index++) {
            planetInfo = planetInfo + keys[index] + ": " + values[index] + "<br>"
        
    }
    return planetInfo;    
}

const button = document.getElementById("button").addEventListener("click", fetchApiData);