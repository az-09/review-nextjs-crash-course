export default function Card({ children }) {
    return (
        <div className={card}>
            {children}
            <style jsx>
                {`
                .card {
                    background-color: white;
                    border-radius: 6px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                }           
            `}
            </style>
        </div>
    )
}