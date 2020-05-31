let btn = document.querySelector("button");
let tbody = document.querySelector("tbody");
btn.addEventListener("click", function () {
    let xml = new XMLHttpRequest();
    xml.open("GET", "/users");
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            displayUsers(JSON.parse(xml.responseText));
        }
    }
    xml.send();
})

function displayUsers(users) {
    let text = "";
    for (let i = 0; i < users.length; i++) {
        text += `
        <tr>
            <td>${users[i].name}</td>
            <td>${users[i].age}</td>
        </tr>        
        `
    }
    tbody.innerHTML = text;
}