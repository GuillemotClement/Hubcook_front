import { Link, useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  username: yup.string().required("Une pseudo est necessaire"),
  password: yup.string().required("Un mot de passe est requis"),
});

type FormData = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();

  const sendCredentials = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:8086/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Erreur serveur");
      }
      const responseData = await response.json();
      console.log(responseData);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await sendCredentials(data);
  };

  return (
    <div className='m-auto w-full'>
      <form action='' className='border py-3 px-2 m-auto w-96' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-center font-bold text-xl'>Login Page</h1>
        <div className='flex flex-col my-2'>
          <label htmlFor=''>Username</label>
          <input type='text' className='input-text shadow' {...register("username")} />
          <p className='text-red-500 font-bold'>{errors.username?.message}</p>
        </div>
        <div className='flex flex-col my-2'>
          <label htmlFor=''>Mot de passe</label>
          <input type='password' className='input-text shadow' {...register("password")} />
          <p className='text-red-500 font-bold'>{errors.password?.message}</p>
        </div>
        <div className='flex justify-between px-22'>
          <Link to='/' className='btn btn-neutral'>
            Retour
          </Link>
          <button type='submit' className='btn  btn-primary'>
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}
