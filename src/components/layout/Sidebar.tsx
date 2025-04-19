'use client'

import Link from 'next/link';
import { Home, Compass, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  const navItems = [
    { href: '/', label: 'Ana Sayfa', icon: Home },
    { href: '/explore', label: 'Keşfet', icon: Compass },
    { href: '/messages', label: 'Mesajlar', icon: MessageSquare },
    { href: '/profile', label: 'Profil', icon: User },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r p-4 space-y-4 bg-background">
      <div className="text-2xl font-bold">Rufi</div>
      <nav className="flex flex-col space-y-2 flex-grow">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <Button variant="ghost" className="w-full justify-start">
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
         {/* Clerk kullanıcı butonu buraya eklenecek */}
         <UserButton afterSignOutUrl="/" />
      </div>
    </aside>
  );
};

export default Sidebar; 