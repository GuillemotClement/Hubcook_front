import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className="m-auto w-full">
      <form action="" className="border py-3 px-2 m-auto w-96">
        <h1 className="">Login Page</h1>
        <div className="flex flex-col my-2">
          <label htmlFor="">Username</label>
          <input type="text" className="input-text shadow" />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="">Mot de passe</label>
          <input type="text" name="" id="" className="input-text shadow" />
        </div>
        <div className="flex justify-between px-22">
          <Link to="/" className="btn btn-neutral">
            Retour
          </Link>
          <button type="button" className="btn  btn-primary">
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}
