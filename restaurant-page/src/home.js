const homePageLoad = () => {

    const content = document.querySelector("#contentHome");
    content.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.textContent = "Chez Michel";
    let img = document.createElement("IMG");
    img.src = "../images/restaurant.jpg";
    img.alt = "Interior of restaurant";
    let p = document.createElement("p");
    p.textContent = `We spoil you with modern french gastronomy with a classic twist. 
    Try our a la carte restaurant for brunch, lunch and dinner. 
    We also pamper your guests with delicious food for meetings and parties.`
    
    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p);
}

export default homePageLoad 