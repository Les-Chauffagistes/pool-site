import type { CardProps } from "./Card"
import Card from "./Card"
import styles from "../../pool.module.css"


export default function CardBar({ cardsInfo }: Readonly<{ cardsInfo: CardProps[] }>) {
    return (
        <div className={styles.grid + " " + styles.grid4}>
            {cardsInfo.map(info => {
                return <Card key={info.title} title={info.title} value={info.value} Icon={info.Icon} />
            })}
        </div>
    )
}