
import { BsCoin } from 'react-icons/bs';
import logo from '../assets/logo.png'

const Nav = ({coin}: {coin: number}) => {


    return (
        <nav className="bg-red-100">
            <div className='mx-auto w-full max-w-7xl px-4 flex justify-between items-center'>
                <img src={logo} alt="" />

                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <h2 className='font-bold text-3xl text-yellow-500 flex items-center'>{coin}<BsCoin /></h2>
            </div>
        </nav>
    );
};

export default Nav;