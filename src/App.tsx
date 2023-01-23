import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

async function searchAPI(searchedName: String): Promise<Response> {
  const result = await fetch("https://usu-quotes-mimic.vercel.app/api/search?query=" + searchedName);
  console.log(await result.json())
  return result
}

interface Quote {
  _id: String
  content: String
  author: String
}

export function App() {
  const [name, setName] = useState("")
  const [quote, setQuote] = useState<Quote | null>()


  async function randomQuote() {
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
    setQuote(await result.json())
  }

  function search(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    var searchResults = searchAPI(name)
  }

    useEffect(() => {
      randomQuote()
    }, [])

    /*
    useEffect(() => {
      getAPI(searchResults)
      .then(res => res.json())
      .then(quote => console.log(quote))
    
      if (searchedName.length > 0) {
         update screen
      }
  
      return () => {
        console.log("unmounted")
      }
      }, [])
      */

  const result = randomQuote()

  return (

    <><h1>Quote Search</h1><div>
      <form onSubmit={search}>
      <input
        type="text"
        value={name}
        placeholder="Enter a name"
        onChange={e => setName(e.target.value)} />
      <button
        type="submit">Search
      </button>
      </form>
    </div>
    
    <div>
      {}
    </div>
    </>

  /*
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
*/
  )
}
