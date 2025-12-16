import { Metadata } from 'next';
import { ErrorWrapper } from './error-wrapping';

export const metadata: Metadata = {
title: {
    default: 'Next.js Tutorial',
    template: '%s | Next.js Tutorial',
},
description: 'A Next.js tutorial application.',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
    <html lang="en">
    <body>
        <header
        style={{
            backgroundColor: 'lightblue',
            padding: '1rem',
        }}
        >
        <p>Header</p>
        </header>
        <ErrorWrapper>
        {children}
        </ErrorWrapper>
        <footer
        style={{
            backgroundColor: 'lightgray',
            padding: '1rem',
            marginTop: '1rem',
        }}
        >
        <p>Footer</p>
        </footer>
    </body>
    </html>
);
}