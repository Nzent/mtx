import NavBar from "../navBar/navBar.jsx";
import Footer from "../footer/footer";

export default function layout({ children }) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
};
