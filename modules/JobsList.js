import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';
import Markdown from 'markdown-to-jsx';
import LazyLoad from 'react-lazyload';
import ReactGA from "react-ga";

import { WEB_URL, API_URL, getLocalDate } from '../utils';
import addVisitedJob from '../utils/addVisitedJob';
import { logPageView } from '../utils/analytics';

function JobsList(props) {
	const { initialJobs, query } = props;
	const [jobs, setJobs] = useState(initialJobs || []);
	const [activeJob, setActiveJob] = useState(null);
	const [baseUrl, setBaseUrl] = useState(null);
	const [hasMore, setHasMore] = useState(true);

	const loadMore = async () => {
		try {
			const res = await fetch(`${API_URL}${query}&_start=${jobs.length}`);
			let data = await res.json();
			const nextJobs = data.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))
			if (nextJobs.length === 0) {
				setHasMore(false);
			}
			setJobs([...jobs, ...nextJobs]);
		} catch (error) {
			console.error('Error en loadMore() -> JobList.js');
		}
	}

	useEffect(() => {
		if (initialJobs !== jobs) {
			setJobs(initialJobs)
		};
		if (!initialJobs || initialJobs.length === 0) {
			setHasMore(false);
		}
		if (!baseUrl) setBaseUrl(document.location.pathname);
	}, [initialJobs])

	const scrollToTargetAdjusted = (id) => {
		// from -> https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
		const element = document.getElementById(id);
		const offset = 80;
		const bodyRect = document.body.getBoundingClientRect().top;
		const elementRect = element.getBoundingClientRect().top;
		const elementPosition = elementRect - bodyRect;
		const offsetPosition = elementPosition - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}

	const handleClick = async (jobId, url) => {
		if (activeJob === jobId) {
			await setActiveJob(null);
			history.pushState({
				id: 'homepage'
			}, document.title, `${WEB_URL}${baseUrl}`);
		} else {
			await setActiveJob(jobId);
			history.pushState({
				id: 'homepage'
			}, document.title, `${WEB_URL}${url}`);
			addVisitedJob(jobId)
    }
    // Eventos para google anayltics
    logPageView();

		scrollToTargetAdjusted(jobId);
	}

	let visitedJobs = null;
	if (typeof window !== 'undefined') {
		visitedJobs = JSON.parse(localStorage.getItem("visitedJobs"));
	}
	if (!visitedJobs) visitedJobs = [];
	return (
		<div className='container'>
			<InfiniteScroll
				pageStart={0}
				className='trabajos notop nobottom'
				loadMore={loadMore}
				hasMore={hasMore}
				loader={
					<div key="blink-lol" className="blink-wrapper">
						<div className="blink"></div>
					</div>
				}
			>
				{jobs && jobs.length > 0
					? (
						jobs.map((job) => job.company
							? (
								<div
									className={`trabajo ${job.featured ? 'featured' : ''}`}
									key={job.id}
									id={job.id}
								>
									{/* This href is just so google knows there's more things on the website, with the div alone google doesnt know how to get to that page, so it doesnt index it */}
									<a href={`https://trabajosremotos.es/trabajo/${job.slug}`} style={{ display: 'none' }}>{job.title}</a>
									<div className="a">
										<div
											className={
												visitedJobs.includes(job.id)
													? 'visited' : null
											}
											onClick={() => handleClick(job.id, `/trabajo/${job.slug}`)}
										>
											{job.logo && job.showLogo
												? (
													<div className='img'>
														<LazyLoad once>
															<img src={job.logo} alt={'logo ' + job.company} />
														</LazyLoad>
													</div>
												)
												: ''}
											<div>
												<h2>{job.title} <span>{job.pinned ? '📌' : ''} {job.created_at}</span></h2>
												<p>{job.company}</p>
											</div>
										</div>
										{activeJob === job.id
											? (
												<div className="description">
													<Markdown>{job.description ? job.description : ''}</Markdown>
													<div />
                          <a target="_blank" rel="noopener" className="main-button solicitar" onClick={() => ReactGA.event({ category: 'Trabajo', action: 'Solicitar trabajo', label: job.slug })} href={job.link.includes('@') ? `mailto:${job.link}` : job.link}>Solicitar trabajo</a>
												</div>
											)
											: null
										}
									</div>
								</div>
							)
							: (
								<a
									className={`trabajo anuncio`}
									key={job.id}
									id={job.id}
									href={job.Url}
								>
									<div className="a">
										<div>
											<div>
												<h2>{job.Title} <span>AD</span></h2>
												<p>{job.Subtitle}</p>
											</div>
										</div>
									</div>
								</a>
							)
						)
					)
					: (
						<div key="empty-div" className='empty-message'>No se han encontrado trabajos</div>
					)
				}
			</InfiniteScroll>
		</div>
	)
}

export default JobsList;