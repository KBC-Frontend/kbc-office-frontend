import Spacer from "../(common)/(component)/(spacer)"
import styles from "./sign_in.module.css" 

export default function signin(){
    return  (
            <div className={styles.container}>
                <div className={styles.inputdata}>
                    <h1 className={styles.headtext}>todolist sign-in</h1>
                    <input className={styles.input} placeholder="이메일"/>
                    <input className={styles.input} placeholder="비밀번호"/>
                    <input className={styles.input} placeholder="비밀번호 확인"/>
                    <input className={styles.input} placeholder="이름"/>
                </div>
                <div className={styles.subitems}>
                    <button className={styles.signinbutton}>회원가입</button>
                    <div className={styles.subtext}>
                        <h1>이미 계정이 있으세요?</h1>
                        <Spacer spacing={10} direction="row"/>
                        <h1 className={styles.detailtext}>로그인</h1>
                    </div>
                </div>
            </div>
        )
    }