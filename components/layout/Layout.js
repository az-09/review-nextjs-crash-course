import Navigation from "./Navigation";

export default function Layout({ children }) {
    return (
        < div >
            <Navigation />
               
           <main> {children}</main>
            <style jsx>{`
                main {
                    margin: 3rem auto;
                width: 90%;
                max-width: 40rem;
                }
            `}
            </style>
        </div>
    )
}