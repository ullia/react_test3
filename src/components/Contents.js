import React from 'react'
import './Contents.scss';
import List from './List';
import WishList from './WishList';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

const Contents = ({ staylist }) => {
    return (
        <div className="content_wrap">
            <Route exact path="/" render={() => <List staylist={staylist} />} />
            <Route path="/wishlist" render={() => <WishList />} />
            {/* <Route exact path="/list" component={List} />
            <Route path="/wishlist" component={WishList} /> */}
        </div>
    )
}

export default Contents;
