import './style.css'

const appGrid = document.getElementById('app') as HTMLDivElement

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const createCard = (object: Post): HTMLDivElement => {
  const card: HTMLDivElement = document.createElement('div')
  card.className = 'card'

  const title: HTMLHeadElement = document.createElement('h3')
  title.className = 'card__title'
  title.textContent = object.title

  const text: HTMLParagraphElement = document.createElement('p')
  text.className = 'card__text'
  text.textContent = object.body

  card.append(title, text)

  return card
}

const getPosts = async (): Promise<Post[]> => fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => json)

const appendPosts = async () => {
  const postsList = await getPosts()

  appGrid.append(...postsList.map((post) => createCard(post)))
}

appendPosts().then()

