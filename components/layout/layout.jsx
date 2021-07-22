// import Footer from "../footer/footer";
import Navbar from "../navbar/nav";

export default function layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
};
