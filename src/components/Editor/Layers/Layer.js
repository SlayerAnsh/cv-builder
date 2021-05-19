import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MuiTreeItem from '@material-ui/lab/TreeItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectObjects } from '../../../state/slices/objects';
import { PROPERTIES } from '../../Constants';
import { selectLayerSelect, setSelected } from '../../../state/slices/layerSelect';
import LayerMenu from './LayerMenu';
import LayerLabel from './LayerLabel';


const initialState = {
    mouseX: null,
    mouseY: null,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const TreeItem = withStyles({
    root: {
        "&$selected > $content": {
            border: '1px solid #fe9e44'
        }
    },
    selected: {},
    content: {},
})(MuiTreeItem);

export default function Layer() {
    const classes = useStyles();
    const objects = useSelector(selectObjects)
    const layerSelected = useSelector(selectLayerSelect)
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(initialState);

    const renderTree = (parent) => {
        let list = [];
        for (const key in objects) {
            if (objects[key][PROPERTIES.PARENT] === parent) {
                list.push(key)
            }
        }
        list = list.map((id) => (
            <TreeItem key={id} nodeId={id} label={<LayerLabel id={id} name={objects[id][PROPERTIES.NAME]} type={objects[id][PROPERTIES.TYPE]}/>}>
                {renderTree(id)}
            </TreeItem>
        ))
        return list
    };

    const handleSelect = (event, nodeId) => {
        dispatch(setSelected({ id: nodeId, type: objects[nodeId][PROPERTIES.TYPE] }))
    };

    const handleClose = () => {
        setOpen(initialState);
    };


    const handleContextClick = (event) => {
        event.preventDefault();
        setOpen({
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
        });
    };



    return (
        <div onContextMenu={handleContextClick} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <TreeView
                className={classes.root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                selected={layerSelected.selected.id}
                onNodeSelect={handleSelect}
            >
                {renderTree('1')}
            </TreeView>
            <LayerMenu open={open} setOpen={setOpen} handleClose={handleClose} />
        </div>
    );
}
