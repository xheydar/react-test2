import Row from 'react-bootstrap/Row'

export default function FinalNotes( props )
{
    let language = props.language
    let text = props.moduleData['final_notes'][ language ]

    return (
        <Row>
            <p style={{ whiteSpace: 'pre-line' }}>
                { text }
            </p>
        </Row>
    )
}
