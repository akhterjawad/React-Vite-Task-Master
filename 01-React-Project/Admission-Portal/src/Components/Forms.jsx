import React from 'react'
import { useForm } from "react-hook-form"

const Forms = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <h1 className="text-center font-bold text-[2rem]">Admission Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 sm:pl-16 sm:pr-16 ">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="Full_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Full name
                        </label>
                        <input {...register("Full_name", { required: true })}
                            type="text"
                            id="Full_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Full name"
                            required=""
                        />
                        {errors.Full_name && <span className='text-[red]'>This field is required</span>}
                    </div>
                    <div>
                        <label
                            htmlFor="Father_Name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Father Name
                        </label>
                        <input {...register("Father_Name", { required: true })}
                            type="text"
                            id="Father_Name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Father Name"
                            required=""
                        />
                        {errors.Father_Name && <span className='text-[red]'>This field is required</span>}
                    </div>
                    <div>
                        <label
                            htmlFor="Email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input {...register("Email", { required: true })}
                            type="email"
                            id="Email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email"
                            required=""
                        />
                        {errors.Email && <span className='text-[red]'>This field is required</span>}
                    </div>
                    <div>
                        <label
                            htmlFor="phone_number"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Phone number
                        </label>
                        <input {...register("phone_number", { required: true })}
                            type="number"
                            id="phone_number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter first digits is 0"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required=""
                        />
                        {errors.phone_number && <span className='text-[red]'>This field is required</span>}
                    </div>
                    <div>
                        <label
                            htmlFor="CNIC"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            National ID (CNIC)
                        </label>
                        <input {...register("CNIC", { required: true })}
                            type="number"
                            id="CNIC"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="CNIC"
                            required=""
                        />
                        {errors.CNIC && <span className='text-[red]'>This field is required</span>}
                    </div>
                    <div>
                        <label
                            htmlFor="Date_of_Birth"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Date of Birth
                        </label>
                        <input {...register("Date_of_Birth", { required: true })}
                            type="date"
                            id="Date_of_Birth"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required=""
                        />
                        {errors.Date_of_Birth && <span className='text-[red]'>This field is required</span>}
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="Gender"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Gender
                    </label>

                    <select {...register("Gender", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="Gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.Gender && <span className='text-[red]'>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="Laptop"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Do you have a Laptop?
                    </label>

                    <select {...register("Laptop", { required: true })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="gender" name="gender">
                        <option value="Yes">yes</option>
                        <option value="No">No</option>
                    </select>
                    {errors.Laptop && <span className='text-[red]'>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="Address"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Address
                    </label>
                    <input {...register("Address", { required: true })}
                        type="text"
                        id="Address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Address"
                        required=""
                    />
                    {errors.Address && <span className='text-[red]'>This field is required</span>}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="qualification"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Last qualification
                    </label>
                    <select  {...register("qualification", { required: true })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="qualification" name="gender">
                        <option value="Matric">Matric</option>
                        <option value="Intermeiate">Intermeiate</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                    </select>
                    {errors.qualification && <span className='text-[red]'>This field is required</span>}
                </div>
                {/* <div className="flex items-start mb-6">
           <div className="flex items-center h-5">
            <input {...register("email", { required: true })}
              id="remember"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
            {errors.email && <span className='text-[red]'>This field is required</span>}
          </div> 
           <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </a>
            .
          </label> 
        </div>*/}
                <div>
                    <label
                        htmlFor="Profile_Image"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Profile Image
                    </label>
                    <input {...register("Profile_Image", { required: true })} type="file" id="Profile_Image" className="file-input file-input-bordered w-full max-w-xs mb-1" /> <br />
                    {errors.Profile_Image && <span className='text-[red] mb-3'>This field is required</span>}
                </div>
                <ul className="list-disc pl-5 mb-5">
                    <li>With white or blue background</li>
                    <li>File type: jpg, jpeg, png</li>
                    <li>Upload your recent passport size picture</li>
                    <li>Your face should be clearly visible without any glasses</li>
                </ul>
                <button
                    // type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default Forms
