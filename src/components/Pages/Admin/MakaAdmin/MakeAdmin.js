import React from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

const MakeAdmin = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://fathomless-badlands-24178.herokuapp.com/services',data)
      .then(res => {
        if (res.data.insertedId) {
            alert('added successfully Make a Admin');
            reset();
        }
      })
    }
    return (
        <div>
            <h2>Make Admin </h2>
            <div className='style-form w-50 m-auto'>
            <h2 className='text-center'>Please Add You Service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='pt-5'>
                <input {...register("name")} placeholder='Enter your Product Name' className='form-control mb-3' />
                <input type='number' {...register("price")} placeholder='Product Price' className='form-control mb-3' />
                <textarea {...register("description")} placeholder="Description" className='form-control mb-3' />
                <input type="text" {...register("image", { min: 18, max: 99 })} className='form-control mb-4' placeholder='Enter your Image URL' />
                <input type="submit" className='btn btn-primary' />
            </form>
        </div>
        </div>
    );
};

export default MakeAdmin;