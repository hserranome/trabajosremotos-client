import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import { WEB_URL, API_URL, getLocalDate } from '../utils';

function PostsList(props) {
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
			console.error('Error en loadMore() -> PostsList.js');
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
				className="blog-container"
				loadMore={loadMore}
				hasMore={hasMore}
				loader={
					<div key="blink-lol" className="blink-wrapper">
						<div className="blink"></div>
					</div>
				}
			>
				{jobs ? jobs.map((job) => (
					<BlogPost key={job.id} href={`/blog/${job.slug}`}>
						<PostContent>
							<PostThumbnail
								// src={`${API_URL}${job.thumbnail.url}`}
								style={{ backgroundImage: `url(${API_URL}${job.thumbnail.url})` }}
							/>
							<PostTitle className="prata">{job.title}</PostTitle>
							<PostDate><div></div>{job.created_at}</PostDate>
						</PostContent>
					</BlogPost>
				)) : null}
			</GridContainer>
		</div>
	)
}

export default PostsList;

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
const PostThumbnail = styled.div`
	height: 150px;
	width: 100%;
	min-width: 100%;
	border-radius: 10px;
	margin-bottom: 2rem;
	background-color: #ededed;
	background-position: center;
	background-size: cover;
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
const PostTitle = styled.h2`
	font-size: 18px;
	margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 400;
	white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover{
    text-decoration: underline;
  }

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
const PostDate = styled.div`
	margin-top: 1rem;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 400;
	position: relative;
	color: #444;
`;