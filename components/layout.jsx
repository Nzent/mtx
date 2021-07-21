import NavBar from "./navBar/navBar";

export default function layout({ children }) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    )
};
