import React from 'react'
import './List.scss';
import ListItem from './ListItem';

const List = ({ staylist, handleWishBtn }) => {

    return (
        <div className="list__wrap">
            {staylist.map((list) => (
                <ListItem
                    id={list.id}
                    image={list.image}
                    local={list.local}
                    name={list.name}
                    rating={list.rating}
                    review={list.review}
                    price={list.price}
                    wish={list.wish}
                    handleWishBtn={handleWishBtn}
                    days={list.days}
                />
            ))}
        </div>
    )
}

export default List;
