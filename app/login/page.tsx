import styles from "./log_in.module.css" 

export default function login(){
    return  (
            <div className={styles.container}>
                <div className={styles.inputdata}>
                    <h1 className={styles.headtext}>log-in page</h1>
                        <input className={styles.input} placeholder="이메일 또는 아이디"/>
                        <input className={styles.input} placeholder="비밀번호"/>
                        <button className={styles.loginbutton}>로그인</button></div>
                <div className={styles.subitems}>
                    <div className={styles.staylogin}>
                        <button className={styles.staybutton}></button>
                        <h1 className={styles.text}>로그인 상태 유지</h1>
                    </div>
                    <div className={styles.extraoption}>
                        <h1 className={styles.optiontext}>재설정</h1>
                        <h1 className={styles.optiontext}>회원가입</h1>
                    </div>
                </div>
            </div>
        )
    }