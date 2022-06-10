import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { updateShop } from '../features/shops/shopsSlice'

const Modal = ({needToUpdate, setNeedToUpdate}) => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = data => {
        dispatch(updateShop(data))
        reset()
    }

    return (
        <div>
            <input type="checkbox" id="shop-edit" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="shop-edit" class="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <form onSubmit={handleSubmit(onSubmit)} class="card-body border-2 rounded-lg mt-8">
                        <h2 className="text-center text-2xl font-bold">Update Shop</h2>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                {...register('name', {
                                    required: { value: true, message: 'Name is required' },
                                    pattern: { value: /^[A-Z a-z]+$/, message: 'Invalid name' }
                                })}
                                value={needToUpdate?.name}
                                onChange={e => setNeedToUpdate({ ...needToUpdate, name: e.target.value })}
                                type="text"
                                placeholder="Shop name"
                                class="input input-bordered"
                            />
                            {errors?.name?.type === 'required' && <p className="text-red-600">{errors.name.message}</p>}
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Area</span>
                            </label>
                            <select
                                {...register('area', { required: { value: true, message: 'Area is required' } })}
                                class="select select-primary w-full"
                                value={needToUpdate?.area}
                                onChange={e => setNeedToUpdate({ ...needToUpdate, area: e.target.value })}
                            >
                                <option disabled selected>
                                    Select area
                                </option>
                                <option>Thane</option>
                                <option>Pune</option>
                                <option>Mumbai Suburban</option>
                                <option>Nashik</option>
                                <option>Nagpur</option>
                                <option>Ahmednagar</option>
                                <option>Solapur</option>
                            </select>
                            {errors?.area?.type === 'required' && <p className="text-red-600">{errors.area.message}</p>}
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Category</span>
                            </label>
                            <select
                                {...register('category', {
                                    required: { value: true, message: 'Category is required' }
                                })}
                                class="select select-primary w-full"
                                value={needToUpdate?.category}
                                onChange={e => setNeedToUpdate({ ...needToUpdate, category: e.target.value })}
                            >
                                <option disabled selected>
                                    Select Category
                                </option>
                                <option>Grocery</option>
                                <option>Butcher</option>
                                <option>Baker</option>
                                <option>Chemist</option>
                                <option>Stationery shop</option>
                            </select>
                            {errors?.category?.type === 'required' && (
                                <p className="text-red-600">{errors.category.message}</p>
                            )}
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Opening Date</span>
                            </label>
                            <input
                                {...register('date', { required: { value: true, message: 'Date is required' } })}
                                value={needToUpdate?.date}
                                onChange={e => setNeedToUpdate({ ...needToUpdate, date: e.target.value })}
                                type="text"
                                placeholder="Sat, Sun, Mon, Tue, Wed, Thu, Fri"
                                class="input input-bordered"
                            />
                            {errors?.date?.type === 'required' && <p className="text-red-600">{errors.date.message}</p>}
                        </div>
                        <input {...register('uid')} type="hidden" value={needToUpdate?.uid} />
                        <div class="form-control mt-6">
                            <button class="btn btn-primary text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
