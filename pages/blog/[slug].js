import Head from 'next/head';
import Markdown from 'markdown-to-jsx';
import LazyLoad from 'react-lazyload';
import MailForm from '../../components/MailForm';

import { API_URL, getLocalDate } from '../../utils';
import Error from '../_error';


function SingleBlogPost(props) {
	const { publicacion } = props;
	if (!publicacion) return <Error />
	const trabajosRemotosLogo = 'https://www.trabajosremotos.es/static/images/logo.png';

	return (
		<div>
			{publicacion
				? (
					<Head>
						<title>{`${publicacion.seo_title}`}</title>

						<meta name="robots" content="all" />
						<meta property="og:title" content={`${publicacion.seo_title}`} key="trabajos-title-og" />
						<meta property="og:image" content={publicacion.thumbnail ? `https://api.trabajosremotos.es${publicacion.thumbnail.url}` : trabajosRemotosLogo} key="trabajos-logo-og" />
						<meta property="og:description" content={publicacion.meta_description} />
						<meta name="twitter:title" content={`${publicacion.seo_title}`} key="trabajos-title-twitter" />
						<meta name="twitter:image" content={publicacion.thumbnail ? `https://api.trabajosremotos.es${publicacion.thumbnail.url}` : trabajosRemotosLogo} key="trabajos-image-twitter" />
						<meta name="twitter:description" content={publicacion.meta_description} />
					</Head>
				)
				: (
					<Head>
						<title>{`404 - Trabajos remotos`}</title>

						<meta name="googlebot" content="noindex" />
					</Head>
				)
			}

			<div className="anuncio blog">
				{publicacion
					? (
						<div>
							<div className="blog-title">
								<h1>{publicacion.title}</h1>
								<p className="date">{publicacion.created_at}</p>
							</div>
							<div className="container small">
								<div className="content fullwidth">
									<div className="description">
										<LazyLoad once>
											<img
												className="blog-thumbnail"
												src={`https://api.trabajosremotos.es${publicacion.thumbnail.url}`}
												alt={publicacion.thumbnail_alt}
												title={publicacion.thumbnail_title}
											/>
										</LazyLoad>
										{publicacion.content
											? <Markdown>{publicacion.content}</Markdown>
											: ''
										}
									</div>
								</div>
							</div>
						</div>
					)
					: (
						<div className="container">
							<div className="content">
								<div className="empty-message">No se ha encontrado este artículo</div>
							</div>
						</div>
					)
				}

			</div>
		</div>
	)
}

SingleBlogPost.getInitialProps = async ({ query }) => {
	try {		
		// Blog post normal query
		const { slug } = query;
		const res = await fetch(`${API_URL}/posts?slug=${slug}`);
		const publicacions = await res.json();
		if (!publicacions || publicacions.length === 0) {
			return { publicacion: null }
		}
		const publicacion = publicacions[0];
		publicacion.created_at = getLocalDate(publicacion.created_at);
		
		return { publicacion };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default SingleBlogPost;