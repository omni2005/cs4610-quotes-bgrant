import './App.css'
import { useEffect, useState } from 'react'

interface Quote {
    _id: string
    content: string
    author: string
  }

export function App() {
  const [name, setName] = useState("")
  const [quote, setQuote] = useState<Quote | null>(null)
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [className, setClassName] = useState("")

  async function randomQuote() {
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
    setQuote(await result.json())
  }

  async function searchAPI(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/search?query=" + name);
    const body = await result.json()
    setQuotes(body.results)
    setClassName("postsearch")
  }

  useEffect(() => {
    randomQuote()
  }, [])


    return (
      <div className={className}>
        <h1>Quote Search</h1>
        <div>
        <form onSubmit={searchAPI}>
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
      
        {className != "postsearch" &&
          <div className='quotebox'>
            {quote?.content} 
            - {quote?.author}
          </div>
        }

        {quotes?.map((q) => (
        <div className='quotebox' key={q._id}>
          {q.content} - {q.author}
        </div>))}

      </div>
    );
}
