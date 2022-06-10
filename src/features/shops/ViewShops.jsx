import { useSelector } from 'react-redux'

const ViewShops = () => {
    const { shops } = useSelector(state => state.shopReducer)

    return (
        <div>
            <h2>Total shop: {shops.length}</h2>
        </div>
    )
}

export default ViewShops
