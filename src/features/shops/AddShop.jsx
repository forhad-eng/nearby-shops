import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
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
        toast.success('Shop added successfully', { id: 'shop-added' })
        reset()
    }

    return (
        <div class="max-w-md mx-auto border-2 rounded-lg my-10">
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                <h2 className="text-center text-2xl font-bold">Add Shop</h2>
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
                        {...register('date', { required: { value: true, message: 'Date is required' } })}
                        type="text"
                        placeholder="Sat, Sun, Mon, Tue, Wed, Thu, Fri"
                        class="input input-bordered"
                    />
                    {errors?.date?.type === 'required' && <p className="text-red-600">{errors.date.message}</p>}
                </div>
                <input {...register('uid')} type="hidden" value={uuidv4()} />
                <div class="form-control mt-6">
                    <button class="btn btn-primary text-white">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddShop
