// 1. set variables 
// 2. check to see if any localstorage exists
// 3. push items to local storage array
// 4. clear all local storage and refresh page

var items = []; // declare empty array for items
var savedItems = []; // declare empty array for saveditems


function viewStorage() {
    var savedItems = JSON.parse(localStorage.getItem('item'));
    document.getElementById('list').innerHTML = ""; // clearing html
    for (var key in savedItems) {
        document.getElementById('list').innerHTML += '<li>' + savedItems[key] + '</li>'; 
        }
}

viewStorage(); // view storage function to grab all items in local storage

function addStorage() {
    var task = document.getElementById('task').value; // getting value from text field
    if (task) {
        items.push(task); // push task item into array
        localStorage.setItem("item", JSON.stringify(items)); // storing item in localstorage as array 
        viewStorage();
    } else {
        alert('field is empty');
    }
}

function clearStorage() {
    localStorage.clear(); // clearing local storage
    document.getElementById('task').value = "";
    document.getElementById('list').innerHTML = ""; // clearing html
    items = [];
}
