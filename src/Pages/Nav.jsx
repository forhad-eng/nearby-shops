import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Nav = ({ filter, setFilter }) => {
    const { pathname } = useLocation()

    const menuItems = (
        <>
            <li>
                <NavLink className="btn-sm btn-accent text-white py-5" to="/">
                    All Shops
                </NavLink>
            </li>
            <li>
                <NavLink className="btn-sm btn-accent text-white py-5" to="/manage-shops">
                    Manage Shops
                </NavLink>
            </li>
            <li>
                <NavLink className="btn-sm btn-accent text-white py-5" to="/add-shop">
                    Add Shop
                </NavLink>
            </li>
        </>
    )

    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabindex="0"
                            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
                        >
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" class="btn btn-ghost normal-case text-xl">
                        Nearby Shops
                    </Link>
                </div>
                <div class={`navbar-center ${pathname === '/' ? 'hidden lg:flex' : 'hidden'}`}>
                    <div className="flex items-center gap-2">
                        <span className="block cursor-pointer">
                            <FontAwesomeIcon icon={faFilter} /> Filter by
                        </span>

                        <select
                            onChange={e => setFilter({ ...filter, area: e.target.value })}
                            class="select select-primary lg:w-32"
                        >
                            <option disabled selected>
                                Area
                            </option>
                            <option>Thane</option>
                            <option>Pune</option>
                            <option>Mumbai Suburban</option>
                            <option>Nashik</option>
                            <option>Nagpur</option>
                            <option>Ahmednagar</option>
                            <option>Solapur</option>
                        </select>
                        <select
                            onChange={e => setFilter({ ...filter, category: e.target.value })}
                            class="select select-primary lg:w-32"
                        >
                            <option disabled selected>
                                Category
                            </option>
                            <option>Grocery</option>
                            <option>Butcher</option>
                            <option>Baker</option>
                            <option>Chemist</option>
                            <option>Phone</option>
                            <option>Stationery shop</option>
                        </select>

                        <span onClick={() => setFilter({})} className="btn btn-error text-white">
                            Reset Filter
                        </span>
                    </div>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 gap-2 items-center">{menuItems}</ul>
                </div>
            </div>

            <div className={`${pathname === '/' ? 'flex lg:hidden justify-evenly items-center gap-1' : 'hidden'} `}>
                <span className="block cursor-pointer">
                    <FontAwesomeIcon icon={faFilter} /> Filter by
                </span>

                <select
                    onChange={e => setFilter({ ...filter, area: e.target.value })}
                    class="select select-primary p-0 w-[70px]"
                >
                    <option disabled selected>
                        Area
                    </option>
                    <option>Thane</option>
                    <option>Pune</option>
                    <option>Mumbai Suburban</option>
                    <option>Nashik</option>
                    <option>Nagpur</option>
                    <option>Ahmednagar</option>
                    <option>Solapur</option>
                </select>
                <select
                    onChange={e => setFilter({ ...filter, category: e.target.value })}
                    class="select select-primary p-0 w-[85px]"
                >
                    <option disabled selected>
                        Category
                    </option>
                    <option>Grocery</option>
                    <option>Butcher</option>
                    <option>Baker</option>
                    <option>Chemist</option>
                    <option>Phone</option>
                    <option>Stationery shop</option>
                </select>

                <span onClick={() => setFilter({})} className="btn btn-error text-white">
                    Reset
                </span>
            </div>
        </div>
    )
}

export default Nav
