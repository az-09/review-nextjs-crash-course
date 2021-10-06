export default function MeetupDetail(props) {
    return(
        <div>

        <section className={detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.descripton}</p>
        </section>
        <style jsx>{`
            .detail{
                text-align: center;
            }

            .detail img{
                width: 100%;
            }
        `}</style>
        </div>
    )
}