import React from 'react';
import { NavLink } from 'react-router-dom';

const Page_404 = () => {
    return (<>


        <div className="mainbox">
            <div className="err">404</div>
            <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <NavLink exact activeClassName="Active" to='/'>Home</NavLink> and try from there.</p></div>
        </div>

    </>);
}

export default Page_404;