import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddShop from './features/shops/AddShop'
import ViewShops from './features/shops/ViewShops'
import Nav from './Pages/Shared/Nav'

function App() {
    const [filter, setFilter] = useState({ area: '', category: '' })

    return (
        <div className="max-w-7xl mx-auto">
            <Nav filter={filter} setFilter={setFilter} />
            <Routes>
                <Route path="/" element={<ViewShops filter={filter} />} />
                <Route path="/add-shop" element={<AddShop />} />
            </Routes>
        </div>
    )
}

export default App
