import { useSelector } from 'react-redux'

const ViewShops = ({ filter }) => {
    const today = new Date().getDay()
    const getToday = today => {
        switch (today) {
            case 1:
                return 'Mon'
            case 2:
                return 'Tue'
            case 3:
                return 'Wed'
            case 4:
                return 'Thu'
            case 5:
                return 'Fri'
            case 6:
                return 'Sat'
            case 7:
                return 'Sun'
            default:
                break
        }
    }
    const { shops } = useSelector(state => state.shopReducer)
    const { area, category } = filter

    const filteredShop = shops.filter(shop => shop.area === area && shop.category === category)

    return (
        <div className="mt-14 mb-20">
            {filteredShop.length > 0 && (
                <div>
                    <h3 className="text-center text-2xl text-red-400">
                        Your search matched {filteredShop.length} result(s)
                    </h3>
                    <div className="grid grid-cols-3 gap-5 mt-6 mb-20">
                        {filteredShop.map((shop, index) => (
                            <div class="card bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        className="w-full h-80"
                                        src={`https://picsum.photos/200/300?random=${index + 1}`}
                                        alt="Shop Pic"
                                    />
                                </figure>
                                <div class="card-body pl-3">
                                    <div className="flex">
                                        <h2 class="card-title">{shop.name}</h2>{' '}
                                        {shop.date.includes(getToday(today)) ? (
                                            <div class="badge badge-primary text-white">Open Today</div>
                                        ) : (
                                            <div class="badge badge-error text-white">Closed Today</div>
                                        )}
                                    </div>
                                    <p>Category: {shop.category}</p>
                                    <p>Location: {shop.area}</p>
                                    <p>Open: {shop.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div>
                {shops.length > 0 ? (
                    <div>
                        <h2 className="text-center text-3xl font-bold mb-10">Shop List</h2>
                        <div className="grid lg:grid-cols-3 gap-10">
                            {shops.map((shop, index) => (
                                <div class="card bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            className="w-full h-80"
                                            src={`https://picsum.photos/200/300?random=${index + 1}`}
                                            alt="Shop Pic"
                                        />
                                    </figure>
                                    <div class="card-body pl-3">
                                        <div className="flex justify-between items-center">
                                            <h2 class="card-title">{shop.name}</h2>{' '}
                                            {shop.date.includes(getToday(today)) ? (
                                                <div class="badge badge-primary text-white">Open Today</div>
                                            ) : (
                                                <div class="badge badge-error text-white">Closed Today</div>
                                            )}
                                        </div>
                                        <p>Category: {shop.category}</p>
                                        <p>Location: {shop.area}</p>
                                        <p>Open: {shop.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <h3 className="text-center text-3xl font-bold">Please Add Some Shop!</h3>
                )}
            </div>
        </div>
    )
}

export default ViewShops
