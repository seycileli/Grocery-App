import React from 'react';

//Packages
import {Link} from 'react-router-dom';
import {FaShoppingBasket as NavLogo} from 'react-icons/fa'
import {RiShoppingCartLine as CartLogo} from 'react-icons/ri';

//Components

//CSS
import './Nav.css';

function Nav() {
    //JS logic below


    return (
        <>
            <div className="nav__top">
                <p className={'white'}>All of your favorites, in one place</p>
            </div>

            <nav className={'shadow-2'}>
                <div className={'container'}>

                    <ul>
                        <Link to={'/'}>
                            <li className={'nav__logo-name'}>
                                <p className={'nav__logo-p'}>grcy</p>
                                <NavLogo className={'nav__logo-icon'}/></li>
                        </Link>
                    </ul>

                    <ul>
                        <Link to={'product-page'}>
                            <li className={'search'}>
                                <input placeholder={'search'}/>
                            </li>
                        </Link>

                        <Link to={'login'}>
                            <li className={'login'}>Login</li>
                        </Link>

                        <Link to={'checkout'}>
                            <li className={'cart'}>
                                Cart
                                <CartLogo className={'cart__icon-logo'} />
                            </li>
                        </Link>

                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Nav;
