import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubCard from './components/GitHubCard';

function App() {
  const users = [{
    name: 'milcab23.js',
    imageURL: 'https://avatar-endpoint.herokuapp.com/api/',
  },
  {
    name: 'james.js',
    imageURL: 'https://avatar-endpoint.herokuapp.com/api/',
  },
  {
    name: 'joe.js',
    imageURL: 'https://avatar-endpoint.herokuapp.com/api/',
  },
  {
    name: 'mae.js',
    imageURL: 'https://avatar-endpoint.herokuapp.com/api/',
  }];

  return (
    <div className="App">
      {users.map((user, i) => <GitHubCard key={i} {...user} index={i} />)}
    </div>
  );

}

export default App;
