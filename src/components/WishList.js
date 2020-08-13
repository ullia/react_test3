import React from 'react'
import './List.scss';
import List from './List';

const WishList = ({ staylist }) => {
    return (
        <List staylist={staylist}/>
    )
}

export default WishList;
