
const contactPageLoad = () => {
    const content = document.querySelector("#contentContact");
    content.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.textContent = "Get in touch with us";

    let form = document.createElement("form");
    form.innerHTML = `<label for="name">Your name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="email">Your email:</label><br>
    <input type="email" id="email" name="email"><br>
    <label for="comment">Your questions or comments:</label><br>
    <input type="text" id="comment" name="comment"><br>
    <button type="submit" class="button">Submit</button>`

    content.appendChild(h1);
    content.appendChild(form);
}

export default contactPageLoad