// //Task 1:Task 1: Array Manipulation Basics
// Create an empty array called shoppingList.
// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// Write a function called removeLastItem that removes the last item from the shoppingList array.
// Write a function called displayList that logs all items in the shoppingList array to the console.//

let shoppingList=[];


function addItem(item){
    shoppingList.push(item);
    console.log(shoppingList);
}

 addItem("shoes")
 addItem("hat")
 addItem("purse")

function removeLastItem(){
    shoppingList.pop();
    console.log(shoppingList);
}
//removeLastItem();

//Write a function called displayList that logs all items in the shoppingList array to the console.//

function displayList(){
    for (let i=0; i <= shoppingList.length; i++) {
        console.log(shoppingList[i])

    }
}
displayList(); //invoked the function//


//Task 2 Task 2: Filter and Search an Array
//Modify the addItem function to only add the item if it is not already in the shoppingList array.
//Write a function called filterItems that takes a search term as a parameter and returns all items 
// in the shoppingList that contain that search term (case-insensitive).//

function addItem(item){
    if(shoppingList.includes(item.toLowerCase() || item )){
        console.log('Item is already in list')
    }else {
     shoppingList.push(item);
     console.log(shoppingList);
    }
}
addItem("shoes") // testing conditional  for Task 2 
addItem("gloves") // testing: added addtl item

function filterItems(searchTerm){
    let searchResults = shoppingList.filter(item =>item === searchTerm)
    if (searchresults.contains(searchTerm))
    counsole.log

}

//Task 3: Render the List in the Browser
//Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.

let inputElement = document.getElementById("itemInput")
console.log (inputElement) 

let addItemButton = document.getElementById("addItemButton")
console.log (addItemButton)

let removeItemButton = document.getElementById("removeItemButton")
console.log (removeItemButton)

let UlElement=document.getElementById("cart")
console.log (UlElement)

//Task 3 -.Write a JavaScript function that adds items to the array and updates the displayed 
// list dynamically when the button is clicked.

addItemButton.addEventListener("click", function() {
   // console.log(itemInput);// to check 
        console.log(itemInput.value);

});
//"itemInput" means enter//





//Task 3-Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.//

