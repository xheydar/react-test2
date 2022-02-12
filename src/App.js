import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function request_one()
{
    let url = "/api/data/validate/";

    var data = {}
    data["data_type"] = "survey"
    data["reference"] = "N066"

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url, false );
    xmlHttp.send( JSON.stringify(data) )

    console.log( xmlHttp.status )
    console.log( xmlHttp.responseText )
}

function App() {
  return (
    <div className="App">
        <Button onClick={request_one}>Test1</Button>
    </div>
  );
}

export default App;
