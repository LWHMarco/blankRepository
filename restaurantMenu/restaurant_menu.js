// Menu arrays
const breakfastMenu = ['pancakes', 'eggs benedict', 'oatmeal', 'frittata'];
const mainCourseMenu = ['steak', 'pasta', 'burger', 'salmon'];
const dessertMenu = ['cake', 'ice cream', 'pudding', 'fruit salad'];

// Generate HTML for breakfast menu items
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Generate HTML for main course menu items
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Generate HTML for dessert menu items
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;