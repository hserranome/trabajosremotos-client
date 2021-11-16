import React from 'react'
import fetch from 'isomorphic-unfetch';

import { API_URL } from '../utils';

const blogXml = (blogPosts) => {
	let latestPost = 0;
	let postsXml = "";
	blogPosts.map(post => {
		postsXml += `
			<url>
			<loc>https://www.trabajosremotos.es/blog/${post.slug}</loc>
			</url>
		`;
	});
	return {
		postsXml,
		latestPost
	};
};

const jobsListingXml = (jobs) => {
	let latestJob = 0;
	let jobsXml = "";
	jobs.map(job => {
		jobsXml += `
			<url>
			<loc>https://www.trabajosremotos.es/trabajo/${job.slug}</loc>
			<priority>0.80</priority>
			</url>
		`;
	});
	return {
		jobsXml,
		latestJob
	};
};

const sitemapXml = (blogPosts, jobsList) => {
	const { postsXml } = blogXml(blogPosts);
	const { jobsXml } = jobsListingXml(jobsList);
	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.trabajosremotos.es/</loc>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/categoria/programacion</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/categoria/diseno</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/categoria/marketing</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/categoria/otros</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/categoria/atencion-al-cliente</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/alternativas</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/alternativas/linkedin</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/alternativas/indeed</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/contacto</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/blog</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/recursos</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/publicar</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/publicitate</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/privacidad</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/terminos</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/cookies</loc>
      <priority>0.5</priority>
    </url>
    ${jobsXml}
    ${postsXml}
  </urlset>`;
};

class Sitemap extends React.Component {
	static async getInitialProps({ res }) {
    const postsRes = await fetch(`${API_URL}/posts?_limit=-1`);
		const posts = await postsRes.json();
    const jobsRes = await fetch(`${API_URL}/jobs?_limit=-1`);
		const jobs = await jobsRes.json();

		res.setHeader("Content-Type", "text/xml");
		res.write(sitemapXml(posts, jobs));
		res.end();
	}
}

export default Sitemap; 