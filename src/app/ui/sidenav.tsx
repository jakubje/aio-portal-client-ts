'use client';

import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import UserSection from './usersection';
import { usePathname } from 'next/navigation';
import { CIcon } from '@coreui/icons-react';
import { cilFootball, cilWallet, cilNewspaper, cilHome, cilSettings } from '@coreui/icons';
import { MoveLeft } from 'lucide-react';

type Menu = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const menus: Menu[] = [
  {
    name: 'Home',
    href: '/',
    icon: <CIcon size="sm" icon={cilHome} />,
  },
  {
    name: 'Crypto',
    href: '/crypto',
    icon: (
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEzUlEQVR4nO2aeYjVVRTHf6PjZMvQqkGCTQkWohMS7QPRoBVjVhJBtA2RFFFSMBQVadli0mILRRRN0SbUHxlBRZRJ0yJFUCiaZWrYMla4YmmTzSeO8711+fXmdc9v3nszkl8Y5vF7Z/3de5Z77suyvfgfABgHvA5sBD4DLsz2NABNwAb+jUeAumxPAHA0sEyGfwgcBdwI/KFnrwCXAbcBbwFrgd+ApcCYwTD4OOBR4B1tHfv7HvhTBq8EDono24AtlMfsWjsxGdjZjzHbgCeAw0rwHQnMBZ4BHgAuAe6PeK+ptSOzIuW2bU4Cjpeh9RGdbavR/ciok1O9kmOrdWCtHTkW+F0GrAYOLRHstufRVnsB2C/6vhFYlFvJ62rqRABwefQ2vwZa9PwE4Ec93wz8qs9vmjPAqcCKnBMfA8OywQJwbc6gjZFzSyxOFE+/lIilNdHnMwbNiQDg8ZyBtgrzgIaIZgLwPrAL+Ba4C7gyrGY2FADso1QbAj9piwDPimd+NlQAXCyjvnDwfC6eaVEWawEeAz5RnH0HdAE3A4dX1QkZsa+qs2FsIs8PorfC2irjy8GyZFstnAnp9vxE+vWifzdn8DJgJnCAdQbAFOBlxd45tXDkVRlyVQJtA7DqP1ZgG/Bkzfov4CDg+mirWE25CTjRCl9EZ6n4LGAB8HMJwy1hzFf/1hU1mdtTV7moA1bc7o0KXtjHeWzK0cRF0HqurdEzS9GnSb61Owuj7mBaNZxojQqa1YaXgDOBEcDpwMMydEPkoLXrbwO3As25F9KuVsfQq9q0u6UBOtSHtVWjmodlN2MnV0hug+rQVsn+Kna4ogAejN7andU47dF3RA41xlaitdIK7ERn2AFcVFHhpevS89G2rEywaw/3Kh4ucPJaoVtaQGed0i8qtqd4ZeQFjo+yjvsEF9JRQd3DgE6JsJTdlBUUVB9V7OcSecrBVvQb4A7bPonyRiipGN4rFJfADRKwPvUYSjo+cjgzVmcd/65QwHWLeXoltpJS7BSdSQy3O+MUOfR3x+BZjU8rHRNyxrDaIXd4NC/r8Bi0xrsaDkds+GDY6ZR9nvhsfjY8haFZDN3eoUCiI1OLHHPpW5WfxHtyCsNsET/lUZQYI1OjGHFPFvmntsxNIV4s4hkFFKWiO551OeRPF//iFOJwtphURUfQtUO9U36TeFelEFs/ZTi4qCNlvs+n4I4CZcGwJYU4tOkjPUrEuxsJdCEFr3TKHym+nhTiMP4/wqPE6UhIwTuc8seIb3MK8ZcinuhR4nSkaApuFt+KFGILQsO5HiUpjpRIwXOc8meIb1EKsU1BDA95lIjXgw+8cUjflCUtSegM0qvhgSvXJxi/S4OGOQWc2F/nErNtXCqTXVQa5nmUFY2ZRFn3SdwbHqaJuic072cOQLltn66i/AHA1bLFatyEzAPgiujiprO/+8BqAhitQR6ypX0gV2xh0m5n96c1jEs/3Ph1Nmq82hnNC+z/pQMVbMH/WrQ6IWiXy7FbdII72/oz/WhglLU4uflvo56NEs0k8bRLhslaHt3Vh1Uw3eMr8ZLi29x79OOAHqqHHum4GzimYg6Uad5aNIm3CfuLugC1qfo6Da83aZoesD16vk60S8S7QLJaUocSe5ENcfwFXR51csDDHuYAAAAASUVORK5CYII=" />
    ),
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    icon: <CIcon size="sm" icon={cilWallet} />,
  },
  {
    name: 'News',
    href: '/news',
    icon: <CIcon size="sm" icon={cilNewspaper} />,
  },
  {
    name: 'Football',
    href: '/football',
    icon: <CIcon size="sm" icon={cilFootball} />,
  },

  {
    name: 'Settings',
    href: '/settings',
    icon: <CIcon icon={cilSettings} />,
  },
];

export default function SideNav() {
  const [open, setOpen] = React.useState<Boolean>(true);
  const pathname = usePathname();

  return (
    <nav className={`h-screen bg-pink-500 ${open ? 'w-64' : 'w-20'} duration-300 flex flex-col`}>
      <UserSection />

      <div className="flex-1 p-5 relative bg-green-700">
        <MoveLeft
          className={`bg-red-700 rounded-full absolute -right-3 top-2 border cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />

        <ul>
          {menus.map((menu) => (
            <li key={menu.name} className="mb-2">
              <Link
                href={menu.href}
                className={clsx('flex items-center p-2 rounded-lg transition-colors', {
                  'bg-yellow-100 text-red-600': pathname === menu.href,
                  'hover:bg-gray-300': pathname !== menu.href,
                  'justify-center': !open,
                })}
              >
                <span className="flex items-center justify-center w-6 h-6">{menu.icon}</span>
                {open && <span className="ml-3">{menu.name}</span>}

                {/* <span className={`${!open && 'scale-0'}`}>{menu.name}</span> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
