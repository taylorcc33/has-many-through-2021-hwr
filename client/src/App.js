import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from './components/NavBar';
import Register from "./components/Register";
import Home from "./pages/Home";
import { Container } from 'semantic-ui-react'
import FetchUser from "./components/FetchUser";

function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
