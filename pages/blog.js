import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

import { API_URL, getLocalDate } from '../utils';

const Blog = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>Blog - Trabajos remotos</title>
			</Head>
			<GridContainer>
				{posts ? posts.map((post) => (
					<a key={post.id} href={`/blog/${post.slug}`}>
						<PostThumbnail
							src={post.thumbnail
									? `${API_URL}${post.thumbnail.url}`
									: null
								}
						/>
						<PostContent>
							<PostDate><div></div>{post.created_at}</PostDate>
							<PostTitle className="prata">{post.title}</PostTitle>
						</PostContent>
					</a>
				)) : null}
			</GridContainer>
		</div>
	)
};

export default Blog;

Blog.getInitialProps = async () => {
	try {
		const res = await fetch(`${API_URL}/posts`);
		let data = await res.json();
		data = data.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))
		return { posts: data };
	} catch (error) {
		console.log(error)
		return { error }
	}
};

// Styles
const GridContainer = styled.div`
	display: grid;
    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    padding: 60px 20px;
    margin: 0 auto;
    max-width: 1200px;
`;
const PostThumbnail = styled.img`

`;
const PostContent = styled.div`
	position: relative;
	box-sizing: border-box;
	padding-left: 60px;
`;
const PostTitle = styled.h2`
	overflow: hidden;
    display: -webkit-box;
    /* -webkit-line-clamp: 2; */
    -webkit-box-orient: vertical;
	font-size: 20px;
`;
const PostDate = styled.div`
	margin-top: 1rem;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 600;
	position: relative;
	color: #444;
	
	div{
		position: absolute;
		width: 6px;
		height: 6px;
		background-color: #444;
		border-radius: 50%;
		top: 50%;
		left: -30px;
		transform: translateY(-50%);
	}
`;