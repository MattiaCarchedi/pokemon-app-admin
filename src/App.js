import React from "react";

import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

function FixedContainer() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container
				style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
					padding: 50,
					textAlign: "center",
					backgroundColor: "#3dfff9",
					position: "absolute",
					height: "100vh",
					minWidth: "100%",
				}}
				fixed
			>
				<TextField style={{ color: "black" }} label='User Name' />
				<br />
				<br />
				<TextField id='standard-basic' label='Password' type='password' />
				<br />
				<br />
				<Button style={{ margin: 50, borderRadius: 20 }} variant='contained'>
					Login
				</Button>
			</Container>
		</React.Fragment>
	);
}

function App() {
	return (
		<div className='App'>
			<FixedContainer />
		</div>
	);
}

export default App;
