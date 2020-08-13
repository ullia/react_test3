import React from 'react'
import './List.scss';
import List from './List';

const WishList = ({ staylist, handleWishBtn }) => {
    const { wish } = staylist;

    const wishCheck = () => {
        const wishCheckVar = staylist.map(item => item.wish);
        
        console.log("위시리스트 배열 갯수체크 : " + wishCheckVar.length);
        return wishCheckVar.length;
    }

    return (
        <>
            {wishCheck() === 0 ? <h3>위시 리스트에 담긴 상품이 없습니다.</h3> : <List staylist={staylist} handleWishBtn={handleWishBtn} />}
            {/* <List staylist={staylist} /> */}
        </>
    )
}

export default WishList;
