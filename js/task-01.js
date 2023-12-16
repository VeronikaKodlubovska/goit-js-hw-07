const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

let headingsArray = [];
let nestedListsArray = [];

categoriesItems.forEach(list => {
    const headings = list.querySelectorAll('h2');
    headingsArray.push(...headings);

    const nestedLists = list.querySelector('ul');
    if (nestedLists) {
        nestedListsArray.push(nestedLists.children.length);
    } else {
        nestedListsArray.push(0);
    }
})
console.log(`Number of categories: ${headingsArray.length}`);
console.log(`Category: ${headingsArray[0].textContent}`);
console.log(`Elements:${nestedListsArray[0]}`);
console.log(`Category: ${headingsArray[1].textContent}`);
console.log(`Elements:${nestedListsArray[1]}`);
console.log(`Category: ${headingsArray[2].textContent}`);
console.log(`Elements:${nestedListsArray[2]}`);