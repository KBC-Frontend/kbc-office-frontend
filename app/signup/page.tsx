"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image";

import Spacer from "../(common)/(component)/(spacer)"
import { APIManager } from "../(common)/(api)";
import { UserJson } from "../(common)/(interface)";

import styles from "./sign_in.module.css" 
import SignatureIconRemoveBackground from "../../public/image/signature_icon_remove_background.png"

export default function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setName] = useState("");
    const [token, setToken] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const savedToken = localStorage.getItem("token") || "";
        setToken(savedToken);
    }, []);

    const handleSignup = async () => {
        if(password !== confirmPassword){
            setErrorMessage("비밀번호가 일치하지 않습니다.");
            return;
        }
        try{
            const response = await APIManager.post<UserJson>({
                route: "/join",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                    "Authorization": `Bearer ${token}`,
                },
                body: {
                    email,
                    password,
                    username,
                },
            });

            if("data" in response){
                if(response.code === 201){
                    setErrorMessage("");
                }
                else{
                    setErrorMessage("회원가입에 실패했습니다.");
                }
            }
            else{
                setErrorMessage("알 수 없는 오류가 발생했습니다.");
            }
        }
        catch(error){
            setErrorMessage("회원가입 중 오류가 발생했습니다.");
        }
    };
    return  (
            <div className={styles.container}>
                <div className={styles.inputdata}>
                    <Link href="/home">
                        <Image
                        src={SignatureIconRemoveBackground}
                        alt="홈으로 이동"
                        width={150}
                        height={150}
                        className={styles.headimage}
                        />
                    </Link>
                    <input
                    className={styles.input}
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    className={styles.input}
                    placeholder="비밀번호"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <input
                    className={styles.input}
                    placeholder="비밀번호 확인"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <input
                    className={styles.input}
                    placeholder="이름"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    />
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                </div>
                <div className={styles.subitems}>
                    <button className={styles.signinbutton} onClick={handleSignup}>회원가입</button>
                    <div className={styles.subtext}>
                        <h1>이미 계정이 있으세요?</h1>
                        <Spacer spacing={10} direction="row"/>
                        <Link href="/login" legacyBehavior>
                            <a className={styles.detailtext}>로그인</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }