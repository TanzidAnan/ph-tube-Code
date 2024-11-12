import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <h1>Tanzid anan</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;