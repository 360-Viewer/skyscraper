import React, {useContext, useEffect, useState} from "react";
import styles from "@/styles/Menu.module.css";
import {AppContext} from '@/pages/_app'
import { srcLink } from "./Utils";
import TR from '@/translations/tr.json'
import Router, { useRouter } from "next/router";
import { ABlockImages, BBlockImages, CBlockImages } from "@/public/images/_AllImages";

const MenuItem = ({block, floor, image, children}) => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(children === floor);
    
    function handleClick() {
        router.push(`/${block}/${children}/${image}`);
    }

    useEffect(() => {
        setIsActive(children === floor);
    }, [floor]);

    return (
        <button className={[styles.verticalContainerItem, isActive ? styles.verticalContainerItemActive : ""].join(" ")} onClick={handleClick}>
            <text className={[styles.text, isActive ? styles.textActive : ""].join(" ")}>
                {children.toUpperCase()}
            </text>
        </button>
    )
}

function Menu() {
    const {dayTime, toggleDayTime, currentBlock, setCurrentBlock} = useContext(AppContext);
    const router = useRouter();
    const [blockImages, setBlockImages] = useState(undefined);
    const [levels, setLevels] = useState(
        Object.keys(ABlockImages).map((key, index) => {
            if (index % 2 === 0) {
                return key.split("-")[0];
            }
        }).filter((item) => item !== undefined)
    );
    const {block, floor, image} = router.query;

    
    function aBlockToggled() {
        router.push("/a-block/l2/1");
    }

    function bBlockToggled() {
        router.push("/b-block/l2/1");
    }

    function cBlockToggled() {
        router.push("/c-block/l2/1");
    }

    useEffect(() => {
        if (block === undefined) {
            return;
        }
        setCurrentBlock(block);
        switch (block) {
            case "a-block":
                setBlockImages(ABlockImages);
                setLevels(
                    Object.keys(ABlockImages).map((key, index) => {
                        if (index % 2 === 0) {
                            return key.split("-")[0];
                        }
                    }).filter((item) => item !== undefined)
                );
                break;
            case "b-block":
                setBlockImages(BBlockImages);
                setLevels(
                    Object.keys(BBlockImages).map((key, index) => {
                        if (index % 2 === 0) {
                            return key.split("-")[0];
                        }
                    }).filter((item) => item !== undefined)
                );
                break;
            case "c-block":
                setBlockImages(CBlockImages);
                setLevels(
                    Object.keys(CBlockImages).map((key, index) => {
                        if (index % 2 === 0) {
                            return key.split("-")[0];
                        }
                    }).filter((item) => item !== undefined)
                );
                break;
            default:
                break;
        }
    },[block]);
    return (
        <div>
            <div className={styles.verticalContainerLeft}>
                <button onClick={toggleDayTime} className={styles.dayTimeToggle}>
                <img 
                    src={dayTime ? srcLink("/icons/moon.svg") : srcLink("/icons/sun.svg") }
                    alt="Sun"
                    className={styles.icon}
                />
                </button>
                {
                    [...levels].reverse().map((level) => {
                        return <MenuItem key={level} block={block} floor={floor} image={image} >
                                    {level}
                               </MenuItem>
                    }
                )
                }
            </div>
            <div className={styles.verticalContainerRight}>
                <button className={[styles.verticalContainerItem, currentBlock === "a-block" ? styles.verticalContainerItemActive : ""].join(" ")}
                        onClick={aBlockToggled}
                >
                    <text className={[styles.text, currentBlock === "a-block" ? styles.textActive : ""].join(" ")}>
                            {TR.block_a}
                    </text>
                </button>
                <button className={[styles.verticalContainerItem, currentBlock === "b-block" ? styles.verticalContainerItemActive : ""].join(" ")}
                        onClick={bBlockToggled}
                >
                    <text className={[styles.text, currentBlock === "b-block" ? styles.textActive : ""].join(" ")}>
                        {TR.block_b}
                    </text>
                </button>
                <button className={[styles.verticalContainerItem, currentBlock === "c-block" ? styles.verticalContainerItemActive : ""].join(" ")}
                        onClick={cBlockToggled}
                >
                    <text className={[styles.text, currentBlock === "c-block" ? styles.textActive : ""].join(" ")}>
                        {TR.block_c}
                    </text>
                </button>

            </div>
        </div>
    );
}

export default Menu;