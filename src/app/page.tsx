import Link from 'next/link'

export default function HomePage() {
    return (
        <>
            <h1>Welcome to the Home Page</h1>
            <Link href='/blog'>Go to Blog</Link>
            <Link href='/products'>Go to Products</Link>
            <Link href='/articles/breaking-news-123?lang=en'>Read in English</Link>
            <Link href='/articles/breaking-news-123?lang=sn'>Read in Sinhala</Link>
        </>
    )
}