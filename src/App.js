import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddShop from './features/shops/AddShop'
import ManageShops from './features/shops/ManageShops'
import ViewShops from './features/shops/ViewShops'
import Nav from './Pages/Nav'

function App() {
    const [filter, setFilter] = useState({ area: '', category: '' })

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Nav filter={filter} setFilter={setFilter} />
            <Routes>
                <Route path="/" element={<ViewShops filter={filter} />} />
                <Route path="/add-shop" element={<AddShop />} />
                <Route path="/manage-shops" element={<ManageShops />} />
            </Routes>
            <Toaster />
        </div>
    )
}

export default App
