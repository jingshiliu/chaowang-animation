import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import NoPage from "./pages/NoPage";
import './App.css'


function App() {
    return (
        <BrowserRouter basename={'https://chaowang-animation.herokuapp.com/'}>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'contact'} element={<Contact/>}/>
                    <Route path={'project'} element={<Project/>}/>
                    <Route path={'*'} element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
