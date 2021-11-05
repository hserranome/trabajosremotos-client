import Router, { withRouter } from "next/router";
import styled from 'styled-components';
import Head from "next/head";

const Alternativas = (props) => {
	return (
		<div>
			<Head>
				<title>Descubre por qué somos la mejor plataforma de empleo remoto</title>

				<meta name="robots" content="all" />
				<meta
					property="description"
					content={`Blog de trabajosremotos.es, donde podrás encontrar información sobre el trabajo remoto, consejos, entrevistas y mucho mas.`}
				/>
				<meta property="og:title" content={`Descubre por qué somos la mejor plataforma de empleo remoto`} key="trabajos-title-og" />
				<meta
					property="og:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-logo-og"
				/>
				<meta
					property="og:description"
					content={`Descubre por qué somos la mejor plataforma de empleo remoto`}
				/>
				<meta
					name="twitter:title"
					content={`Descubre por qué somos la mejor plataforma de empleo remoto`}
					key="trabajos-title-twitter"
				/>
				<meta
					name="twitter:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-image-twitter"
				/>
				<meta
					name="twitter:description"
					content={`Descubre por qué somos la mejor plataforma de empleo remoto`}
				/>
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>


			<div class="pb-6">
				<div class="max-w-screen-3xl px-4 md:px-8 mx-auto">
					<section class="flex flex-col items-center">
						<div class="max-w-4xl flex flex-col items-center text-center pt-40">
							<p class="secondary-color md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">trabajosremotos.es</p>

							<h1 class="text-black-800 text-4xl sm:text-5xl mb-8 md:mb-12">Descubre por qué somos la mejor plataforma de empleo remoto</h1>

							<p class="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">Sabemos qué se siente cuando estás buscando una alternativa a tu proceso de selección de nuevos empleados y siempre acabas en las mismas páginas web. En <strong className="font-semibold">trabajosremotos.es</strong> queremos facilitar la contratación de nuevos empleados remotos y hacer que sea más accesible para todo tipo de empresas.</p>

							<div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
								<a href="#" class="inline-block text-white text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3 main-button">Publicar trabajo</a>
							</div>
						</div>
					</section>
				</div>
			</div>

			<GridContainer className="blog-container notop">
				<BlogPost href={`/alternativas`}>
					<PostContent>
						<PostThumbnail src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" />
						<PostTitle className="prata">Alternativa a <strong>LinkedIn</strong></PostTitle>
					</PostContent>
				</BlogPost>
				
				<BlogPost href={`/alternativas/indeed`}>
					<PostContent>
						<PostThumbnail src="https://logos-marcas.com/wp-content/uploads/2021/02/Indeed-Logo.png" />
						<PostTitle className="prata">Alternativa a <strong>Indeed</strong></PostTitle>
					</PostContent>
				</BlogPost>
				
				<BlogPost href={`/alternativas`}>
					<PostContent>
						<PostThumbnail src="https://images-na.ssl-images-amazon.com/images/I/41Tjko5+4nL.png" />
						<PostTitle className="prata">Alternativa a <strong>InfoJobs</strong></PostTitle>
					</PostContent>
				</BlogPost>
			</GridContainer>
		</div>
	);
};

Alternativas.getInitialProps = ({ query }) => {
	return { query };
};

export default withRouter(Alternativas);

// Styles
const GridContainer = styled.div`
	display: grid;
    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    padding: 60px 20px;
    margin: 0 auto;
    max-width: 960px;
`;
const PostThumbnail = styled.img`
	height: 56px;
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