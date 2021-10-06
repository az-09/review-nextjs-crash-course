import Link from 'next/link'
import style from './Navigation.module.css'

export default function Navigation() {
    return (
        <header className={style.header}>
            <div className={style.logo}>NextJs Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup'>Add New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}