// File from previous analytics (umami), not in use right now

const eventTypes = {
	"apply-to-job": "apply-to-job",
	"click-on-banner": "click-on-banner",
	"click-on-cta": "click-on-cta",
	"click-on-analytics": "click-on-analytics",
};

const trackEvent = (value, type) => {
	try {
		if (umami) {
			umami.trackEvent(value, type);
		}
	} catch (e) {}
};

export default { trackEvent, eventTypes };
