

interface Props{
    imageLink: string,
    heading: string,
    description: string
}

function InfoCard(props : Props)
{
    return (<div>
        <div>
            <div>
                <img src={props.imageLink}/>
            </div>
            <p>
                {props.heading}
            </p>
        </div>
        <div>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default InfoCard;