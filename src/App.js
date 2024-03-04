import './App.css';
import { useState } from 'react';

function App() {
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteGenre, setQuoteGenre] = useState("");

  const fetchQuote = async () => {
    const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes/random");
    const data = await response.json();
    setQuote(data.data[0].quoteText);
    setQuoteAuthor(data.data[0].quoteAuthor);
    setQuoteGenre(data.data[0].quoteGenre);
  };
  // fetchQuote();

  return (
    <div className="App">
      <Header />
      <Quote quote={quote} quoteAuthor={quoteAuthor} quoteGenre={quoteGenre} />
    </div>
  );

  function Header() {
    return (
      <header className="App-header">
        <button onClick={fetchQuote}>
          <span>random</span>
          <span class="material-symbols-outlined"> autorenew </span>
        </button>
      </header>
    );
  }
}

function Quote(props) {
  return (
    <main>
      <div>
        <p className='quote'>
          {props.quote}
        </p>
      </div>
      <div className='author'>
        <div>
          <p className='quote_author'>{props.quoteAuthor}</p>
          <p className='quote_genre'>{props.quoteGenre}</p>
        </div>
        <div className='forward_button'>
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </div>
      </div>
    </main >
  );
}

export default App;
