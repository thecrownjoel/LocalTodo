// #1. Check items in localstorage and iterate through each value in key
// #2. Push new items in input to items array
// #. Clear storage 

var items = []; // empty variable awaiting data
var savedItems = JSON.parse(localStorage.getItem('item'));
getList();

function addStorage() {
    var task = document.getElementById('task').value; // getting value from text field
    items.push(task); // push task item into array
    localStorage.setItem("item", JSON.stringify(items)); // storing item in localstorage as array 
}

function getList() {
    // loop to check if local storage is empty 
    if (localStorage.getItem('item') === null) {
        document.getElementById('list').innerHTML = '<li>' + 'no items yet' + '</li>';
    } else {
        for (var key in savedItems) {
            document.getElementById('list').innerHTML += '<li>' + savedItems[key] + '</li>'; 
          }
    }
}


function clearStorage() {
    localStorage.clear(); // clearing local storage
    document.getElementById('list').innerHTML = ""; // clearing html
    window.location.reload(); // reload browser window to refresh local storage
}





