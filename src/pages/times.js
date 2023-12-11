import React from 'react';
import styles from '../styles/Times.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
function Users({ users }) {
    return (
        <div className={styles.body}>
            <Navbar />
            <h1 className={styles.titulo}> Lista de Times </h1>
            <div className={styles.cont}>
                {users.map((user, index) => (
                    <Link href='/times/[id]' as={`/times/${index}`}>
                        <div className={styles.time} key={user._id}> <p> {user.nome} </p> </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;
