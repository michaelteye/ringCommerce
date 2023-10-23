import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/images.png';
import SvgSearch from '../icons/search';
import SvgFavorite from '../icons/favorite';
import SvgCart from '../icons/cart';
import SvgDownArrow from '../icons/downarrow';


function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userPopupOpen, setUserPopupOpen] = useState(false);
  const [productsMenu, setProductsMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleUserPopup = () => {
    setUserPopupOpen(!userPopupOpen);
  };

  const toggleProduct = () => {
    setProductsMenu(!productsMenu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className=" border-gray-200 bg-[#FAF9E3]">
      <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="" />
        </Link>
        <div className="flex items-center md:order-2">
          <div className="flex">
            <SvgFavorite className="pr-2" />
            <SvgSearch className="pr-2 text-black" />
            <SvgCart className="pr-2" />
          </div>

          <div className="relative">
            {/* <SvgSearch/> */}
            <button
              type="button"
              onClick={toggleUserPopup}
              className="user-avatar"
            >
              <span className=" sr-only">Open user menu</span>
              <img src={user} className="w-6 h-6 rounded-full" alt="" />
            </button>

            {/* User Popup */}

            {userPopupOpen && (
              <div className="user-popup">
                <div className="user-info">
                  <div className="user-name">Michael Teye</div>
                  <div className="user-email">name@flowbite.com</div>
                </div>
                <ul className="user-actions">
                  <li>
                    <Link
                      to="/checkout"
                      className="user-action"
                      onClick={toggleUserPopup}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="user-action"
                      onClick={toggleUserPopup}
                    >
                      settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="user-action"
                      onClick={toggleUserPopup}
                    >
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="user-action"
                      onClick={toggleUserPopup}
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expnaded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[#FAF9E3] md:dark:bg-[#FAF9E3] dark:border-gray-700">
            <li>
              <Link
                to="/shop"
                className="block py-2 pl-3 pr-4 text-black rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block flex py-2 pl-3 pr-4 text-black rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
                onClick={toggleProduct}
              >
                Categories
                <SvgDownArrow className="w-5 pt-1 pl-1" />
              </Link>
              {productsMenu && (
                <div className="absolute bg-gray-700 pl-4 leading-[40px] pr-4 text-left text-gray-500 font-archivo rounded-lg top-[60px] py-4 font-bold">
                  <p>
                    <Link
                      to='/engagement'
                      className="hover:text-[#FAF9E3] hover:cursor-pointer"
                    >
                      Engagement Ring
                    </Link>
                  </p>
                  <p>
                    <Link
                      to='/wedding'
                      className="hover:text-[#FAF9E3] hover:cursor-pointer"
                    >
                      Wedding Ring
                    </Link>
                  </p>
                  <p>
                    <Link
                      to='/eternal'
                      className="hover:text-[#FAF9E3] hover:cursor-pointer"
                    >
                      Eternal Ring
                    </Link>
                  </p>
                  <p>
                    <Link
                      to='/bridalset'
                      className="hover:text-[#FAF9E3] hover:cursor-pointer"
                    >
                      Bridal Sets
                    </Link>
                  </p>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-black rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-black rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent dark-border-gray-700"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
