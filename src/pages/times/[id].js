import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../../styles/Info_times.module.css';
function Profile({ user = {} }) {
    return (
        <div className={styles.body}>
            <Navbar />
            <div className={styles.cont}>
                <div className={styles.cont2}>
                    <h1>Time: {user.nome}</h1>
                    <p>Usuario: {user.usuario}</p>
                    <p>Descrição: {user.descricao}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Profile;