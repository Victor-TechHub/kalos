import { ReactNode } from "react"
import styles from "./styles.module.css"
import Sidebar from "../components/sidebar"

const ProtectedRoutes = ({ children }: { children: Readonly<ReactNode> }) => {
    return (
        <section className={styles.container}>
            <Sidebar />
            {children}
        </section>
    )
}

export default ProtectedRoutes