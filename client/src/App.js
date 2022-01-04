
import Spinner from 'react-bootstrap/Spinner'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'name', headerName: 'Name', width: 400 },
	{ field: 'fullName', headerName: 'Full name', width: 400 },
	{ field: 'email', headerName: 'Email', width: 400 },
	{ field: 'phone', headerName: 'Phone', width: 400 }
];

var rows = [{ "id": 30118, "name": "Caroline", "fullName": "Ms. Caroline ", "email": "caroline0@adventure-works.com", "phone": "695-555-0158" }, { "id": 582, "name": "Abel, Catherine", "fullName": "Ms. Catherine Abel", "email": "catherine0@adventure-works.com", "phone": "747-555-0171" }, { "id": 29485, "name": "Abel, Catherine", "fullName": "Ms. Catherine Abel", "email": "catherine0@adventure-works.com", "phone": "747-555-0171" }, { "id": 29486, "name": "Abercrombie, Kim", "fullName": "Ms. Kim Abercrombie", "email": "kim2@adventure-works.com", "phone": "334-555-0137" }, { "id": 579, "name": "Abercrombie, Kim", "fullName": "Ms. Kim Abercrombie", "email": "kim2@adventure-works.com", "phone": "334-555-0137" }, { "id": 491, "name": "Adams, Frances", "fullName": "Ms. Frances Adams", "email": "frances0@adventure-works.com", "phone": "991-555-0183" }, { "id": 29489, "name": "Adams, Frances", "fullName": "Ms. Frances Adams", "email": "frances0@adventure-works.com", "phone": "991-555-0183" }, { "id": 29492, "name": "Adams, Jay", "fullName": "Mr. Jay Adams", "email": "jay1@adventure-works.com", "phone": "158-555-0142" }, { "id": 544, "name": "Adams, Jay", "fullName": "Mr. Jay Adams", "email": "jay1@adventure-works.com", "phone": "158-555-0142" }, { "id": 551, "name": "Agcaoili, Samuel", "fullName": "Mr. Samuel Agcaoili", "email": "samuel0@adventure-works.com", "phone": "554-555-0110" }, { "id": 29494, "name": "Agcaoili, Samuel", "fullName": "Mr. Samuel Agcaoili", "email": "samuel0@adventure-works.com", "phone": "554-555-0110" }, { "id": 29496, "name": "Ahlering, Robert", "fullName": "Mr. Robert Ahlering", "email": "robert1@adventure-works.com", "phone": "678-555-0175" }, { "id": 509, "name": "Ahlering, Robert", "fullName": "Mr. Robert Ahlering", "email": "robert1@adventure-works.com", "phone": "678-555-0175" }, { "id": 29550, "name": "Alan, Stanley", "fullName": "Mr. Stanley Alan", "email": "stanley0@adventure-works.com", "phone": "156-555-0126" }, { "id": 182, "name": "Alan, Stanley", "fullName": "Mr. Stanley Alan", "email": "stanley0@adventure-works.com", "phone": "156-555-0126" }, { "id": 29499, "name": "Alberts, Amy", "fullName": "Ms. Amy Alberts", "email": "amy1@adventure-works.com", "phone": "727-555-0115" }, { "id": 497, "name": "Alberts, Amy", "fullName": "Ms. Amy Alberts", "email": "amy1@adventure-works.com", "phone": "727-555-0115" }, { "id": 560, "name": "Alcorn, Paul", "fullName": "Mr. Paul Alcorn", "email": "paul2@adventure-works.com", "phone": "331-555-0162" }, { "id": 29502, "name": "Alcorn, Paul", "fullName": "Mr. Paul Alcorn", "email": "paul2@adventure-works.com", "phone": "331-555-0162" }, { "id": 29503, "name": "Alderson, Gregory", "fullName": "Mr. Gregory Alderson", "email": "gregory0@adventure-works.com", "phone": "968-555-0153" }, { "id": 570, "name": "Alderson, Gregory", "fullName": "Mr. Gregory Alderson", "email": "gregory0@adventure-works.com", "phone": "968-555-0153" }, { "id": 235, "name": "Alexander, Mary", "fullName": "Ms. Mary Alexander", "email": "mary7@adventure-works.com", "phone": "344-555-0133" }, { "id": 29873, "name": "Alexander, Mary", "fullName": "Ms. Mary Alexander", "email": "mary7@adventure-works.com", "phone": "344-555-0133" }, { "id": 564, "name": "Alexander, Michelle", "fullName": "Ms. Michelle Alexander", "email": "michelle0@adventure-works.com", "phone": "115-555-0175" }, { "id": 29505, "name": "Alexander, Michelle", "fullName": "Ms. Michelle Alexander", "email": "michelle0@adventure-works.com", "phone": "115-555-0175" }, { "id": 29508, "name": "Allen, Marvin", "fullName": "Mr. Marvin Allen", "email": "marvin0@adventure-works.com", "phone": "447-555-0110" }, { "id": 561, "name": "Allen, Marvin", "fullName": "Mr. Marvin Allen", "email": "marvin0@adventure-works.com", "phone": "447-555-0110" }, { "id": 569, "name": "Allison, Cecil", "fullName": "Mr. Cecil Allison", "email": "cecil0@adventure-works.com", "phone": "699-555-0155" }, { "id": 29510, "name": "Allison, Cecil", "fullName": "Mr. Cecil Allison", "email": "cecil0@adventure-works.com", "phone": "699-555-0155" }, { "id": 29511, "name": "Alpuerto, Oscar", "fullName": "Mr. Oscar Alpuerto", "email": "oscar0@adventure-works.com", "phone": "855-555-0174" }];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: null, loading: true };
	}

	callAPI() {
		fetch("http://localhost:8080/customers", { mode: 'cors' })
			.then(res => res.text())
			.then(res => {
				this.setState({ apiResponse: res, loading: false })
			})
	}

	componentWillMount() {
		this.callAPI();
	}
	render() {
		if (this.state.loading) {
			return (
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			)
		}
		return (
			<div style={{ height: 700, width: '100%' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={20}
					rowsPerPageOptions={[20]}
					checkboxSelection
				/>
			</div>
		);
	}
}

export default App;
