import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectObjects } from '../../state/slices/objects'
import { PROPERTIES } from '../Constants';
import DocumentMaker from '../Document/DocumentMaker';
import { pdf } from '@react-pdf/renderer'

export default function Maker() {

    const objects = useSelector(selectObjects);

    const createPdf = () => {
        let DocList = createDocList(objects);
        for (const doc of DocList) {
            if (doc <= 4) {
                continue;
            }
            pdf(<DocumentMaker data={objects} id={doc} />).toBlob().then((blob) => {
                console.log(blob);
                let a = document.createElement("a");
                document.body.appendChild(a);
                a.style.display = "none";
                let url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = (objects[doc][PROPERTIES.NAME] || ('DOC' + doc)) + ".pdf";
                a.click();
                window.URL.revokeObjectURL(url);
                a.click();
                a.remove();
            })
        }
    }
    const createDataFile = () => {
        let a = document.createElement("a");
        let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objects));
        a.href = dataStr;
        a.download = 'DataFile' + ".json";
        a.click();
        a.remove();
    }

    return (
        <Container>
            <button type='button' onClick={createPdf}>Create Pdf</button>
            <button type='button' onClick={createDataFile}>Download Data File</button>
        </Container>
    )
}

const createDocList = (data) => {
    let list = [];
    for (const key in data) {
        if (data[key][PROPERTIES.PARENT] === null) {
            list.push(key)
        }
    }
    list.sort((a, b) => data[a][PROPERTIES.POS] > data[b][PROPERTIES.POS] ? 1 : -1)
    return list;
}

const Container = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    & > button {
        border:1px solid black;
        padding:5px;
    }
`