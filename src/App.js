import './App.css';
import Container from './MyCart/Container';
import { Users } from './MyCart/dao/data';
function App() {
  return (
    <div className="App">
      {Users.map((user) => (
        <Container
          PictureUrl={user.PictureUrl}
          Information={user.Information} // Gérer les utilisateurs avec ou sans "Information"
        />
      ))}
    </div>
  );
}

export default App;
