import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logo} alt="logo" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
        </header>
    )
}
