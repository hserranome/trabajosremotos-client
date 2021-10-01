const eventTypes = {
	"apply-to-job": "apply-to-job",
	"click-on-banner": "click-on-banner",
	"click-on-cta": "click-on-cta",
	"click-on-analytics": "click-on-analytics",
};

const trackEvent = (value, type) => {
	umami.trackEvent(value, type);
};

export default { trackEvent, eventTypes };
