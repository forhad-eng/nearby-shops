import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addShop } from './shopsSlice'

const AddShop = () => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = data => {
        dispatch(addShop(data))
        reset()
    }

    return (
        <div class="max-w-md mx-auto border-2 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input
                        {...register('name', {
                            required: { value: true, message: 'Name is required' },
                            pattern: { value: /^[A-Z a-z]+$/, message: 'Invalid name' }
                        })}
                        type="text"
                        placeholder="shop name"
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
                        {...register('category', { required: { value: true, message: 'Category is required' } })}
                        class="select select-primary w-full"
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
                    {errors?.category?.type === 'required' && <p className="text-red-600">{errors.category.message}</p>}
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Opening Date</span>
                    </label>
                    <input
                        {...register('date', { required: { value: true, message: 'date is required' } })}
                        type="text"
                        placeholder="opening date"
                        class="input input-bordered"
                    />
                    {errors?.date?.type === 'required' && <p className="text-red-600">{errors.date.message}</p>}
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddShop