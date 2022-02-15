import Row from 'react-bootstrap/Row'

export default function Introduction( props )
{
    let language = props.language
    let text = props.moduleData['introduction'][ language ]

    return (
        <Row>
            <p style={{ whiteSpace: 'pre-line' }}>
                { text }
            </p>
        </Row>
    )
}
