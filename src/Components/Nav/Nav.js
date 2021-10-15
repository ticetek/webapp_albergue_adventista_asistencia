import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Inicio', href: '/', current: true },
    { name: 'Pacientes', href: '/pacientes', current: false }
]

function Nav() {
    return (
        <div className="bg-gray-800 rounded-md p-5">
            <nav>
                <ul className="flex">
                    {navigation.map((item) => {
                        return <li className="mr-3 text-gray-400 font-bold"><Link to={item.href}>{item.name}</Link></li>
                    })}
                </ul>
            </nav>
        </div>);
}

export default Nav;