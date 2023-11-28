import Bouquet from "../component/bouquet";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Bouquets(props) {
  return (
    <>
     <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
        <h1>{props.titre}</h1>
        </div>
      <div className="container ">
        <div className="row">
          {props.bouquets.map((bouquet) => (
            <div key={bouquet.id}>
               <Bouquet bouquet={bouquet} />
            </div>
           
          ))}
        </div>
      </div>
    </>
  );
}