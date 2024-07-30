"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import Spacer from "@/app/(common)/(component)/(spacer)"

import EmojiIcon from "../../../../public/image/emoji1.png"
import UnSubscribeIcon from "../../../../public/image/un_subscribe.png"
import SubscribeIcon from "../../../../public/image/subscribe.png"
import styles from "./ibk_main_top.module.css"
import Answer from "./(component)/(answer)"

export default function IBKMainTop() {
    const [subscribe, setSubscribe] = useState<boolean>(false)
    
    // 보류
    const { height } = useWindowSize()
    const emojiSize = ((height ?? 1080) / 1080) * 100

    return (
        <div className={styles.container}>
            <div className={styles.left_container} style={{ justifyContent: "space-between" }}>
                <span>오늘의 질문!</span>
                <Image
                src={subscribe ? SubscribeIcon : UnSubscribeIcon}
                alt="구독 아이콘"
                className={styles.button}
                onClick={() => setSubscribe(!subscribe)}
                />
                <Image
                src={EmojiIcon}
                alt="이모지 아이콘"
                width={72}
                height={72}
                />
                <p>요즘 내가 갖고 있는 가장 큰 불만거리는 무엇인가요?</p>
            </div>
            <div className={styles.right_container}>
                <div className={styles.action_container}>
                    <span>0개의 관심</span>
                    <Spacer spacing={5}/>
                    <span>0개의 답변</span>
                </div>
                <div className={styles.answer_container}>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                    <Answer/>
                </div>
            </div>
        </div>
    )
}

function useWindowSize() {
    const [size, setSize] = useState<Partial<{ width: number, height: number }>>({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        const handleWindowSize = () => {
            if(typeof window === undefined) return
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleWindowSize)
        return () => window.removeEventListener("resize", handleWindowSize)
    }, [])
    
    return size
}