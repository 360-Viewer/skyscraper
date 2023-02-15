import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import TR from '@/translations/tr.json'
import PanoramaImage from '@/components/PanoramaImage'
import {useContext, useEffect, useState} from 'react'
import {AppContext} from '@/pages/_app'
import dynamic from 'next/dynamic'
import { srcLink } from '@/components/Utils'
import { ABlockImages, BBlockImages, CBlockImages } from '@/public/images/_AllImages'
import { useRouter } from 'next/router'


export default function Home() {
    const {dayTime} = useContext(AppContext);
    const router = useRouter();
    const {block, floor, image} = router.query;
    const [blockImages, setBlockImages] = useState(undefined);
    const [query, setQuery] = useState("");

    const SetBlockImages = () => {
        switch (block) {
            case "a-block":
                setBlockImages(ABlockImages);
                break;
            case "b-block":
                setBlockImages(BBlockImages);
                break;
            case "c-block":
                setBlockImages(CBlockImages);
                break;
            default:
                break;
        }
    }
  
    useEffect(() => {
        if (block === undefined || floor === undefined || image === undefined) {
            return;
        }
        SetBlockImages();
        setQuery(`${floor}-${image}-${dayTime ? "day" : "night"}`);
    },[block, floor, image]);

    useEffect(() => {
        setQuery(`${floor}-${image}-${dayTime ? "day" : "night"}`);
    },[dayTime]);
    
    const GetImage = () => {
        return (
            blockImages ? (
                <PanoramaImage src={srcLink(blockImages[query])} />
            )
            : (
                <></>
            )
        )
    }
    return (
        <main className={styles.main}>
            <GetImage />
        </main>
    );
}
