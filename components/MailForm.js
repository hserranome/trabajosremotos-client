import React from "react";
import styled from 'styled-components';

const MailForm = (props) => {
	return(
		<div className="email-octopus-form-wrapper">
			<MailContainer>
				<h4 className="email-octopus-heading">¿Quieres recibir las últimas ofertas de trabajo todos los lunes?</h4>
				<p className="email-octopus-success-message"></p>
				<p className="email-octopus-error-message"></p>

				<form method="post"
					action="https://emailoctopus.com/lists/347308e1-960d-11ea-a3d0-06b4694bee2a/members/embedded/1.3/add"
					className="email-octopus-form"
					data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
				>
					<input 
						id="field_0" 
						name="field_0" 
						type="email" 
						placeholder="Tu correo" 
					/>
					<input 
						type="text" 
						name="hp347308e1-960d-11ea-a3d0-06b4694bee2a"
						tabIndex="-1"
						autoComplete="off" 
					/>
					<input 
						type="hidden"
						name="successRedirectUrl"
						value="" 
					/>
					<button type="submit">Suscribirse</button>
				</form>
			</MailContainer>
		</div>
	);
};

export default MailForm;

const MailContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	margin: 0 auto;
	padding: 1rem;
	max-width: 100%;
	box-sizing: border-box;

	h4{
		font-weight: 300 !important;
		font-size: .9rem !important;
		margin: 0 !important;
		padding: 0 !important;
		margin-top: 2rem !important;
	}
	p{
		padding: 0 !important;
		margin: 0 !important;
	}
	p.email-octopus-error-message{ color: tomato; }
	p.email-octopus-success-message{ color: #28a745; }
	form{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		width: 400px;
		max-width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		margin-top: .5rem;
	}
	input[type=text]{ display: none; }
	input{
		flex: 0 0 calc(100% - 120px);
		outline: none;
		border: 1px solid #dedede;
		padding: .5rem;
	}
	button{
		box-sizing: border-box;
		flex: 0 0 98px;
		margin-top: .5rem;
		margin: 0;
		outline: none;
		border: 1px solid #dedede;
		padding: .5rem;
	}
	button:hover{
		cursor: pointer;
	}
`;