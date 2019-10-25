import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

    Card.propTypes ={
        cardParametrs: PropTypes.object, // параметры карточки
    }

    const {
    url,
    title,
    descript,
    statusBtn,
    } = props.cardParametrs;
    return ( 
      <div className="card">
            <img src={url} class="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{descript}</p>
               {statusBtn ?<a href="#" className="btn btn-primary">Go forward</a>: <a href="#" className="btn btn-secondary">Go backward</a> } 
            </div>
      </div>

     );
}
 
export default Card;