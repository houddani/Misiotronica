import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            
            <img
              src={props.src}
              alt="Producs"
              className="cards__item__img"
              
            ></img>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <div className="cart-logo">
              <i class="fa-solid fa-cart-plus"></i>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
