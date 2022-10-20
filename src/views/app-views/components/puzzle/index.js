import React, {useEffect} from "react";
import Draggable from "react-draggable";
import {Tooltip} from "antd";
import furnitureSelected from "assets/data/furniture-selected.data.json";

const Puzzle = (props) => {
    const {id,img, name, x, y} = props
    let defaultPosition = {x:x,y:y}
    const handleDrag = (e, ui) => {
        const {x, y} = defaultPosition;
        defaultPosition = {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        }
        let dataFurniture = furnitureSelected.find((element)=>
            element.id === id
        )
        dataFurniture.x = defaultPosition.x
        dataFurniture.y = defaultPosition.y
    };

    useEffect(()=>{
    },[])

    return (
        <Draggable defaultPosition={{x:defaultPosition.x,y:defaultPosition.y}} bounds={"parent"} onDrag={handleDrag}>
            <div className={`puzzle`}>
                <Tooltip placement="topRight" title={name}>
                    <img src={`/img/furniture/${img}.png`} className={"h-100 puzzle-img"} alt={name}
                         draggable={false}/>
                </Tooltip>
            </div>
        </Draggable>
    )
}

export default Puzzle
