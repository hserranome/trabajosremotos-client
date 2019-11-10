import Head from 'next/head';
import styled from 'styled-components';
import { API_URL } from '../utils';

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
						<PostTitle>{post.title}</PostTitle>
					</a>
				)) : null}
				{posts ? posts.map((post) => (
					<a key={post.id} href={`/blog/${post.slug}`}>
						<PostThumbnail
							src={post.thumbnail
									? `${API_URL}${post.thumbnail.url}`
									: null
								}
						/>
						<PostTitle>{post.title}</PostTitle>
					</a>
				)) : null}
				{posts ? posts.map((post) => (
					<a key={post.id} href={`/blog/${post.slug}`}>
						<PostThumbnail
							src={post.thumbnail
									? `${API_URL}${post.thumbnail.url}`
									: null
								}
						/>
						<PostTitle>{post.title}</PostTitle>
					</a>
				)) : null}
				{posts ? posts.map((post) => (
					<a key={post.id} href={`/blog/${post.slug}`}>
						<PostThumbnail
							src={post.thumbnail
									? `${API_URL}${post.thumbnail.url}`
									: null
								}
						/>
						<PostTitle>{post.title}</PostTitle>
					</a>
				)) : null}
				{posts ? posts.map((post) => (
					<a key={post.id} href={`/blog/${post.slug}`}>
						<PostThumbnail
							src={post.thumbnail
									? `${API_URL}${post.thumbnail.url}`
									: null
								}
						/>
						<PostTitle>{post.title}</PostTitle>
					</a>
				)) : null}
				{posts ? posts.map((post) => (
					<a key={post.id} href={`/blog/${post.slug}`}>
						<PostThumbnail
							src={post.thumbnail
									? `${API_URL}${post.thumbnail.url}`
									: null
								}
						/>
						<PostTitle>{post.title}</PostTitle>
					</a>
				)) : null}
				{posts ? posts.map((post) => (
					<a key={post.id} href={`/blog/${post.slug}`}>
						<PostThumbnail
							src={post.thumbnail
									? `${API_URL}${post.thumbnail.url}`
									: null
								}
						/>
						<PostTitle>{post.title}</PostTitle>
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
		console.log(data);
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
const PostTitle = styled.h2`
	overflow: hidden;
    display: -webkit-box;
    /* -webkit-line-clamp: 2; */
    -webkit-box-orient: vertical;
	font-size: 20px;
`;