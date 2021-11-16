import Link from "./ActiveLink";

const PublishBanner = () => {
	return (
		<div style={{ padding: "0 1rem", overflow: "hidden" }} className="container">
			<div
				className="flex flex-col lg:flex-row items-center justify-between rounded-xl overflow-hidden w-full mx-auto py-4 px-10 z-20"
				style={{ backgroundColor: "#e2f4fa" }}
			>
				<h2 className="text-l text-black">
					<span className="font-regular">
						{/* <span className="accent-text font-bold">10.000</span> */}
          👉 Recibe los últimos <span className="font-bold">empleos remotos</span> todos los martes
					</span>
				</h2>
				<div className="pt-2 lg:pt-0">
					<button
						className="main-button trans"
						style={{ backgroundColor: "#e2f4fa !important", border: "2px solid #ff4114", color: "#ff4114" }}
					>
            <Link href="https://emailoctopus.com/lists/347308e1-960d-11ea-a3d0-06b4694bee2a/forms/subscribe">
							<span>Newsletter semanal</span>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PublishBanner;
