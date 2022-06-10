import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddShop from './features/shops/AddShop'
import ViewShops from './features/shops/ViewShops'
import Nav from './Pages/Shared/Nav'

function App() {
    return (
        <div className="max-w-7xl mx-auto">
            <Nav />
            <Routes>
                <Route path="/" element={<ViewShops />} />
                <Route path="/add-shop" element={<AddShop />} />
            </Routes>
        </div>
    )
}

export default App
