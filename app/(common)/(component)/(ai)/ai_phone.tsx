"use client"

import Image from "next/image"
import { useState } from "react"

import Spacer from "../(spacer)"

import AIIcon from "../../../../public/image/AI_Icon_entered_phone.png"
import SendIcon from "../../../../public/image/send.png"
import styles from "./ai_phone.module.css"
import ChatBubble from "./ai_chat_bubble"

export default function AIPhone({
    isOpen
}: AIPhoneProps) {
    const [input, setInput] = useState<string>("")
    return (
        <div className={styles[`container_${isOpen ? "open" : "close"}`]}>
            <div className={styles.title_container}>
                <Image
                src={AIIcon}
                width={48}
                height={48}
                alt="AI"
                />
                <Spacer spacing={5}/>
                <span>AI_Shark</span>
            </div>
            <ul className={styles.chat_container}>
                <li className={styles.channel_info_container}>
                    <Image
                    src={AIIcon}
                    width={64}
                    height={64}
                    alt="AI"
                    />
                    <Spacer spacing={10} direction="column"/>
                    <span>HarpSharp 챗봇</span>
                    <Spacer spacing={2.5} direction="column"/>
                    <p>AI에게 무엇이든 질문해 보세요!</p>
                </li>
                <ChatBubble
                content="무엇이든 물어보세요!"
                role="ai"
                />
                <ChatBubble
                content="하이요"
                role="user"
                />
                <ChatBubble
                content="바이요"
                role="ai"
                />
                <Spacer spacing={100} direction="column"/>
            </ul>
            <div className={styles.input_container}>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="메시지를 입력해 주세요."
                />
                <div className={styles.send}><Image src={SendIcon} alt="전송 아이콘"/></div>
            </div>
        </div>
    )
}

interface AIPhoneProps {
    isOpen: boolean
}