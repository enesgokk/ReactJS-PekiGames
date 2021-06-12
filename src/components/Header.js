import {React, Component} from 'react';
import {Col, Row} from "reactstrap";

const header = () => {
	return (
		<div className="hContainer">
			<div className="hBackground">
				<Row>
					<Col>
						<h3 className="hBorderLogo" >LOGO</h3>
					</Col>

					<Col>
						<h3 className="hBorderMenu" >MENU</h3>
					</Col>
				</Row>
	
			</div>
		</div>
	)
}

export default header;