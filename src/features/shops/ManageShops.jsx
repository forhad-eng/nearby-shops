import { useDispatch, useSelector } from 'react-redux'
import { deleteShop } from './shopsSlice'

const ManageShops = () => {
    const { shops } = useSelector(state => state.shopReducer)
    const dispatch = useDispatch()

    return (
        <div class="overflow-x-auto mt-14">
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
                    {shops.map((shop, index) => (
                        <tr>
                            <th>{index}</th>
                            <td>{shop.name}</td>
                            <td>{shop.category}</td>
                            <td>{shop.area}</td>
                            <td>
                                <button className="btn btn-sm">Update</button>
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
        </div>
    )
}

export default ManageShops
