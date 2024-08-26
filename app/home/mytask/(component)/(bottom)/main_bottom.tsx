"use client"

import Image from "next/image"
import { 
    useCallback,
    useEffect, 
    useState 
} from "react"

import { TaskDto } from "../../task.dto"
import Tasks from "../(tasks)"
import TextButton from "@/app/(common)/(component)/(button)"
import Spacer from "@/app/(common)/(component)/(spacer)"

import CloseIcon from "../../../../../public/image/close.png"
import styles from "./main_bottom.module.css"

export default function MyTaskMainBottom({
    tasks,
}: MyTaskMainBottom) {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [runningTasks, setRunningTasks] = useState<TaskDto[]>([])
    const [stopTasks, setStopTasks] = useState<TaskDto[]>([])
    const [doneTasks, setDoneTasks] = useState<TaskDto[]>([])

    const onShowModal = (state: boolean) => setShowModal(state)
    const sortTasks = useCallback(() => {
        const running: TaskDto[] = []
        const stop: TaskDto[] = []
        const done: TaskDto[] = []

        for(let i=0; i<tasks.length; ++i) {
            const task = tasks[i]
            switch(task.status) {
                case "RUNNING":
                    running.push(task)
                    break
                case "STOP":
                    stop.push(task)
                    break
                case "DONE":
                    done.push(task)
                    break
            }
        }

        setRunningTasks(running)
        setStopTasks(stop)
        setDoneTasks(done)
    }, [tasks])

    useEffect(() => { sortTasks() }, [sortTasks])

    return (
        <div className={styles.container}>
            <Tasks tasks={runningTasks} onShowModal={onShowModal} type="RUNNING"/>
            <Tasks tasks={stopTasks} onShowModal={onShowModal} type="STOP"/>
            <Tasks tasks={doneTasks} onShowModal={onShowModal} type="DONE"/>
            { showModal ? EditTaskStateModal({
                onShowModal,
            }) : <></> }
        </div>
    )
}

interface MyTaskMainBottom {
    tasks: TaskDto[]
}

function EditTaskStateModal({
    onShowModal,
}: EditTaskStateModalProps) {
    return (
        <div className={styles.state_modal_background}>
            <div className={styles.state_modal}>
                <div 
                className={styles.row_container}
                style={{ justifyContent: "space-between" }}
                >
                    <span>일정 이름</span>
                    <Image
                    width={12}
                    height={12}
                    src={CloseIcon}
                    style={{ cursor: "pointer" }}
                    alt="닫기 아이콘"
                    onClick={() => onShowModal(false)}
                    />
                </div>
                <p>선택하신 일정의 상태를 변경 하시겠어요?</p>
                <div className={styles.row_container}>
                    <TextButton
                    text="완료"
                    onClick={() => {}}
                    width={65}
                    height={15}
                    fontSize={14}
                    />
                    <Spacer spacing={5} direction="row"/>
                    <TextButton
                    text="중단"
                    type="blue"
                    onClick={() => {}}
                    width={65}
                    height={15}
                    fontSize={14}
                    />
                    <Spacer spacing={5} direction="row"/>
                    <TextButton
                    text="삭제"
                    type="blue"
                    onClick={() => {}}
                    width={65}
                    height={15}
                    fontSize={14}
                    />
                </div>
            </div>
        </div>
    )
}

interface EditTaskStateModalProps {
    onShowModal: (state: boolean) => void
}