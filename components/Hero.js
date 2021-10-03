const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="desktop">
					<br />
					<br />
					<br />
				</div>
				<h1 className="hero-title">Trabajos remotos</h1>
				<p className="hero-subtitle">La plataforma para encontrar trabajos remotos online de manera sencilla.</p>
			</div>
			<div className="text-center pb-2">
				<div>
					<p className="max-w-md mx-auto text-xs text-gray-600 sm:text-sm mb-3">
						¿Quieres recibir las últimas ofertas de trabajo todos los martes?
					</p>
					<a
						href="https://emailoctopus.com/lists/347308e1-960d-11ea-a3d0-06b4694bee2a/forms/subscribe"
						target="_blank"
						className="inline-flex shadow-md focus:shadow-outline tracking-wide focus:outline-none items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto focus:shadow-outline focus:outline-none cursor:pointer"
						style={{ backgroundColor: "#ff4114" }}
						onClick={() => {
							analytics.trackEvent("newsletter-cta", analytics.eventTypes["click-on-cta"]);
						}}
					>
						¡Únete a nuestra newsletter!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;