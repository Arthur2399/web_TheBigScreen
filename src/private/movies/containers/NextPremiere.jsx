import { API_IMAGE } from '../../../helper/routes';
import './NextPremiere.css'

export const NextPremiere = ({nextPremiere}) => {

    return (
        <div className="next-premiere-info animate__animated animate__fadeIn">
            <img src={`${API_IMAGE}${nextPremiere.photo_movie}`} alt="movie" />
            <div className="next-premiere-info-text">
                <h1>{nextPremiere.name_movie}</h1>
                <div className="next-premiere-grid">
                    <span>Género:</span>
                    <span>{nextPremiere.category_movie}</span>
                    <span>Protagonista:</span>
                    <span>{nextPremiere.actor_movie}</span>        
                    <span>Fecha:</span>
                    <span>{nextPremiere.premiere_date_movie}</span>
                </div>
            </div>
        </div>
    )
}
