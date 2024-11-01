import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../components/buttons/login-button";
import { LogoutButton } from "../../components/buttons/logout-button";
import { SignupButton } from "../../components/buttons/signup-button";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="flex justify-between items-center border-b py-3 px-4"> {/* Ensure padding for spacing */}
            <Link to="/">
                <img src="/src/book.png" width={30} alt="Book Icon" />
            </Link>
            <div className="flex items-center gap-3"> {/* Ensure items in this div are also centered */}
                <div className='about'>
                    <Link to="/about">About</Link>
                </div>
                <div className='newsletter'>
                    <Link to="/newsletter">Newsletter</Link>
                </div>
                <div className='blog'>
                     <Link to="/blog">Blog</Link>
                 </div>
                {isAuthenticated && (
                    <div className='create'>
                     <Link to="/journal/create">Create</Link>
                 </div>
                )}
            </div>
            {!isAuthenticated && (
                    <>
                        {/* <SignupButton /> */}
                        <LoginButton />
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <LogoutButton />
                    </>
                )}
        </div>
    );
};

export default Navbar;
