import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import TR from '@/translations/tr.json'
import PanoramaImage from '@/components/PanoramaImage'
import {useContext, useEffect} from 'react'
import {AppContext} from '@/pages/_app'
import dynamic from 'next/dynamic'
import { srcLink } from '@/components/Utils'
import { ABlockImages } from '@/public/images/_AllImages'
import { useRouter } from 'next/router'


// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    const router = useRouter()
    useEffect(() => {
        router.push('/a-block/l2/1')
    }, [])
    return (
        <>
        </>
    )
}
