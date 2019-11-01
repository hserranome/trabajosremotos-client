import Head from 'next/head';
import Markdown from 'markdown-to-jsx';

import { API_URL, getLocalDate } from '../../utils';


function SingleBlogPost(props) {
	const { publicacion } = props;
	const trabajosRemotosLogo = 'https://trabajosremotos.es/static/images/logo.png';

	return (
		<div>
			{publicacion
				? (
					<Head>
						<title>{`${publicacion.seo_title} | Trabajosremotos.es`}</title>

						<meta name="robots" content="all" />
						<meta property="og:title" content={`${publicacion.seo_title} | Trabajosremotos.es`} key="trabajos-title-og" />
						<meta property="og:image" content={publicacion.thumbnail ? publicacion.thumbnail : trabajosRemotosLogo} key="trabajos-logo-og" />
						<meta property="og:description" content={publicacion.meta_description} />
						<meta name="twitter:title" content={`${publicacion.seo_title} | Trabajosremotos.es`} key="trabajos-title-twitter" />
						<meta name="twitter:image" content={publicacion.thumbnail ? publicacion.thumbnail : trabajosRemotosLogo} key="trabajos-image-twitter" />
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

			<div className="anuncio">
				{publicacion
					? (
						<div className="container small">
							<div className="content">
								<p className="date">{publicacion.created_at}</p>
								<h1 className="prata">{publicacion.title}</h1>

								<div className="description">
									{publicacion.description
										? <Markdown>{publicacion.content}</Markdown>
										: ''
									}
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
		const { slug } = query;
		const res = await fetch(`${API_URL}/posts?slug=${slug}`);
		const publicacions = await res.json();
		const publicacion = publicacions[0];
		publicacion.created_at = getLocalDate(publicacion.created_at);
		return { publicacion };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default SingleBlogPost;