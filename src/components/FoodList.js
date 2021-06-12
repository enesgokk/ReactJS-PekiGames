import React from 'react'
import {Table} from "reactstrap";

const FoodList = () => {
	return (
		<div>
			<Table striped bordered hover>
				  <thead>
				    <tr>
				     
				      <th>First Name</th>
				      <th>Last Name</th>
				      <th>Username</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				    
				      <td>Mark</td>
				      <td>Otto</td>
				      <td>@mdo</td>
				    </tr>
				    <tr>
				
				      <td>Jacob</td>
				      <td>Thornton</td>
				      <td>@fat</td>
				    </tr>
				    <tr>
				    
				      <td colSpan="2">Larry the Bird</td>
				      <td>@twitter</td>
				    </tr>
				  </tbody>
			</Table>
		</div>
	)
}

export default FoodList