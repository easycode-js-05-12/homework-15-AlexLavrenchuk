const form = document.forms['form'];
const select = document.querySelector('.add__type');
const inputDescription = document.querySelector('.add__description');
const inputValue = document.querySelector('.add__value');
const button = document.querySelector('.add__btn');
const incomeList = document.querySelector('.income__list');
const expensesList = document.querySelector('.expenses__list');
const incomeView = document.querySelector('.budget__income--value');
const expensesView = document.querySelector('.budget__expenses--value');
const allList = document.querySelector('.all__list');
const totalValue = document.querySelector('.budget__value');

export { form, select, inputDescription, inputValue, button, incomeList, expensesList, incomeView, expensesView, allList, totalValue }; 