import './style.css'

const appGrid = document.getElementById('app') as HTMLDivElement

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const createCard = (object: Post) => {
  const card: HTMLDivElement = document.createElement('div')
  const title: HTMLHeadElement = document.createElement('h3')
  const text: HTMLParagraphElement = document.createElement('p')

  card.className = 'card'
  title.className = 'card__title'
  text.className = 'card__text'

  title.textContent = object.title
  text.textContent = object.body

  card.append(title, text)

  return card
}

const getDataFromAPI = async (url: string): Promise<Post[]> => fetch(url)
  .then(response => response.json())
  .then(json => json.forEach((post: Post) => {
    const node = createCard(post)
    appGrid.appendChild(node)
  }))

getDataFromAPI('https://jsonplaceholder.typicode.com/posts')
