//Learn Typescript
//react router for multiple pages
//array of objects

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteGenre, setQuoteGenre] = useState("");
  const [allQuotes, setAllQuotes] = useState([]);
  const [view, setView] = useState("random");


  /**
   * Fetches a random quote from API
   */
  const fetchQuote = async () => {
    try {
      setView('random');
      const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes/random");
      const data = await response.json();
      setQuote(data.data[0].quoteText);
      setQuoteAuthor(data.data[0].quoteAuthor);
      setQuoteGenre(data.data[0].quoteGenre);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Gets all the quotes of a particular author
   */

  const fetchAllAuthorQuotes = async () => {
    try {
      setView('author');
      const response = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${quoteAuthor}`);
      const quoteData = await response.json();
      setAllQuotes(quoteData.data.map(data => { return data.quoteText }));
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Used to get quote from API on initial load
   */
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <Header fetchQuote={fetchQuote} />
      {view === 'random' ?
        <>
          <Quote quote={quote} />
          <ForwardButton quoteAuthor={quoteAuthor} quoteGenre={quoteGenre} onClick={fetchAllAuthorQuotes} />
        </>
        :
        <>
          <div className='all_quotes_wrapper'>
            <h1>{quoteAuthor}</h1>
            {allQuotes.map((quotes, index) => { return <Quote key={index} quote={quotes} /> })}
          </div>
        </>
      }
    </div>
  );
}

/**
 * 
 * @param fetchQuote function calls function  API to get a random quote 
 * @returns 
 */
function Header({ fetchQuote }) {
  return (
    <header className="App-header">
      <button onClick={fetchQuote}>
        <span>random</span>
        <span className="material-symbols-outlined"> autorenew </span>
      </button>
    </header>
  );
}

function Quote(props) {
  return (
    <div className='quote_wrapper'>
      <p className='quote'>
        {props.quote}
      </p>
    </div >
  );
}

function ForwardButton(props) {
  return (
    <div className='author_wrapper' onClick={props.onClick}>
      <div className='author'>
        <div>
          <p className='quote_author'>{props.quoteAuthor}</p>
          <p className='quote_genre'>{props.quoteGenre}</p>
        </div>
        <div className='forward_button'>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </div>
      </div>
    </div>
  );
}

export default App;
