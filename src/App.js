import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

function httpPost(theUrl, data, headers={})
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, false ); // false for synchronous request

    for( var key in headers )
    {
        xmlHttp.setRequestHeader(key, headers[key]);
    }

    xmlHttp.send( data );

    var response = {}
    response.text = xmlHttp.responseText;
    response.status = xmlHttp.status;

    return response;
}

function request_survey( surveyCode )
{
    let validate_url = "http://46.59.46.74:26547/api/data/validate/";

    var data = {}
    data["data_type"] = "survey"
    data["reference"] = surveyCode

    var response = httpPost( validate_url, JSON.stringify(data) )

    let success = response.status === 200

    if( !success )
    {
        return null
    }

    let info = JSON.parse( response.text )

    let content_url = "http://46.59.46.74:26547/api/data/content/"

    data = {}
    data['data_module'] = info.data_module
    
    response = httpPost( content_url, JSON.stringify(data) )

    success = response.status === 200

    if( !success )
    {
        return null
    }

    let content = JSON.parse( response.text )

    let survey_data = {}
    survey_data['info'] = info;
    survey_data['content'] = content;

    return survey_data
}

function App() {
    const [ appState, setAppState ] = useState( 0 )
    const [ surveyCode, setSurveyCode ] = useState( "" )
    const [ languages, setLanguages ] = useState( [] )
    const [ language, setLanguage ] = useState( "" )
    const [ surveyData, setSurveyData ] = useState( {} )

    function submitReference()
    {
        let data = request_survey( surveyCode ) 

        if( !data )
        {
            alert('Survey code does not exist')
            return
        }

        setSurveyData( data )
        setAppState( 1 )
        setLanguages( data.content.data.module_data.languages )
    }

    function selectLanguage()
    {
        if( language !== "" )
        {
            setAppState(2);
        }
    }

    return (
        <>
            <Modal show={ appState === 0 } size="lm" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Please enter the reference code
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control onChange={ e => { setSurveyCode( e.target.value )} } />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={ submitReference }>Next</Button>
            </Modal.Footer>
            </Modal>

            <Modal show={ appState === 1 } size="lm" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Select Language
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Select aria-label="Select languages"
                             onChange={ e => { setLanguage( e.target.value )}}>
                    <option value="" selected disabled hidden>Choose here</option>
                    {
                        languages.map( (l) => 
                            <option value={l}>{l}</option>
                        )
                    }
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={ selectLanguage }>Next</Button>
            </Modal.Footer>
            </Modal>
            
            { appState === 2 &&
                
                <p>Survey Goes Here!</p>

            }
        </>
    );
}

export default App;
