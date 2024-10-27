import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <nav className="sticky top-0 w-full bg-gray-900 backdrop-blur-md rounded-md " >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="text-white font-bold text-xl">Synthesia</a>
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><Link to="/library" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Library</Link></li>
                            <li><Link to="/settings" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Settings</Link></li>
                            <li><Link to="/profile" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Profile</Link></li>
                            
                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden" onClick={toggleMenu}>
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle classes based on menu state */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <li><Link to="#" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Settings</Link></li>
                    <li><Link to="#" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Profile</Link></li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;