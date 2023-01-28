import './style.css'

const appGrid = document.getElementById('app') as HTMLDivElement

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}
const getDataFromAPI = async (): Promise<Post[]> => fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => json)

const createCard = (object) => {
  const card: HTMLDivElement = document.createElement('div')
  card.className = 'card'
  const title: HTMLHeadElement = document.createElement('h3')
  title.className = 'card__title'
  const text: HTMLParagraphElement = document.createElement('p')
  text.className = 'card__text'

  title.textContent = object.title
  text.textContent = object.body

  card.append(title, text)
  return card
}
const appendPosts = async () => {
  const posts = await getDataFromAPI()

  posts.forEach((post) => {
    const node = createCard(post)
    appGrid.appendChild(node)
  })
}

appendPosts()
