import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <header className="flex justify-between items-center shadow py-3 px-8">
      <Link to="/" className="">
        <span>Hubcook</span>
      </Link>
      <nav className="flex gap-2">
        <NavLink to="/">Accueil</NavLink>
      </nav>
      <nav className="flex gap-2">
        <NavLink to="/register" className="">
          Inscription
        </NavLink>
        <NavLink to="/login">Connexion</NavLink>
        <NavLink to="/profil">Profil</NavLink>
        <NavLink to="/logout">Deconnexion</NavLink>
      </nav>
    </header>
  );
}
