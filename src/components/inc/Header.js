import React, { useState, useEffect } from 'react'
import './Header.scss';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";



// (function scrHeader () {
//     window.scroll(function () {
//         let thisPos = this.scrollTop();
//         console.log(thisPos);
//     });
// })();

const Header = ({ setStayObj }) => {
    const [scrollTop, setScrollTop] = useState(0);
    // const [sortValue, setSortValue] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        // console.log(scrollTop);
        const headerDom = document.querySelector('.header');

        if (scrollTop > 100) {
            headerDom.style.position = 'fixed'; 
        }else{
            headerDom.style.position = 'absolute'; 
        }
    }, [scrollTop]);

    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
    }

    // useEffect(() => {
    //     const onScroll = e => {
    //         setScrollTop(e.target.documentElement.scrollTop);
    //     };
    //     window.addEventListener("scroll", onScroll);

    //     console.log(scrollTop);
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, [scrollTop]);
    
    const onChangeSelect = (e) => {
        e.preventDefault();

        let sortValue = e.target.value;
        // console.log(e.target.value);
        setStayObj(sortValue);
    }

    const onBasicList = () => {
        alert('This page is Basic List');
    }

    const onWishcList = () => {
        alert('This page is Wish List');
    }

    return (
        <div className="header__wrap">
            <div className="header">
                <div className="header__navi lt">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <Link to="/">
                    <h1 className="header__logo" onClick={onBasicList}>Header</h1>
                </Link>

                <div className="header__btns rt">
                    <div>
                        <Link to="/wishlist">
                            <button onClick={onWishcList}>Wish List</button>
                        </Link>
                    </div>
                    <div>
                        <select name="sort" id="sort" onChange={onChangeSelect}>
                            <option value="">-정렬-</option>
                            <option value="높은가격순">높은가격순</option>
                            <option value="낮은가격순">낮은가격순</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
