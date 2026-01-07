
import './App.css';
import Comments from './components/Comments';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <Posts />
       <Comments />
    </div>
  );
}

export default App;
