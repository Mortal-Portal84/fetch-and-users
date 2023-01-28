import './style.css'

const appGrid: HTMLDivElement = document.getElementById('app')
const card: HTMLDivElement = document.createElement('div')
const title: HTMLHeadElement = document.createElement('h3')
const text: HTMLParagraphElement = document.createElement('p')

card.className = 'card'
title.className = 'card__title'
text.className = 'card__text'

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
