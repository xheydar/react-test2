import Row from 'react-bootstrap/Row'
import QuestionPart from './QuestionPart'

export default function Question( props )
{
    let index = props.index
    let language = props.language
    let question = props.question

    let nparts = question.nparts
    let parts = question.parts
    let multi_selections = question.multi_selections

    return (
        <Row>
            <Row>
                <b>Question {index}</b>  
            </Row>
            {
                parts.map( (p,part_index) =>
                    <QuestionPart index={index}
                                  part_index={part_index}
                                  nparts={nparts}
                                  language={language}
                                  multi_selections={multi_selections}
                                  question_part={p}/>
                )
            }
        </Row>
    )
}
