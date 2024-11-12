import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <div className=" flex gap-9">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/signIn'>signIn</NavLink>
            <NavLink to='/login'>login</NavLink>
            <NavLink to='/porfile'>porfile</NavLink>
        </div>
    );
};

export default Navber;