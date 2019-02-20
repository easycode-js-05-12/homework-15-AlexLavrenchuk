require('./../css/style.css');

import { UiService } from './ui.service';
import { form, select, inputDescription, inputValue, button, incomeView, expensesView, allList, totalValue } from './elements';

export let income = 0;
let expense = 0;
let total = 0;
const array = [];

// add to markup and array
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const uiService = new UiService();

    if (uiService.value === 0) return console.error('Error');

    array.push(uiService);
    uiService.addValue()
    sum();
    addSum();
    
    inputDescription.value = '';
    inputValue.value = '';
});
/**
 * @docs sum - count the sum
 */
function sum() {
    income = array.filter((item) => item.type === 'income').reduce((prev, current) => prev + Number(current.value), 0);
    expense = array.filter((item) => item.type === 'expense').reduce((prev, current) => prev + Number(current.value), 0);
    total = array.reduce((prev, current) => prev + Number(current.value), 0);
}
/**
 * @docs addSum - add to markup
 */
function addSum() {
    incomeView.innerHTML = income;
    expensesView.innerHTML = expense;
    totalValue.innerHTML = total;
}
/**
 * @docs deleteUiService - delete from array, count the sum and add to markup
 * @param {siting} id 
 */
function deleteUiService(id) {
    array.some((el, index) => { if (el.id === id) array.splice(index, 1) });
    sum();
    addSum();
}
/**
 * @docs changeOption - class change when select is changed
 */
const changeOption = (e) => { 
    select.classList.toggle('red-focus');
    inputDescription.classList.toggle('red-focus');
    inputValue.classList.toggle('red-focus');
    button.classList.toggle('red');
};

select.addEventListener("change", changeOption);

allList.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.parentElement.className !== "item__delete--btn") return;

    const itemDiv = e.target.closest('.item');
    deleteUiService(itemDiv.dataset.id); // delete to array
    itemDiv.parentElement.removeChild(itemDiv); // delete to markup
});

