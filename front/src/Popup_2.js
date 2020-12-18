
import React from "react";
import jQuery from "jquery";
import axios from 'axios';
window.$ = window.jQuery = jQuery;

let name;

const submit = function() {
  console.log('submitted!');
  console.log(name);
  const data = {};
  ['id', 'start', 'end', 'contents'].forEach((id) => {
    data[id] = document.getElementById(id).value;
  });
  console.log(data);
  axios.post('https://sheetdb.io/api/v1/mr4ghbp4mbpcz', {
    data
  }).then((data) => {
    console.log(data);
    window.location.reload();
  }).catch((error) => {
    console.log(error);
  });
};

const reload = function() {
  window.location.reload();
}

function PopUp(props) {
  var arr = props.end.split('-')
  let endday = parseInt(arr[2], 10) - 1;
  if(endday < 10) endday = '0' + endday;
  endday = arr[0] + '-' + arr[1] + '-' + endday
  console.log(props);
  return (
    <div className="modal">
      <div className="modal_content">
        {/* <form 
            method="post"
            action="https://sheetdb.io/api/v1/mr4ghbp4mbpcz" > */}
        <input className="close" value="&times;" type="submit" onClick={reload} />
        <h3>일정 입력</h3>
        <div>
          written by: <label>hekang</label>
        </div>
        <div>
          <div>
            <br />
              Title:
              <input type="text" name="data[id]" value={props.title} id="id" />
          </div>
          <div>
            <br />start:<br />
            <input type="date" name="data[start]" value={props.start} id="start" />
          </div>
          <div>
            end:<br />
            <input type="date" name="data[end]" value={endday} id="end" />
          </div>
          <div>
            color:<br />
            <input type="color" name="color" value="#0000ff" />
          </div>
          <div>
            <br />contents:<br />
            <textarea type="text" name="data[contents]" height="50px" id="contents" >
              {props.contents}
            </textarea>
          </div>
        </div>
        <br />
        <input type="submit" onClick={function() {submit();}} value="등록"></input>
            &nbsp;
            <input type="submit" name="cancel" value="취소" onClick={reload}/>
        {/* </form> */}
      </div>
    </div>
  );
}

export default React.memo(PopUp);