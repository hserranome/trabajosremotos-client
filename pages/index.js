import JobsList from '../modules/JobsList';
// import '../utils/style.css';

// La de trabajo single
// La de formulario que lleva al pago

const Index = () => (
	<div className="container">
        <div className="hero">
            <h1>Trabajos remotos</h1>
            <p className="prata">La plataforma para encontrar trabajos online de manera sencilla.</p>
        </div>
		<JobsList /> 
	</div>
);

export default Index;