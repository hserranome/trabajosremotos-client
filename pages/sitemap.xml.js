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
      <loc>https://www.trabajosremotos.es/sobrenosotros</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.trabajosremotos.es/blog</loc>
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
		const postsRes = await fetch(`${API_URL}/posts?_sort=created_at:DESC`);
		const posts = await postsRes.json();
		const jobsRes = await fetch(`${API_URL}/jobs?_sort=pinned:DESC,created_at:desc`);
		const jobs = await jobsRes.json();

		res.setHeader("Content-Type", "text/xml");
		res.write(sitemapXml(posts, jobs));
		res.end();
	}
}

export default Sitemap; 