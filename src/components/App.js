import News from "./News"
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="wrapper">
      <header></header>
        <main className="container">
          <News />
        </main>
      <footer></footer>
    </div>
  );
}

export default App;
