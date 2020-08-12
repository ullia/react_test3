import React from 'react'
import './ListItem.scss';
import cn from 'classnames';

const ListItem = ({ image, local, name, rating, review, price, wish, days }) => {
    
    return (
        <div className="list__item">
            <div className="item__image">
                <img src={image} alt=""/>
            </div>
            <div className="item__info">
                <h5>{local}</h5>
                <h4>{name}</h4>
                <div className="item__info__ratings">
                    <ul>
                        <li><span className="on"></span></li>
                        <li><span className="on"></span></li>
                        <li><span className="on"></span></li>
                        <li><span className="on"></span></li>
                        <li><span></span></li>
                    </ul>
                    <span className="item__info__review__counter">{review}</span>
                </div>
                <p>{price} 원<em> / {days}</em></p>
                <button className={cn("item__info__btn__wish", {wish})} type="button">Wish</button>
            </div>
        </div>
    )
}

export default ListItem;
