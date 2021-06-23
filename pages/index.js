import Link from 'next/link'
import Head from "next/head";
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <>
            <Head>
            <title>Fishes | Home</title>
                <meta name="Fish, asus18019, 05024787555, voloxanvitya@yandex.ua, fakfkfkff123123123" content="Fish, asus18019, 05024787555, voloxanvitya@yandex.ua, fakfkfkff123123123" />
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
                <Link href="/fishes">
                    <a className={styles.btn}>See fishes Listing</a>
                </Link>
                <Link href="/todo">
                    <a className={styles.btn}>Todo list</a>
                </Link>
            </div>
        </>
    )
}

export default Home;
