//Learn Typescript
//react router for multiple pages
//array of objects

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteGenre, setQuoteGenre] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes/random");
      const data = await response.json();
      setQuote(data.data[0].quoteText);
      setQuoteAuthor(data.data[0].quoteAuthor);
      setQuoteGenre(data.data[0].quoteGenre);
    } catch (e) {
      console.log(e);
    }
  };

  /**l
   * 
   * 
   */

  const fetchAllAuthorQuotes = async (author) => {
    try {

    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <Header fetchQuote={fetchQuote} />
      <Quote quote={quote} />
      <ForwardButton quoteAuthor={quoteAuthor} quoteGenre={quoteGenre} onClick={fetchAllAuthorQuotes} />
    </div>
  );
}

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
    <main>
      <div>
        <p className='quote'>
          {props.quote}
        </p>
      </div>
    </main >
  );
}

function ForwardButton(props) {
  return (
    <div className='author_wrapper'>
      <div className='author'>
        <div>
          <p className='quote_author'>{props.quoteAuthor}</p>
          <p className='quote_genre'>{props.quoteGenre}</p>
        </div>
        <div className='forward_button' onClick={props.onClick}>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </div>
      </div>
    </div>
  );
}

export default App;
