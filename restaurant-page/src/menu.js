const menuPageLoad = () => {
    const content = document.querySelector("#contentMenu");
    content.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.textContent = "Menu at Chez Michel";
    let menu = document.createElement("div");
    menu.innerHTML = `<h4>Entrées / Starters</h4>
                        <p>Terrine  du Chef, petite compotée d'oignons  (Home-made terrine with onion chutney)
                        <br><i>or</i><br>
                        Bavarois d'asperges vertes sauce vinaigrette coriandre cumin façon mayonnaise, chips de jambon du pays (Asparagus mousse with a cumin and coriander mayonnaise and shards of local ham)</p>
                        <h4>Plats principaux / Main courses</h4>
                        <p>Suprême de Pintade Label Rouge du pays en Croûte Rouge, Gratin Dauphinois (Free range local guinea-fowl in pastry, with a potato gratin.)
                        <br><i>or</i><br>
                        Jarret de Boeuf à façon du pays, haricots verts pommes vapeur (Shank of beef local style, French beans and steamed potatoes.)</p>
                        <h4>Desserts</h4>
                        <p>Glace Melba vanille artisanale fruits de saison au romarin (Locally made vanilla ice-cream melba with seasonal fruit, flavoured with rosemary)
                        <br><i>or</i><br>
                        Crème Brulée à la confiture (caramel cream with jam)</p>`
    
    content.appendChild(h1);
    content.appendChild(menu);
};

export default menuPageLoad