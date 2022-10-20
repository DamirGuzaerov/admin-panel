import React, {useState} from "react";
import furnitureSelected from "assets/data/furniture-selected.data.json";
import furniture from "assets/data/furniture.data.json";
import {Button, Card} from "antd";
import Flex from "components/shared-components/Flex";
import Puzzle from "../../components/puzzle";
import { v4 as uuidv4 } from 'uuid';

const PuzzleBoard = ({furniture}) => {
    return (
        <div
            className={"position-relative"}
        >
            <div style={{width: "100%", padding: "10px","height": "830px"}} className={"overflow-auto"}>
                {furniture.map((element) =>
                    <Puzzle id={element.id} key={element.id} img={element.img} name={element.name} x={element.x} y={element.y}/>
                )}
            </div>
        </div>
    );
}

const Scheduler = () => {
    const [selectedFurniture,setSelectedFurniture] = useState(furnitureSelected)

    const addNewPuzzle = (puzzleGeneralInfo) => {
        let newPuzzle = {
            ...puzzleGeneralInfo,
            id: uuidv4(),
            x: 0,
            y: 0,
        }
        setSelectedFurniture([...furnitureSelected,newPuzzle])
        furnitureSelected.push(newPuzzle)
    }

    function saveChanges() {
    }

    return (
        <div className={"ant-row"}>
            <div className={"ant-col-12"}>
                <div className={"mr-2"}>
                    <Card title={"Элементы карты"}>
                        <Flex className={"overflow-auto"}>
                            {furniture.map((element, index) =>
                                <button key={index} className={"mr-3 mb-3 cursor-pointer"} onClick={()=>addNewPuzzle(element)}>
                                    <div className={`puzzle-container`}>
                                        <img src={`/img/furniture/${element.img}.png`} className={"h-100 puzzle-img"}
                                             alt={element.name}/>
                                    </div>
                                </button>
                            )}
                        </Flex>
                    </Card>
                    <Button size={"large"} type={"primary"} className={"mt-2"} onClick={()=>saveChanges()}>Сохранить</Button>
                </div>
            </div>
            <div className={"ant-col-12"}>
                <div className={"ml-2"}>
                    <Card title={"Карта заведения"}>
                        <PuzzleBoard furniture={selectedFurniture}/>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Scheduler