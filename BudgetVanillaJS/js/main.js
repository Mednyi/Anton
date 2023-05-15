'use strict';

const start = document.getElementById('start');
const budget = document.getElementsByClassName('budget-value');
const daybudget = document.getElementsByClassName('daybudget-value');
const level = document.getElementsByClassName('level-value');
const expenses = document.getElementsByClassName('expenses-value');
const optionalexpenses = document.getElementsByClassName('optionalexpenses-value');
const income = document.getElementsByClassName('income-value');
const monthsavings = document.getElementsByClassName('monthsavings-value');
const yearsavings = document.getElementsByClassName('yearsavings-value');

const expensesItem = document.querySelectorAll('.expenses-item');
const optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

const optionalexpensesBtn = document.querySelector('.optionalexpenses-btn');
const countBudgetBtn = document.querySelector('.count-budget-btn');

const chooseIncome = document.querySelector('.choose-income');

const savings = document.getElementById('savings');
const sum = document.getElementById('sum');
const percent = document.getElementById('percent');

const yearValue = document.querySelector('.year-value');
const monthValue = document.querySelector('.month-value');
const dayValue = document.querySelector('.day-value');

console.log(savings);