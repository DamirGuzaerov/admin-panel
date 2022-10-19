import Draggable from "react-draggable";
import React, {Component} from "react";
import InnerAppLayout from "../../../../layouts/inner-app-layout";
import {Card, Menu} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import furniture from "assets/data/furniture-selected.data.json";
class PuzzleBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeDrags: 0,
			deltaPosition: {
				x: 0,
				y: 0
			},
			controlledPosition: {
				x: -400,
				y: 200
			}
		};
		this.handleDrag = this.handleDrag.bind(this);
		this.onStart = this.onStart.bind(this);
		this.onStop = this.onStop.bind(this);
		this.adjustXPos = this.adjustXPos.bind(this);
		this.adjustYPos = this.adjustYPos.bind(this);
		this.onControlledDrag = this.onControlledDrag.bind(this);
		this.onControlledDragStop = this.onControlledDragStop.bind(this);
	}

	handleDrag(e, ui) {
		const { x, y } = this.state.deltaPosition;
		this.setState({
			deltaPosition: {
				x: x + ui.deltaX,
				y: y + ui.deltaY
			}
		});
	}

	onStart() {
		this.setState({ activeDrags: ++this.state.activeDrags });
	}

	onStop() {
		this.setState({ activeDrags: --this.state.activeDrags });
	}
	// For controlled component
	adjustXPos(e) {
		e.preventDefault();
		e.stopPropagation();
		const { x, y } = this.state.controlledPosition;
		this.setState({ controlledPosition: { x: x - 10, y } });
	}

	adjustYPos(e) {
		e.preventDefault();
		e.stopPropagation();
		const { controlledPosition } = this.state;
		const { x, y } = controlledPosition;
		this.setState({ controlledPosition: { x, y: y - 10 } });
	}

	onControlledDrag(e, position) {
		const { x, y } = position;
		this.setState({ controlledPosition: { x, y } });
	}

	onControlledDragStop(e, position) {
		this.onControlledDrag(e, position);
		this.onStop();
	}
	render() {
		const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
		return (
			<div
				className="box"
				style={{
					height: "100%",
					width: "100%",
					position: "relative",
					overflow: "auto",
					padding: "0"
				}}
			>
				<div style={{ height: "100%", width: "100%", padding: "10px" }}>
					{furniture.map((element)=>
						<Draggable bounds="parent" {...dragHandlers}>
							<div className={`puzzle puzzle-${element.size}`}>
								<img src={`/img/furniture/${element.img}.png`} alt={element.name} draggable={false}/>
							</div>
						</Draggable>
					)}

				</div>
			</div>
		);
	}
}

const Scheduler = ()=>{
	return(
		<InnerAppLayout
			sideContentWidth={900}
			mainContent={<PuzzleBoard/>}
		/>
		)
}

export default Scheduler