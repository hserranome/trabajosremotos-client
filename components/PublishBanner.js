import analytics from "../utils/analytics";
import ActiveLink from "./ActiveLink";

const PublishBanner = () => {
	return (
		<div style={{ padding: "0 1rem", overflow: "hidden" }} className="container">
			<div
				className="flex flex-col lg:flex-row items-center justify-between rounded-xl overflow-hidden w-full mx-auto py-4 px-10 z-20"
				style={{ backgroundColor: "#e2f4fa" }}
			>
				<h2 className="text-l text-black">
					<span className="font-bold">👉 ¿Contratando en remoto?</span>{" "}
					<span className="font-regular">
						Alcanza a más de <span className="accent-text font-bold">10.000</span> trabajadores en remoto
					</span>
				</h2>
				<div className="pt-2 lg:pt-0">
					<button
						className="main-button trans"
						style={{ backgroundColor: "#e2f4fa !important", border: "2px solid #ff4114", color: "#ff4114" }}
						onClick={() => {
							analytics.trackEvent("publish-cta", analytics.eventTypes["click-on-cta"]);
						}}
					>
						<ActiveLink href="/publicar">
							<span>Publica un trabajo</span>
						</ActiveLink>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PublishBanner;
