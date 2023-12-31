import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import LinkWrap from '../FormElements/LinkWrap';
import LinkButton from '../FormElements/LinkButton';

interface HeaderProps {
    [key: string]: any;
}

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <div className="navbar bg-base-100 border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><LinkWrap href="/"><AiOutlineHome /> &nbsp;Home</LinkWrap></li>
                        <li><LinkWrap href="/favorites"><MdOutlineFavoriteBorder /> &nbsp;Favorites</LinkWrap></li>
                    </ul>
                </div>
                <LinkButton
                    href="/"
                    className="btn btn-ghost text-xl"
                    title="Spaceflight News"
                />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><LinkWrap href="/"><AiOutlineHome /> &nbsp;Home</LinkWrap></li>
                    <li><LinkWrap href="/favorites"><MdOutlineFavoriteBorder /> &nbsp;Favorites</LinkWrap></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
