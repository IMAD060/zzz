import { Link } from "react-router-dom"; 
import { state } from "../data/state";
export default function NavBar() {

  const state ={navigation: [
    {id: 1, path: "/",  label: "Accueil" },
    {id: 2, path: "/bouquets",  label: "Bouquets"},
    { id: 3, path: "/fleurs",  label: "Fleurs" },
    {id: 4,  path: "/compte", label: "Mon Compt" },
  ]};

  return (
    <>
      <div className="bg-color">
        <nav className="navbar navbar-expand-sm navbar-light ">
          <a className="navbar-brand" href="/">
            <img src="/img/logo2.png" alt="..." className="logoform" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                {state.navigation.map((nav)=>(

              <li key={nav.id} className="nav-item">
                <Link to={nav.path} className="nav-link active">
                 {nav.label}
                </Link>
              </li>

                ))}
            </ul>
            <form className="d-flex my-2 my-lg-0 p-2 ">
              <button className="btn btn-color my-2 my-sm-0 " type="submit">
                Commander
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}