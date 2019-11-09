import { createGlobalStyle } from 'styled-components';

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
		background-color: #FF4114 !important;
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

		/* 
	
	
	nprogress.css


	*/
		/* Make clicks pass-through */
		#nprogress {
			pointer-events: none;
		}

		#nprogress .bar {
			background: #FF4114;

			position: fixed;
			z-index: 9999;
			top: 0;
			left: 0;

			width: 100%;
			height: 2px;
		}

		/* Fancy blur effect */
		/* #nprogress .peg {
		display: block;
		position: absolute;
		right: 0px;
		width: 100px;
		height: 100%;
		box-shadow: 0 0 10px #29d, 0 0 5px #29d;
		opacity: 1;

		-webkit-transform: rotate(3deg) translate(0px, -4px);
		-ms-transform: rotate(3deg) translate(0px, -4px);
		transform: rotate(3deg) translate(0px, -4px);
		} */

		/* Remove these to get rid of the spinner */
		#nprogress .spinner {
			display: block;
			position: fixed;
			z-index: 9999;
			top: 15px;
			right: 15px;
		}

		#nprogress .spinner-icon {
			width: 18px;
			height: 18px;
			box-sizing: border-box;

			border: solid 2px transparent;
			border-top-color: #FF4114;
			border-left-color: #FF4114;
			border-radius: 50%;

			-webkit-animation: nprogress-spinner 400ms linear infinite;
			animation: nprogress-spinner 400ms linear infinite;
		}

		.nprogress-custom-parent {
			overflow: hidden;
			position: relative;
		}

		.nprogress-custom-parent #nprogress .spinner,
		.nprogress-custom-parent #nprogress .bar {
			position: absolute;
		}

		@-webkit-keyframes nprogress-spinner {
			0% {
				-webkit-transform: rotate(0deg);
			}
			100% {
				-webkit-transform: rotate(360deg);
			}
		}
		@keyframes nprogress-spinner {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}


	/* 
	
	
	easymde.min.css


	*/
	/**
	* easymde v2.8.0
	* Copyright Jeroen Akkerman
	* @link https://github.com/ionaru/easy-markdown-editor
	* @license MIT
	*/
		.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5);-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta{color:#555}.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-s-default .cm-error{color:red}.cm-invalidchar{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:0;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:0}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-focused div.CodeMirror-cursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:''}span.CodeMirror-selectedtext{background:0 0}.CodeMirror{box-sizing:border-box;height:auto;border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:1;word-wrap:break-word}.CodeMirror-scroll{cursor:text}.CodeMirror-fullscreen{background:#fff;position:fixed!important;top:50px;left:0;right:0;bottom:0;height:auto;z-index:9;border-right:none!important;border-bottom-right-radius:0!important}.CodeMirror-sided{width:50%!important}.CodeMirror-placeholder{opacity:.5}.CodeMirror-focused .CodeMirror-selected{background:#d9d9d9}.editor-toolbar{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;padding:0 10px;border-top:1px solid #bbb;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px}.editor-toolbar:after,.editor-toolbar:before{display:block;content:' ';height:1px}.editor-toolbar:before{margin-bottom:8px}.editor-toolbar:after{margin-top:8px}.editor-toolbar.fullscreen{width:100%;height:50px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}.editor-toolbar.fullscreen::before{width:20px;height:50px;background:-moz-linear-gradient(left,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,1)),color-stop(100%,rgba(255,255,255,0)));background:-webkit-linear-gradient(left,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);background:-o-linear-gradient(left,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);background:-ms-linear-gradient(left,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);background:linear-gradient(to right,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);position:fixed;top:0;left:0;margin:0;padding:0}.editor-toolbar.fullscreen::after{width:20px;height:50px;background:-moz-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),color-stop(100%,rgba(255,255,255,1)));background:-webkit-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);background:-o-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);background:-ms-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);background:linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);position:fixed;top:0;right:0;margin:0;padding:0}.editor-toolbar button{background:0 0;display:inline-block;text-align:center;text-decoration:none!important;width:30px;height:30px;margin:0;padding:0;border:1px solid transparent;border-radius:3px;cursor:pointer}.editor-toolbar button.active,.editor-toolbar button:hover{background:#fcfcfc;border-color:#95a5a6}.editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}.editor-toolbar button:after{font-family:Arial,"Helvetica Neue",Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}.editor-toolbar button.heading-1:after{content:"1"}.editor-toolbar button.heading-2:after{content:"2"}.editor-toolbar button.heading-3:after{content:"3"}.editor-toolbar button.heading-bigger:after{content:"▲"}.editor-toolbar button.heading-smaller:after{content:"▼"}.editor-toolbar.disabled-for-preview button:not(.no-disable){opacity:.6;pointer-events:none}@media only screen and (max-width:700px){.editor-toolbar i.no-mobile{display:none}}.editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}.editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}.editor-statusbar .lines:before{content:'lines: '}.editor-statusbar .words:before{content:'words: '}.editor-statusbar .characters:before{content:'characters: '}.editor-preview-full{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7;overflow:auto;display:none;box-sizing:border-box}.editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;overflow:auto;display:none;box-sizing:border-box;border:1px solid #ddd;word-wrap:break-word}.editor-preview-active-side{display:block}.editor-preview-active{display:block}.editor-preview{padding:10px;background:#fafafa}.editor-preview>p{margin-top:0}.editor-preview pre{background:#eee;margin-bottom:10px}.editor-preview table td,.editor-preview table th{border:1px solid #ddd;padding:5px}.cm-s-easymde .cm-tag{color:#63a35c}.cm-s-easymde .cm-attribute{color:#795da3}.cm-s-easymde .cm-string{color:#183691}.cm-s-easymde .cm-header-1{font-size:200%;line-height:200%}.cm-s-easymde .cm-header-2{font-size:160%;line-height:160%}.cm-s-easymde .cm-header-3{font-size:125%;line-height:125%}.cm-s-easymde .cm-header-4{font-size:110%;line-height:110%}.cm-s-easymde .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}.cm-s-easymde .cm-link{color:#7f8c8d}.cm-s-easymde .cm-url{color:#aab2b3}.cm-s-easymde .cm-quote{color:#7f8c8d;font-style:italic}.CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}


`;
export default GlobalStyle;