import './App.css';
import Container from './Container';
import { Users } from './data'; 
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
