import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	/* 


	style.scss


	*/
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600|Prata&display=swap');

	body{
		padding: 0; margin: 0 auto;
		left: 0; top: 0;
		font-weight: 300;
		font-family: 'Montserrat', sans-serif;
		color: #000;
		padding-top: 64px; padding-bottom: 64px;
	}
	html{ margin: 0; padding: 0;}
	*, * > *{	transition: .25s linear;}
	img { max-width: 100%; }
	/* Some basic styling */
	a{ text-decoration: none; color: inherit; }
	.strong{ font-weight: 600; }

	.prata{ font-family: 'Prata', serif; font-weight: 300; }

	.container{
		width: 100%; max-width: 960px;
		margin: 0 auto;
		text-align: center;
		padding: 1rem;
		box-sizing: border-box;
	}
	.container.big{ max-width: 1170px; }
	/* ----------------------------------- */

	/* Hero section on some pages */
	.hero{
		max-width: 100%;
		min-height: 30vh;
		display: flex; flex-flow: column wrap;
		box-sizing: border-box;
		justify-content: center; align-items: center;
		border-bottom: 1px solid #dedede;
	}
	.hero p{
		text-align: left;
		margin: 0; padding: 0;
		margin-bottom: .5rem;
		font-size: 1.2rem;
	}
	.hero h1{
		font-weight: 400;
		font-size: 1rem;
		text-align: left;
		margin: 0; padding: 0;
		margin-bottom: .5rem;
		color: #FF4114;
	}
	/* ----------------------------------- */

	/* Footer */
	.footer{
		border-top: 1px solid #dedede;
	}
	.footer .container{
		font-size: 1rem;
		display: flex; flex-flow: row nowrap;
		justify-content: space-between; align-items: center;
	}
	.footer .container .social{
		display: flex; flex-flow: row nowrap;
	}
	.footer .container .img{
		width: 50px; height: 50px;
		display: flex; justify-content: center; align-items: center;
		margin-left: 1rem;
		border-radius: 50px;
		transition: .1s linear;
	}
	.footer .container .img:hover{
		background-color: #f3f3f3;
	}
	.footer .container .img img{ max-width: 50%; }
	/* ----------------------------------- */

	/* List of jobs */
	.trabajos{
		display: flex; flex-flow: column wrap;
		justify-content: flex-end; align-items: flex-start;
	}
	.trabajos .trabajo{
		flex: 0 0 100%;
		width: 100%; float: right;
		text-align: left;
		border: 1px solid #dedede;
		padding: 0; margin: 0;
		margin-bottom: 1rem;
		position: relative;
	}
	.trabajos .trabajo.featured{ 
		background-color: rgba(255,213,0,0.2); 
		border-color: rgba(255,213,0,0.2);
	}
	.trabajos .trabajo a{
		display: block;
		padding: 1rem;
		position: relative;
	}
	.trabajos .trabajo.categoria a{
		padding-left: 4rem;
	}
	.trabajos .trabajo .img{
		position: absolute;
		top: 50%; transform: translateY(-50%);
		width: 64px; max-width: 64px;
		height: 64px; max-height: 64px;
		display: none; flex-flow: row wrap; justify-content: center; align-items: center;
		background-color: white; border: 1px solid #dedede;
		border-radius: 50px;
		left: -32px;
		overflow: hidden;
	}
	.trabajos .trabajo.categoria img{
		position: absolute;
		top: 50%; transform: translateY(-50%);
		width: 32px; max-width: 32px;
		height: 32px; max-height: 32px;
		left: 15px;
	}
	.trabajos .trabajo .img img{ max-width: 64px; width: 64px; }
	.trabajos .trabajo h2{
		margin: 0; padding: 0;
		display: flex; 
		flex-flow: row nowrap;
		justify-content: space-between; 
		align-items: center;
		font-size: 1.1rem;
	}
	.trabajos .trabajo h3{
		font-weight: 400;
		margin: 0; padding: 0;
	}
	.trabajos .trabajo h2 span{
		font-size: 1.2rem;
		font-family: 'Montserrat', sans-serif;
		color: #838383;
		font-weight: 400;
	}
	.trabajos .trabajo p{
		margin: 0; padding: 0;
		color: #838383;
		padding-bottom: .5rem;
	}
	.trabajos .trabajo h2 span, .trabajos .trabajo p{
		font-size: .8rem;
	}
	.empty-message {
		margin: 40px auto;
	}
	/* ----------------------------------- */

	/* Submit new job listing form */
	form.publicar-anuncio{
		display: flex; flex-flow: row wrap;
		justify-content: space-between; align-items: flex-start;
		width: 100%; max-width: 100%;
		margin: 0 auto;
	}
	form.publicar-anuncio label{
		display: flex; flex-flow: column wrap;
		justify-content: space-between; align-items: flex-start;
		flex: 0 0 100%;
		text-align: left;
		box-sizing: border-box;
		margin-bottom: 2rem;
	}
	form.publicar-anuncio label input, form.publicar-anuncio label select{
		width: 100%; padding: 12px;
		border: 1px solid #dedede;
		background-color: white;
		box-sizing: border-box;
	}
	form.publicar-anuncio label small{
		margin-top: .5rem;
		color: #666;
	}
	form.publicar-anuncio label p{
		margin: 0; padding: 0;
		font-size: 1rem;
		font-weight: 700;
		margin-bottom: .5rem;
		position: relative;
	}
	form.publicar-anuncio span.required{
		position: absolute;
		top: 0;
		right: -13px;
		width: 6px; height: 6px;
		background-color: #FF4114;
		border-radius: 80px;
	}
	form.publicar-anuncio .boton-pagar{
		display: flex; flex-flow: row nowrap;
		justify-content: space-between; align-items: center;
		flex: 0 0 100%;
		width: 100%;
		margin-top: 2rem;
	}
	form.publicar-anuncio .boton-pagar p{
		font-size: 1.4rem;
		font-weight: 700;
		display: flex;
		align-items: flex-end;
	}
	form.publicar-anuncio .boton-pagar p span{
		color: #FF4114;
		margin-left: .5rem;
		font-size: 1.8rem;
		display: flex;
	}
	.custom-checkbox-row input[type="checkbox"] {
		margin: 0;
		opacity: 0;
	}
	.custom-checkbox-row {
		position: relative;
		margin-bottom: 0 !important;
	}
	.custom-checkbox-row input[type="checkbox"] + p {
		padding-left: 30px;
		font-size: 1rem;
		position: realtive;
		font-weight: 300;
		display: inline-block;
	}
	.custom-checkbox-row p span{
		font-weight: 700;
		color: #FF4114;
	}
	.custom-checkbox-row input[type="checkbox"] + p::before {
		border-color: #dddddd;
		border-radius: 4px;
		border-style: solid;
		border-width: 1px;
		content: "";
		cursor: pointer;
		display: inline-block;
		height: 17px;
		left: 0;
		position: absolute;
		transition: 0.3s linear all;
		width: 17px;
	}
	.custom-checkbox-row input[type="checkbox"] + p::before {
		border-color: #dddddd;
		background-color: #dddddd;
		border-radius: 0;
		transform: scale(1);
	}
	.custom-checkbox-row input[type="checkbox"]:checked + p::before {
		border-color: #dddddd;
		border-style: dotted;
		transition: 0.3s linear all;
	}
	.custom-checkbox-row input[type="checkbox"]:checked + p::before {
		background-color: #FF4114;
		border-style: solid;
		transform: scale(1.1);
		border-color: #FF4114;
	}
	.custom-checkbox-row input[type="checkbox"]:checked + p::after {
		transform: scale(1);
		opacity: 1;
	}
	.custom-checkbox-row  input[type="checkbox"]:checked + p::after {
		color: #FF4114;
		cursor: pointer;
		left: 5px;
		position: absolute;
		top: 5px;
		transform: scale(1);
		transition: 0.3s linear all;
	}
	.custom-checkbox-row  input[type="checkbox"] + p::after {
		transform: scale(2);
		opacity: 0;
	}
	.custom-checkbox-row  input[type="checkbox"] + p::after {
		content: "";
		transform: scale(0);
		transition: 0.3s linear all;
	}
	.publication-editor {
		width: 100%;
	}
	.publication-editor textarea {
		width: 100%;
	}
	.editor-toolbar {
		border-color: #dedede !important;
	}
	.spinner-container {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		transform: translate(-50%, -50%);
	}
	.spinner-container svg {
		height: 70%;
		animation: spin 1s infinite;
	}
	@keyframes spin {
		0% { transform: rotate(0deg)}
		100% { transform: rotate(360deg)}
	}
	/* ----------------------------------- */

	/* About us */
	.about .container{
		text-align: left;
	}
	/* ----------------------------------- */

	/* Desktop menu */
	nav.desktop{
		display: none;
		border-bottom: 1px solid #dedede;
		position: fixed; top: 0; left: 0;
		width: 100%; max-width: 100%;
		z-index: 9999;
		background-color: white;
	}
	nav.desktop .logo:hover{ cursor :pointer; }
	nav.desktop img{ max-height: 44px; }
	nav.desktop .container{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between; align-items: center;
		height: 64px; max-height: 64px;
	}
	nav.desktop a:hover{ cursor: pointer; }
	nav.desktop .container ul{
		margin: 0; padding: 0;
		display: flex; flex-flow: row nowrap;
		justify-content: flex-end; align-items: center;
		list-style-type: none;
		position: relative;
	}
	nav.desktop .container ul li a{
		margin-right: 1rem;
		font-weight: 600;
		font-size: .9rem;
		position: relative;
	}
	nav.desktop ul.dropdown{
		position: absolute;
		display: none; flex-flow: column wrap;
		padding: 1rem;
		background-color: white;
		box-shadow: 0 1px 4px 0 rgba(0,0,0,.12);
		width: 170px;
		border-radius: 2px;
		left: -60px;
		z-index: 9999;
		margin-top: 1rem;
	}
	nav.desktop .dropdown-parent:hover ul.dropdown{ display: flex; }
	nav.desktop ul.dropdown::after{
		content: '';
		position: absolute;
		top: -1rem;
		bottom: 0;
		width: 100%;
		height: 1rem;
	}
	nav.desktop ul.dropdown li{
		width: 100%;
		text-align: left;
		margin-bottom: 1rem;
	}
	nav.desktop ul.dropdown li:last-child{ margin-bottom: 0; }
	/* ----------------------------------- */

	/* Mobile menu */
	nav.mobile{
		display: block;
		position: fixed;
		left: 0; width: 100%; max-width: 100%;
		min-height: 64px; max-height: 64px; height: 64px;
		background-color: white;
		box-shadow: 0 1px 4px 0 rgba(0,0,0,.12);
		padding: 1rem; box-sizing: border-box;
		z-index: 999;
	}
	nav.mobile.top{ top: 0; }
	nav.mobile.bottom{ bottom: 0; }
	nav.mobile.top form{ 
		display: flex; 
		flex-flow: row nowrap;
		justify-content: flex-start; align-items: center;
		background-color: #f2f2f2;
		padding: 4px 16px;
		box-sizing: border-box;
		border-radius: 50px; width: 100%;
	}
	nav.mobile.top form img{
		width: 20px; max-width: 20px;
		transform: scale(.8);
	}
	nav.mobile.top form input{
		border: none;
		background-color: transparent;
		font-size: .8rem;
		margin-left: 12px;
		flex: 1;
	}
	nav.mobile.bottom ul{
		display: flex; flex-flow: row nowrap;
		justify-content: space-around; align-items: center;
		margin: 0; padding: 0; width: 100%; max-width: 100%;
		list-style-type: none;
		font-size: .8rem;
	}
	nav.mobile.bottom ul li a.active{
		color: #FF4114;
	}
	nav.mobile.bottom ul li a{
		position: relative;
		min-height: 40px; display: flex;
		flex-flow: row wrap; justify-content: center; align-items: flex-end;
	}
	nav.mobile.bottom ul li a::before{
		content: '';
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		position: absolute; width: 25px; height: 25px;
		top: -5px;
	}
	nav.mobile.bottom ul li.blog a::before{ background-image: url('/static/images/blog.svg'); }
	nav.mobile.bottom ul li.inicio a::before{ background-image: url('/static/images/home.svg'); }
	nav.mobile.bottom ul li.categorias a::before{ background-image: url('/static/images/list.svg'); }
	nav.mobile.bottom ul li.publicar a::before{ background-image: url('/static/images/add.svg'); }
	/* Same icons with accent color */
	nav.mobile.bottom ul li.blog a.active::before{ background-image: url('/static/images/blog-accent.svg'); }
	nav.mobile.bottom ul li.inicio a.active::before{ background-image: url('/static/images/home-accent.svg'); }
	nav.mobile.bottom ul li.categorias a.active::before{ background-image: url('/static/images/list-accent.svg'); }
	nav.mobile.bottom ul li.publicar a.active::before{ background-image: url('/static/images/add-accent.svg'); }
	/* ----------------------------------- */

	/* Single job listing */
	.anuncio .container{
		display: flex; flex-flow: row wrap;
		justify-content: space-between; align-items: flex-start;
	}
	.anuncio .container .content{
		flex: 0 0 100%;
		text-align: left;
		max-width: 100%;
	}
	.anuncio .container .content.content.fullwidth.center{
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
	}
	.anuncio .container .sidebar{
		flex: 0 0 100%;
		display: none;
		position: relative;
	}
	.anuncio .container .sidebar .img{
		margin: 0 auto;
		position: relative;
		text-align: center;
		width: 96px; max-width: 96px;
		height: 96px; max-height: 96px;
		display: flex; flex-flow: row wrap; justify-content: center; align-items: center;
		background-color: white; border: 1px solid #dedede;
		border-radius: 50px;
		overflow: hidden;
		margin-bottom: 1rem;
	}
	.anuncio .container .sidebar .img img{
		position: absolute;
		top: 50%; transform: translateY(-50%);
		width: 64px; max-width: 64px;
		height: 64px; max-height: 64px;
		left: 15px;
	}
	.anuncio .container .sidebar h2{
		margin-top: 0;
	}
	.anuncio .container .content p.date{
		text-transform: uppercase;
		color: #838383;
		margin: 0; padding: 0;
	}
	.anuncio .container .content > h1{
		margin: 0; padding: 0;
		margin-top: .5rem;
	}
	.anuncio .container .content .description{
		margin-top: 2rem;
	}
	.anuncio .container .content .description h1, .anuncio .container .content .description h2, .anuncio .container .content .description h3, .anuncio .container .content .description h4, .anuncio .container .content .description h5, .anuncio .container .content .description h6{
		font-weight: 600;
		font-size: 1.1rem;
		margin: 0; padding: 0;
		margin-bottom: 2rem;
		box-sizing: border-box;
	}
	.anuncio .container .content a{
		font-weight: 700;
		background-color: rgba(221,224,244,0.9);
		transition: .1s linear;
	}
	.anuncio .container .content img{ max-width: 100%; margin-bottom: 2rem;}
	.anuncio .container .content p, .anuncio .container .content ul, .anuncio .container .content > div{
		margin: 0; padding: 0;
		margin-bottom: 1rem;
		box-sizing: border-box;
		line-height: 1.6;
	}
	.anuncio .container .content ul{ margin-left: 3rem; }
	.anuncio .container .content li{ margin-bottom: 1rem; }
	/* ----------------------------------- */

	/* Contenedores que tienen margen */
	.trabajos, .nuevo, .anuncio, .about{ margin-top: 2rem; margin-bottom: 2rem; }
	/* ----------------------------------- */

	/* Main button */
	.main-button{
		color: white;
		border: none; outline: none;
		background-color: #FF4114;
		font-weight: 700;
		border-radius: 2px;
		/* min-width: 150px; */
		font-size: .8rem;
		box-sizing: border-box;
		padding: 8px 24px;
		position: relative;
	}
	.main-button.big{ font-size: 1.1rem; }
	.main-button:hover{ 
		cursor: pointer; 
		box-shadow: 0 4px 16px rgba(0,1,31,0.2);
	}
	.main-button[disabled]{
		color: #FFF7D7;
		background-color: #FF8366;
	}
	.main-button[disabled]:hover{ 
		cursor: initial; 
		box-shadow: none;
	}
	/* ----------------------------------- */

	/* Tablets */
	@media only screen and (min-width : 800px) {	
		body{ padding-bottom: 0; }

		.hero p{
			text-align: center;
			font-size: 2.2rem;
		}
		.hero h1{
			text-align: center;
		}

		.anuncio .container .content{
			flex: 0 0 65%;
			text-align: left;
		}
		.anuncio .container .content.fullwidth{ flex: 0 0 100%; }
		.anuncio .container .sidebar{
			flex: 0 0 30%;
			display: block;
			background-color: #f8f9fa;
			padding: 2rem 1rem;
			border-radius: 2px;
			box-shadow: 0 1px 5px rgba(0,0,0,0.15);
		}

		nav.mobile{ display: none; }
		nav.desktop{ display: flex; }

		form.publicar-anuncio label.small{ flex: 0 0 49%; }


		.trabajos, .nuevo, .anuncio, .about{ padding-top: 1rem; padding-bottom: 1rem; }

		.trabajos .trabajo{ width: calc(100% - 32px); float: right; }
		.trabajos .trabajo a{ padding: 1rem 3.5rem; }
		.trabajos .trabajo h2{ font-size: 1.6rem; }
		.trabajos .trabajo h2 span, .trabajos .trabajo p{ font-size: 1rem; }
		.trabajos .trabajo .img{ display: flex; }

		.footer .container{
			font-size: 1rem;
			display: flex; flex-flow: row nowrap;
			justify-content: space-between; align-items: center;
		}
	}
	/* ----------------------------------- */

	/* Medium Devices, Desktops */
	@media only screen and (min-width : 62em) {
	}
	/* ----------------------------------- */

	::selection{
		background-color: rgba(245, 224, 106, 0.959);
		color: black;
	}
`;
export default GlobalStyle;