import IBKDetailBottom from "./(component)/(bottom)"
import IBKDetailTop from "./(component)/(top)"
import styles from "./ibk_detail.module.css"

export default function IBKDetail() {
    return (
        <div className={styles.container}>
            <IBKDetailTop/>
            <IBKDetailBottom/>
        </div>
    )
}