
import Card from '../ui/Card'
import style from './MeetupList.module.css'
import { useRouter } from 'next/router'

export default function MeetupList(props) {
    const router = useRouter();
    function showDetailHandler() {
        router.push('/' + props.id)
    }
    return (
        <div>
            <ul className={style.list}>
                {props.meetup.map((meetup) => (
                    <li className={style.item}>
                        <Card>
                            <div className={style.image}>
                                <img src={meetup.image} alt={meetup.title}/>
                            </div>
                            <div className={style.content}>
                                <h3>{meetup.title}</h3>
                                <address>{meetup.address}</address>
                            </div>
                            <div className={style.actions}>
                                <button onClick={showDetailHandler}>Show Details</button>
                            </div>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    )
}