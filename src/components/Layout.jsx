import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <div className="header">
                <Header />
            </div>
            <main className="content">
                <Outlet />
            </main>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}