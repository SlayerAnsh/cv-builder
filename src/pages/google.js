import React,{useState} from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import Maker from '../components/SlayerAnsh/pdfMaker'
import Viewer from '../components/SlayerAnsh/pdfViewer'
import {pdf} from '@react-pdf/renderer'


const StyledTitle = styled.h1`
  font-size:36px;
  font-weight:700;
  text-align:center;
  margin-bottom:10px;
`
const ViewContainer = styled.div`
  height: 297mm;
  width: 210mm;
  border: 1px solid black;
  flex-shrink: 0;
  flex-grow: 0;
  align-self: center;
  box-shadow: 5px 5px 18px #525252;
`
const PdfButton = styled.button`
  margin: 50px 10px;
  padding: 5px 10px;
  color: white;
  background-color: red;
  text-decoration: none;
  border-style: none;
`

const IndexPage = () => {
  const [data,setData] = useState({
    name:'Your Name Here',
    github:'github.com/username',
    linkedin:'linkedin.com/in/username',
    gmail:'email@gmail.com',
    summary:'I am username.'
  });
  const createPdf = ()=>{
    pdf(<Viewer data={data} show={false}/>).toBlob().then((blob)=>{
      console.log(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      let url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = "cv.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
  }

  return (
    <Layout>
      <main>
        <title>Home Page</title>
      </main>
        <StyledTitle>SlayerAnsh CV Template</StyledTitle>
        <Maker setData={setData} data={data}/>
        <ViewContainer>
          <Viewer data={data} show={true}/>
        </ViewContainer>
        
        <PdfButton onHover onClick={createPdf}> Create Pdf</PdfButton>
    </Layout>
  )
}
export default IndexPage
