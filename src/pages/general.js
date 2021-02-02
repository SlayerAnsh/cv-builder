import React,{useState} from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Maker from '../components/SlayerAnsh/pdfMaker'
import Viewer from '../components/SlayerAnsh/pdfViewer'
import {pdf} from '@react-pdf/renderer'


const StyledTitle = styled.div`
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
`
const ViewContainer = styled.div`
  height: 297mm;
  width: 210mm;
  border: 1px solid black;
  flex-shrink: 0;
  flex-grow: 0;
  align-self: center;
  box-shadow: 5px 5px 18px #525252;
  display:flex;
  flex-direction:column;
  text-align:left;
  transform:scale(0.8) ;
  /* transform-origin:top; */
  z-index:10;
  /* transform:translateY(-50%); */
  @media (max-width:900px){
    transform:scale(0.4);
  }
`
const PdfButton = styled.button`
  margin: 10px 10px;
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
    summary:'I am username.',
    skills:'skill1,,80;skill2,,70;skill3,,30;',
    tech:'Software,,C++,C#,Java;Software,,C++,C#,Java;Software,,C++,C#,Java;',
    interest: 'Chess;Badmintion',
    works:'Company1,,11/12/2020-Present,,Handled A//Supervised B;Company2,,11/12/2020-Present,,Handled A//Supervised B',
    education:'ABCD,,2019-2020,,CGPI: 8.59,,point A//point B;ABCD,,2019-2020,,CGPI: 8.59,,point A//point B;',
    projects:'Project A,,www.google.com,,GitHub,,Aug 2020 - Current,,point A//point B;Project A,,www.google.com,,GitHub,,Aug 2020 - Current,,point A//point B;'
  });
  const createPdf = ()=>{
    pdf(<Viewer data={data} show={false}/>).toBlob().then((blob)=>{
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
    <Layout>
      <main>
        <title>CV | General</title>
      </main>
        <StyledTitle>
        <h1>BASIC RESUME BUILDER</h1>
              <span className="links">
              <Link className="link" to='/'>Home</Link>
              <a href="https://github.com/SlayerAnsh">SlayerAnsh</a>
        </span>
        </StyledTitle>
        <Maker setData={setData} data={data}/>
        <ViewContainer>
          <Viewer data={data} show={true}/>
        </ViewContainer>
        
        <PdfButton onClick={createPdf}> Create Pdf</PdfButton>
        <PdfButton onClick={createDataFile}> Create Data File</PdfButton>
    </Layout>
  )
}
export default IndexPage
