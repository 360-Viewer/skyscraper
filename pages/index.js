import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        router.push('/a-block/l2/1');
    }, [])
    return (
        <>
        </>
    )
}
