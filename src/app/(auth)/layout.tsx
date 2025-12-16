'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useState}from 'react';
import "./style.css";

const navLinks = [
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'Forgot Password', href: '/forgot-password' },
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [input, setInput] = useState('');
    const pathname = usePathname();
    return (
        <div>
            <div>
                <input className='m-1 border-2' value={input} onChange={(e)=> setInput(e.target.value)} />
            </div>
            {navLinks.map((link) => {
                const isActive = link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <Link
                        href={link.href}
                        key={link.name}
                        className={isActive ? 'active-link' : ''}
                    >
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}