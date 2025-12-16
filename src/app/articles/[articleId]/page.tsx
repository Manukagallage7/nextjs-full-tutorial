'use client';
import Link from 'next/link'
import {use} from 'react';

export default function NewsArticle(
    {params, searchParams}: {
    params: Promise<{articleId: string}>,
    searchParams: Promise<{lang?: "en" | "sn" | "ta"}>}) {
        const {articleId} =  use(params);
        const {lang = 'en'} =  use(searchParams);
    return (
        <div>
            <h1>News Articles {articleId}</h1>
            <p>Reading in language: {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=sn`}>Sinhala</Link>
                <Link href={`/articles/${articleId}?lang=ta`}>Tamil</Link>
            </div>
        </div>
    )
}