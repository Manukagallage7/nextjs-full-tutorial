import {notFound, redirect} from 'next/navigation';

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}

export default async function ProductReview({
    params,
}:{
    params: Promise<{productId: string, reviewId: string}>
}) {
    const random = getRandomInt(2);
    if(random === 1) {
        throw new Error('Error Loading Review')
    }

    const {productId, reviewId} = await params;

    if(parseInt(reviewId) > 5){
        notFound();
    }

    if(parseInt(productId) % 2 === 0){
        redirect('/');
    }

    return (
        <>
        <h1>Product Review Page</h1>
        <p>Product ID: {productId}</p>
        <p>Review ID: {reviewId}</p>
        </>
    )
}