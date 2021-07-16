import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './page/Home'
import Album from './page/Album';
import Dress from './page/Dress';
import ProductPrice from './page/ProductPrice';
import CenteredGrid from './page/New';
import AlbumDetail from './page/AlbumDetail';
import DressDetail from './page/DressDetail';
import NewDetail from './page/NewDetail';

function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/album">
            <Album />
          </Route>
          <Route path="/vay-cuoi">
            <Dress />
          </Route>
          <Route path="/bao-gia">
            <ProductPrice />
          </Route>
          <Route path="/tin-tuc">
            <CenteredGrid />
          </Route>
          <Route path="/album-detail">
            <AlbumDetail />
          </Route>
          <Route path="/dress-detail">
            <DressDetail />
          </Route>
          <Route path="/new-detail">
            <NewDetail />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;