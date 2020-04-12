import { NextPageContext } from "next";
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
	let latestPost = 0;
	let postsXml = "";
	jobs.map(post => {
		postsXml += `
			<url>
			<loc>https://www.trabajosremotos.es/${job.slug}</loc>
			<priority>0.80</priority>
			</url>
		`;
	});
	return {
		postsXml,
		latestJobs
	};
};

const sitemapXml = (blogPosts, jobsList) => {
	const { postsXml, latestPost } = blogXml(blogPosts);
	const { jobsXml, latestJobs } = jobsListingXml(jobsList);
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

const Sitemap = () => { };

Sitemap.getInitialProps = async ({ res }) => {
	try {
		const posts = await fetch(`${API_URL}/posts?_sort=created_at:DESC`);
		const jobs = await fetch(`${API_URL}/jobs?_sort=pinned:DESC,created_at:desc`);

		let postsData = await posts.json();
		let jobsData = await jobs.json();

		const blogPosts = getBlogPosts();
		res.setHeader("Content-Type", "text/xml");
		res.write(sitemapXml(postsData, jobsData));
		res.end();
	} catch (error) {
		console.log(error)
		return { error }
	}
	
};