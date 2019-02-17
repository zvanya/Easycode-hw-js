class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
    
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

let users;

const listTab = document.getElementById("list-tab");
const tabPane = document.getElementById("pane-0");

const httpClient = new CustomHttp();

httpClient.get('https://jsonplaceholder.typicode.com/users', (responseText) => {
    
    users = JSON.parse(responseText);
    
    users.forEach((user) => {
        // let a = document.createElement("a");
        // a.innerText = user.name;
        // a.classList.add("list-group-item");
        // a.dataset["toggle"] = "list";
        // a.id = `list-${user.id}`;
        // a.href = "#";
        //
        // listTab.appendChild(a);
        
        listTab.insertAdjacentHTML("beforeend", `<a class="list-group-item" data-toggle="list" id="list-${user.id}" href="#">${user.name}</a>`);
    });
});

listTab.addEventListener("click", (e) => {
    let id = e.target.id.replace("list-","");
    
    const user = users.filter((user) => user.id === +id);
    
    if (!user.length) {
        tabPane.innerHTML = "";
    } else {
        tabPane.innerHTML = `
            <ul>
                <li>name: ${user[0].name}</li>
                <li>username: ${user[0].username}</li>
                <li>email: ${user[0].email}</li>
                <li>
                    <b>address</b>
                    <ul>
                        <li>street: ${user[0].address.street}</li>
                        <li>suite: ${user[0].address.suite}</li>
                        <li>city: ${user[0].address.city}</li>
                        <li>zipcode: ${user[0].address.zipcode}</li>
                        <li><b>geo</b></li>
                        <ul>
                            <li>lat: ${user[0].address.geo.lat}</li>
                            <li>lng: ${user[0].address.geo.lng}</li>
                        </ul>
                    </ul>
                </li>
                <li>phone: ${user[0].phone}</li>
                <li>website: ${user[0].website}</li>
                <li>
                    <b>company</b>
                    <ul>
                        <li>name: ${user[0].company.name}</li>
                        <li>catchPhrase: ${user[0].company.catchPhrase}</li>
                        <li>bs: ${user[0].company.bs}</li>
                    </ul>
                </li>
            </ul>
        `;
    }
});

