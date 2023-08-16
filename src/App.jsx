import './App.css'
import Table from './Table'
import { useEffect, useState} from 'react'

function App() {
  const JSON_URL = `https://jsonplaceholder.typicode.com/`
  const [content, setContent] = useState([])
  const [focusedElement, setFocusedElement] = useState(null)

  useEffect(() => {
    if (focusedElement) {
      (async () => {
        const fetchedContent = await getJSON(focusedElement);
        setContent(fetchedContent)
    })();
  }
  }, [focusedElement])

  const getJSON = async (path) => {
    let jsonResp = null
    try {
      const resp = await fetch(`${JSON_URL}${path}`)
      if (!resp.ok) throw new Error('Problem fetching data')
      jsonResp = await resp.json()
    } catch (err) {
      console.log(err.message)
    } finally {
      return jsonResp
    }
  }

  const handleClick = (event) => {
    let buttonText = event.target.textContent.toLowerCase()
    setFocusedElement(buttonText)
  }
  
  return (
    <main>
      <header>
        <nav>
          <ul className='tabs'>
            <li className='tab'>
              <button  className='tab__link' onClick={(e)=> handleClick(e)}>Users</button>
              </li>
            <li className='tab'>
              <button  className='tab__link' onClick={(e) => handleClick(e)}>Posts</button>
            </li>
            <li className='tab'>
              <button  className='tab__link' onClick={(e) => handleClick(e)}>Comments</button>
            </li>
          </ul>
        </nav>
      </header>
      <section className='content'>
        {content.length > 0 && <Table content={content}/>}
      </section>
    </main>
  
  )
}

export default App
