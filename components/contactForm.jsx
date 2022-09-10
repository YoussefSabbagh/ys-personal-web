import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './userMailValidations';

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const intialValues = {
    user_name: '',
    subject: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValues,
    mode: 'all',
  });

  const onSubmit = (valores) => {
    setIsSending(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        valores,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Thanks for your email!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSending(false);
          reset();
        },
        (err) => {
          toast.error('Ups.. There is a problem :)', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
          });
          console.log('FAILED...', err);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="shadow-sm shadow-yellow-700 p-8">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <label htmlFor="user_name" className=" mr-2">
            Name:
          </label>
          <input
            {...register('user_name')}
            placeholder="Name:"
            className="w-full text-white px-2 py-2 outline-none border-transparent focus:border-yellow-700 border-b-4 rounded-md transition duration-500 bg-black/30"
          />
        </div>
        <p className="text-sm text-danger mb-2">{errors.user_name?.message}</p>
        <div className="flex items-center">
          <label htmlFor="subject" className=" mr-2">
            Subject:
          </label>
          <input
            {...register('subject')}
            placeholder="Subject:"
            className="w-full text-white px-2 py-2 outline-none border-transparent focus:border-yellow-700 border-b-4 rounded-md transition duration-500 bg-black/30"
          />
        </div>
        <p className="text-sm text-danger mb-2">{errors.subject?.message}</p>
        <div className="flex items-center">
          <label htmlFor="email" className=" mr-2">
            Email:
          </label>
          <input
            {...register('email')}
            placeholder="Email:"
            className="w-full text-white px-2 py-2 outline-none border-transparent focus:border-yellow-700 border-b-4 rounded-md transition duration-500 bg-black/30"
          />
        </div>
        <p className="text-sm text-danger mb-2">{errors.email?.message}</p>
        <div className="flex items-center">
          <label htmlFor="messaje" className=" mr-2">
            Messaje:
          </label>
          <textarea
            {...register('message')}
            cols="30"
            rows="5"
            placeholder="Message"
            className="w-full text-white px-2 py-2 outline-none border-transparent focus:border-yellow-700 border-b-4 rounded-md transition duration-500 bg-black/30"
          ></textarea>
        </div>
        <p className="text-sm text-danger mb-2">{errors.message?.message}</p>
        {!isSending && (
          <button
            type="submit"
            className="px-4 py-2 w-1/3 mx-auto mt-4 bg-yellow-700 text-white hover:bg-purple rounded-md"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
