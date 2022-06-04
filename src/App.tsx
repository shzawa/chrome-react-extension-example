import { Route, Routes } from 'react-router-dom';
import { About } from "./routes/About";
import { Home } from "./routes/Home";

import './App.css';

export const App = () => {
    return (
        <Routes>
            <Route path="/about" element={
                <About/>
            }>
            </Route>
            <Route path="/" element={
                <Home/>
            }>
            </Route>
        </Routes>
    )
};
