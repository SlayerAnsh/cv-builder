import React, { useState, useRef } from 'react'
import {Link as GLink} from 'gatsby'
import styled from 'styled-components'
import Pdf from '../components/editable-ui/pdf'
import {Link, pdf} from '@react-pdf/renderer'

const MainDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:5mm 10mm;
.head {
  display: flex;
  flex-direction:column;
  align-items:center;
}
.links {
  display:flex;
  flex-direction:row;
}
.links a, .link{
  text-decoration:none;
  color:green;
  margin: 0px 20px 10px 20px;
}
@media (max-width:250mm){
    align-items:flex-start;
    padding:0mm;
}
`
const PdfContainer = styled.div`
  height: 297mm;
  width: 210mm;
  border: 1px solid black;
  box-shadow: 5px 5px 18px #525252;
  font-size: 5mm;
  & input, & textarea{
    border-style:none;
    border:1px solid black;
    background-color:transparent;
    padding:1px 2px;
    margin:1px 1px;
  }
  & button{
    text-decoration:none;
    border-style:none;
    border:1px solid black;
    margin:1px 1px;
    padding:1px 2px;
    color:#ffffff;
    background-color:green;
  }
  & button:last-child{
    background-color:red;
  }
`
const Button = styled.button`
  margin:30px 10px;
  text-decoration:none;
  border-style:none;
  border:1px solid black;
  padding:2px 10px;
  font-size:18px;
  background-color:transparent;
`
const Input = styled.textarea`

`

function Basic() {
    const [data,setData] = useState({});
    const dataRef = useRef(null);

    const createPdf = ()=>{
        pdf(<Pdf web={false} data={data} setData={setData}/>).toBlob().then((blob)=>{
          console.log(blob);
          let a = document.createElement("a");
          document.body.appendChild(a);
          a.style.display = "none";
          let url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = "cv.pdf";
          a.click();
          window.URL.revokeObjectURL(url);
          a.click();
          a.remove();
        })
      }
      const createDataFile = ()=>{
        let a = document.createElement("a");
        let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        a.href = dataStr;
        a.download = "data.json";
        a.click();
        a.remove();
      }

    return (
        <MainDiv>
          <main>
            <title>CV | Editable UI</title>
          </main>
            <div className="head">
              <h1>EDITABLE UI RESUME BUILDER</h1>
              <span className="links">
              <GLink className="link" to='/'>Home</GLink>
              <a href="https://github.com/SlayerAnsh">SlayerAnsh</a>
              </span>
            </div>
            <PdfContainer>
                <Pdf web={true} data={data} setData={setData}/>
            </PdfContainer>
            <div>
            <Button onClick={createPdf}>DOWNLOAD PDF</Button>
            <Button onClick={createDataFile}>DOWNLOAD JSON</Button>
            </div>
            <div>
            <Input type="text"
              ref={dataRef}
              name="data Json"
              value={JSON.stringify(data)}
              placeholder={JSON.stringify(data)}
              cols='80'
              rows='5'
              onChange={({target})=>{
                try{
                  let val = JSON.parse(target.value);
                  setData(val);
                }catch(error){
                  console.log(error)
                }
              }}
            ></Input>
            </div>
          </MainDiv>
    )
}

export default Basic
