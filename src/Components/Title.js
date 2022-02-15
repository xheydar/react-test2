import Row from 'react-bootstrap/Row'


export default function Title( props )
{
    let language = props.language
    let text = props.moduleData['title'][language]

    return (
        <Row style={{ marginTop: "50px", marginBottom: "30px" }}>
            <center>
                <h2>{ text }</h2>
            </center>
        </Row>
    )
}
