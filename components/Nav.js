import { usePathname } from 'next/navigation';
// import data
import { nav } from '../data';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className='flex gap-x-10'>
        {nav.map((item, index) => {
          const isActive = pathname.startsWith(item.href);
          // destructure item
          const { href, name } = item;
          return (
            <li key={index}>
              <a className={`${isActive ? 'text-accent' : ''} hover:text-accent`} href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
