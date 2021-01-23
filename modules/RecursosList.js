import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import { WEB_URL, API_URL, getLocalDate } from '../utils';

function RecursosList(props) {
	const { initialJobs, query } = props;
	const [jobs, setJobs] = useState(initialJobs || []);
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
			console.error('Error en loadMore() -> RecursosList.js');
		}
	}

	useEffect(() => {
		if (initialJobs !== jobs) {
			setJobs(initialJobs)
		};
		if (!initialJobs || initialJobs.length === 0) {
			setHasMore(false);
		}
	}, [initialJobs])

	return (
		<div>
			<GridContainer
				pageStart={0}
				className="blog-container notop"
				loadMore={loadMore}
				hasMore={hasMore}
				loader={
					<div key="blink-lol" className="blink-wrapper">
						<div className="blink"></div>
					</div>
				}
			>
				{jobs ? jobs.map((job) => (
          <BlogPost className="umami--click--abrir-recurso" key={job.id} target="_blank" href={`${job.Url}?ref=trabajosremotos`}>
						<PostContent>
							<PostThumbnail
								src={`${API_URL}${job.Logo[0].url}`}
							/>
							<PostTitle className="prata">{job.Nombre}</PostTitle>
							<PostDescription>{job.Description}</PostDescription>
							<PostButton>Consíguelo</PostButton>
						</PostContent>
					</BlogPost>
				)) : null}
			</GridContainer>
		</div>
	)
}

export default RecursosList;

// Styles
const GridContainer = styled(InfiniteScroll)`
	display: grid;
    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    padding: 60px 20px;
    margin: 0 auto;
    max-width: 960px;
`;
const PostThumbnail = styled.img`
	width: 56px;
	border-radius: 10px;
	margin-bottom: 1rem;
	max-width: 100%;
`;
const BlogPost = styled.a`
	width: 100%;
	max-width: 100%;
	border-radius: 10px;
	overflow: hidden;
	transition: .1s linear;
	background-color: white;
	border: 1px solid #eee;
	
	&:hover{
		transform: translateY(-5px);
		box-shadow: 0 0.3rem 1.2rem 0 rgba(5,10,15, .03);
	}
`;
const PostContent = styled.div`
	position: relative;
	box-sizing: border-box;
	padding: 1rem;
`;
const PostButton = styled.p`
	width: 100%;
	color: white;
	background-color: #fff;
	border: 1px solid #3e75fc;
	color: #3e75fc;
	padding: 8px 12px;
	font-size: .9rem;
	font-weight: 400;
	border-radius: 2px;
	display: inline-block;
	box-sizing: border-box;
	margin: 0;
	text-align: center;
`;
const PostTitle = styled.h2`
	font-size: 1.4rem;
	margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 400;
	white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
const PostDescription = styled.p`
	margin-top: 1rem;
	font-size: 1rem;
	font-weight: 400;
	position: relative;
	min-height: 180px;
	color: #444;
`;