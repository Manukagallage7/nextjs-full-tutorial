'use client'

import './globals.css';

export  default function GlobalError() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h2 className='text-2xl font-bold mb-4'>Something Went Wrong</h2>
            <button
            onClick={() => {
                window.location.reload()
            }}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            >
                Refresh
            </button>
        </div>
    )
}