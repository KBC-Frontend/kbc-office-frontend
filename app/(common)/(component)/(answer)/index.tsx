"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import Spacer from "../(spacer)"
import { IceBreakingCommentDto } from "../../(interface)"
import { getColor, getPinIconFromColor } from "@/app/home/icebreaking/[id]/(component)/(registanswer)"
import { userModel } from "../../(model)"

import SubscribeIcon from "../../../../public/image/subscribe.png"
import UnSubscribeIcon from "../../../../public/image/un_subscribe.png"
import DefaultIcon from "../../../../public/image/pin_default.png"
import styles from "./answer_detail.module.css"

export default function AnswerDetail({
    comment,
}: AnswerDetailProps) {
    const [subscribe, setSubscribe] = useState<boolean>(false)

    useEffect(() => { setSubscribe(userModel.isSubscribeComment(comment.id)) }, [])

    const onSubcribe = async () => {
        const user = userModel.getUserData()
        
        if(subscribe) {
            alert("이미 관심을 표시한 답변 입니다.")
            return
        } else if(!user) {
            alert("로그인이 필요한 서비스 입니다.")
            return
        }

        try {
            const result = await userModel.subscribeComment(comment.id, comment.username)
            comment.likes = result
            setSubscribe(true)
        } catch(e) {
            console.log(e)
            alert("요청을 처리하는데 문제가 발생했습니다.")
            return
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.memo_container}>
                <Image
                src={getPinIconFromColor(comment.pinColor) ?? DefaultIcon}
                width={18}
                height={18}
                alt="핀 아이콘"
                />
                <div 
                className={styles.content_wrapper}
                style={{ backgroundColor: `${getColor(comment.memoColor) ?? "#FFFA5E"}` }}
                >{comment.content}</div>
            </div>
            <div className={styles.info_container}>
                <div>
                    <span>{comment.username}</span>
                    <Spacer spacing={5} direction="column"/>
                    <p>{comment.username}</p>
                    <p>{comment.likes}개의 관심을 받았습니다.</p>
                </div>
                <p>작성일 {new Date(comment.createdAt).toLocaleDateString()}</p>
            </div>
            <Image
            src={subscribe ? SubscribeIcon : UnSubscribeIcon}
            alt="좋아요 아이콘"
            onClick={onSubcribe}
            style={{ 
                cursor: "pointer",
                padding: "10px" 
            }}
            />
        </div>
    )
}

interface AnswerDetailProps {
    comment: IceBreakingCommentDto
}