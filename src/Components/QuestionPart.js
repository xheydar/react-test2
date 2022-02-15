import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Slider from './Slider'

export default function QuestionPart( props )
{
    let index = props.index;
    let part_index = props.part_index;
    let nparts = props.nparts;
    let language = props.language;
    let multi_selections = props.multi_selections === "yes";

    let question_title = props.question_part['title']
    let answers = props.question_part['answers']
    let range = props.question_part['range']
    let textbox = props.question_part['textbox']
    let textarea = props.question_part['textarea']

    let id = index + "_" + part_index + "_"
 
    return (
        <Row style={{ marginBottom:"30px" }} key={ id }>
            { nparts > 1 &&
            <Row>
                <b>Part - { part_index+1 }</b>
            </Row>
            }

            <p> {question_title[language] } </p>
            { (answers.length > 0 && !multi_selections) &&
                <Row style={{ marginLeft: '30px'}}>
                <Form.Group>
                { answers.map( (a,answer_index) => 
                    <Row>
                        <Form.Check type='radio' name={id} id={ id + answer_index } label={ a.text[language]} />
                    </Row>
                ) }
                </Form.Group>
                </Row>
            }
            
            { ( answers.length > 0 && multi_selections ) &&
                <Row style={{ marginLeft: '30px'}}>
                <Form.Group>
                { answers.map( (a,answer_index) => 
                    <Row>
                        <Form.Check type='checkbox' name={id + answer_index} id={ id + answer_index } label={ a.text[language]} />
                    </Row>
                ) }
                </Form.Group>
                </Row>
            }

            { range &&
              <Row style={{ marginLeft: '30px' }}>
                <Slider range={range} />
              </Row>
            }

            { textbox &&
              <Row style={{ marginLeft: '30px' }}>
                <Form.Control type="text" id={ id } name={ id } />
              </Row>
            }

            { textarea &&
              <Row style={{ marginLeft: '30px' }}>
                <Form.Control type="text" as="textarea" id={ id } name={ id } />
              </Row>
            }
            

            
        </Row>
    )
}
