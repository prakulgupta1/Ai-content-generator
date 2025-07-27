"use client";
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import UsageTrack from './UsageTrack';

export default function SideNav() {
  const currentPath = usePathname();

  const MenuList = [
    { name: 'Home', icon: Home, path: '/dashboard' },
    { name: 'History', icon: FileClock, path: '/dashboard/history' },
    { name: 'Billing', icon: WalletCards, path: '/dashboard/billing' },
    { name: 'Setting', icon: Settings, path: '/dashboard/settings' },
  ];

  useEffect(() => {
    console.log(currentPath);
  }, []);

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <div className="text-2xl font-bold">Cognitext</div>
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div
              className={`flex gap-2 mb-2 p-3
                hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                ${currentPath === menu.path ? 'bg-primary text-white' : ''}
              `}
            >
              <menu.icon className="h-7 w-7" />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}