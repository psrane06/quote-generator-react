import './App.css';
import refreshIcon from './refresh.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>random</span>
        <img src={refreshIcon} alt='refresh' />
      </header>
      <main>
        <div>
          <p className='quote'>
            "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency."
          </p>
        </div>
        <div className='author'>
          <p className='quote_author'>Bill Gates</p>
          <p className='quote_genre'>business</p>
        </div>
      </main >
    </div>
  );
}

export default App;
