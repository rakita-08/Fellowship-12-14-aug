import css from'./App.module.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import about from './components/about';
import Login from './components/state';
import Home from './components/home';
import Versions from './components/props';
import onPClick from './components/warning';


function App(){
    return(
        <BrowserRouter>
        <nav className={css.menu}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Versions">Versions</Link>
        <Link to="/onPClick">onPClick</Link>
        </nav>
        <Routes>
            <Route path="/"  Component={Home} />
            <Route path="/about"  Component={about} />
            <Route path="/Login"  Component={Login} />
            <Route path="/Versions"  Component={Versions} />
            <Route path="/onPClick"  Component={onPClick} />
        </Routes>
        </BrowserRouter>
    );
}
export default App;