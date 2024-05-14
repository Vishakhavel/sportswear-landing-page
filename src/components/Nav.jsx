import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';

import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      {/* using semantic tags for better accessibility */}
      <nav className='flex justify-between items-start max-container'>
        <a href='/'>
          <img src={headerLogo} alt='logo' width={130} height={29} />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* hidden usually, but display block when screen is smaller */}
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
