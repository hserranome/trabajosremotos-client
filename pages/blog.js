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
					<BlogPost key={post.id} href={`/blog/${post.slug}`}>
						<PostThumbnail
							src={post.thumbnail
									? `${API_URL}${post.thumbnail.url}`
									: null
								}
						/>
						<PostContent>
							<PostTitle className="prata">{post.title}</PostTitle>
							<PostDate><div></div>{post.created_at}</PostDate>
						</PostContent>
					</BlogPost>
				)) : null}
			</GridContainer>
		</div>
	)
};

export default Blog;

Blog.getInitialProps = async () => {
	try {
		const res = await fetch(`${API_URL}/posts?_sort=created_at:DESC`);
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
const BlogPost = styled.a`
	width: 100%;
	max-width: 100%;
	border-radius: 12px;
	overflow: hidden;
	transition: .1s linear;
	box-shadow: 0 0.3rem 1.2rem 0 rgba(5,10,15,.08);
	border: 1px solid #eee;
	
	&:hover{
		transform: translateY(-5px);
		box-shadow: 0 0.3rem 1.2rem 0 rgba(5,10,15,.15);
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
const PostDate = styled.div`
	margin-top: 1rem;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 400;
	position: relative;
	color: #444;
`;