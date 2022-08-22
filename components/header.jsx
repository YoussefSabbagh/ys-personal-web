import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <Link href="/">
        <a className="text-xl font-title text-yellow-300 md:text-2xl">
          Youssef Frontend
        </a>
      </Link>

      <nav>
        <button
          className="hover:text-yellow-300 md:hidden"
          onClick={handleShowToggleMenu}
        >
          {!showMenu ? <FaBars size={24} /> : <FaTimes size={24} />}
        </button>
        <ul
          onClick={handleShowToggleMenu}
          className={`menuMobile ${
            showMenu ? ' translate-x-0 ' : 'translate-x-full'
          } md:menuDesktop`}
        >
          <li className="headerLink">
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </li>
          <li className="headerLink">
            <Link href="/#about">
              <a className="">About Me</a>
            </Link>
          </li>
          <li className="headerLink">
            <Link href="#skills">
              <a className="">Skills</a>
            </Link>
          </li>
          <li className="headerLink">
            <Link href="/#portfolio">
              <a className="">Portfolio</a>
            </Link>
          </li>
          <li className="headerLink">
            <Link href="#qualification">
              <a className="">Qualifications</a>
            </Link>
          </li>
          <li className="headerLink">
            <Link href="/contact">
              <a className="">Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
