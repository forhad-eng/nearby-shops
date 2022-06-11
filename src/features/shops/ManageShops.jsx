import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../Pages/Modal'
import { deleteShop } from './shopsSlice'

const ManageShops = () => {
    const { shops } = useSelector(state => state.shopReducer)
    const dispatch = useDispatch()
    const [needToUpdate, setNeedToUpdate] = useState(null)

    return (
        <div class="overflow-x-auto mt-10">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {shops?.map((shop, index) => (
                        <tr>
                            <th>{index}</th>
                            <td>{shop.name}</td>
                            <td>{shop.category}</td>
                            <td>{shop.area}</td>
                            <td>
                                <label onClick={() => setNeedToUpdate(shop)} for="shop-edit" className="btn btn-sm">
                                    Update
                                </label>
                            </td>
                            <td>
                                <button onClick={() => dispatch(deleteShop(shop.uid))} className="btn btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {needToUpdate && <Modal setNeedToUpdate={setNeedToUpdate} needToUpdate={needToUpdate} />}
        </div>
    )
}

export default ManageShops
