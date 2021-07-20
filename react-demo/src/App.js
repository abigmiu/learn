import React from 'react'
import './App.css'
const title = 'React'

const welcome = {
  gteeting: 'Hey',
  title: 'React'
}

function showTitle () {
  return '123'
}

// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'JordanWalke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'DanAbramov,AndrewClark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1
//   }
// ]

const List = props =>
  props.list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ))

const Search = props => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
    props.onSearch(event)
  }

  React.useEffect(() => {
    window.localStorage.setItem('search', searchTerm)
  }, ['searchTerm'])

  return (
    <div>
      <label htmlFor='search'>
        Search:
      </label>
      <input id='search' onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      <hr />
    </div>
  )
}

function App () {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'JordanWalke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'DanAbramov,AndrewClark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]

  const handleChange = event => {
    console.log(event.target.value)
  }

  return (
    <div className='App'>
      {title}
      <br />
      <h1>{welcome.gteeting}{welcome.title}</h1>
      <div>{showTitle()}</div>

      <Search onSearch={handleChange} />

      <List list={stories} />
    </div>
  )
}

export default App
