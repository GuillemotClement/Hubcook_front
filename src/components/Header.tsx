import { NavLink, Link, useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8086/logout", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Erreur serveur");
      }

      const dataResponse = await response.json();

      console.log(dataResponse);
      navigate("/");
    } catch (err) {
      console.error("Erreur :", err);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className='flex justify-between items-center shadow py-3 px-8'>
      <Link to='/' className=''>
        <span>Hubcook</span>
      </Link>
      <nav className='flex gap-2'>
        <NavLink to='/'>Accueil</NavLink>
      </nav>
      <nav className='flex gap-2'>
        <NavLink to='/register' className=''>
          Inscription
        </NavLink>
        <NavLink to='/login'>Connexion</NavLink>
        <NavLink to='/profil'>Profil</NavLink>
        <p onClick={handleLogout}>Deconnexion</p>
      </nav>
    </header>
  );
}
