import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var request = require('request');
  var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
  var queryParams = '?' + encodeURIComponent('ServiceKey') + '%2Blx3tL2NzgCl%2BJrFubdDj2SNpnx1O8trjtxvyakv%2FrEjTGhPzI1Kv4%2FY2d7n3f95rlfosbwLSM6H2T4ZVBqhWg%3D%3D'; /* Service Key*/
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
  queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200410'); /* */
  queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200410'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    //console.log('Reponse received', body);
});
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
