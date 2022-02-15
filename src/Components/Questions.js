import Row from 'react-bootstrap/Row'
import Question from './Question'

export default function Questions( props )
{
    let language = props.language
    let questions = props.moduleData['questions']

    return (
        <Row>
            { questions.map( (q,index) =>
                <Question index={index+1} language={language} question={q} />
                )
            }
        </Row>
    )
}
