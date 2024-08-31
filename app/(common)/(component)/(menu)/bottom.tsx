"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import SignUpIcon from "../../../../public/image/sign_up.png"
import SignOutIcon from "../../../../public/image/sign_out.png"
import styles from "./bottom.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function MenuBottom() {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if(token){
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);

        router.push("/login");
    };

    return (
        <div className={styles.container}>
            {isLoggedIn ? (
                <div className={styles.button_container}>
                    <div className={styles.description_wrapper}>
                        <span>로그아웃</span>
                    </div>
                    <div className={styles.button_wrapper}>
                            <Image
                                src={SignOutIcon}
                                alt="로그아웃 버튼"
                                onClick={handleLogout}
                            />
                    </div>
                </div>
            ) : (
                <div className={styles.button_container}>
                    <div className={styles.description_wrapper}>
                        <span>로그인</span>
                    </div>
                    <div className={styles.button_wrapper}>
                        <Link href="/login">
                            <Image
                                src={SignUpIcon}
                                alt="로그인 버튼"
                            />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
