import SearchBar from "../components/SearchBar";
import styled from 'styled-components';
import PublishBanner from "../components/PublishBanner";
import Hero from "../components/Hero";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

import { WEB_URL, API_URL, getLocalDate } from "../utils";

const Index = (props) => {
	const { jobs, jobCount, error, query } = props;

	return (
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>

				<meta name="robots" content="all" />
				<meta
					property="description"
					content={`La plataforma para encontrar trabajos remotos online de manera sencilla. ¿A qué esperas para encontrar el teletrabajo de tus sueños?`}
				/>
				<meta
					property="og:title"
					content={`Tu tablón de empleo remoto exclusivamente en español`}
					key="trabajos-title-og"
				/>
				<meta
					property="og:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-logo-og"
				/>
				<meta
					property="og:description"
					content={`La plataforma para encontrar trabajos remotos online de manera sencilla. ¿A qué esperas para encontrar el teletrabajo de tus sueños?`}
				/>
				<meta
					name="twitter:title"
					content={`Tu tablón de empleo remoto exclusivamente en español`}
					key="trabajos-title-twitter"
				/>
				<meta
					name="twitter:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-image-twitter"
				/>
				<meta
					name="twitter:description"
					content={`La plataforma para encontrar trabajos remotos online de manera sencilla. ¿A qué esperas para encontrar el teletrabajo de tus sueños?`}
				/>
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>

			<Hero />
			<SearchBar />

			{/* <div className="trabajos nobottom">
				<PublishBanner />
			</div> */}

      <div className="container nobottom title-jobs" style={{ marginTop: '2rem'}}>
        <h2 className="text-2xl text-left md:text-3xl">Descubre {jobCount} oportunidades de empleo remoto.</h2>
        <p className="text-gray-700 text-left max-w-2xl mt-3">Encuentra tu próximo empleo remoto usando trabajos remotos y únete a empresas que apuestan por sus empleados y metodologías de trabajo modernas.</p>
        <a className="text-left block mt-3 accent-text font-bold" href="/trabajos">Explora todos los trabajos remotos →</a>
      </div>

      <GridContainer className="blog-container notop">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) =>
            <BlogPost href={`/categoria/${job.slug}`} key={job.slug}>
              <PostContent>
                <PostThumbnail src={`/static/images/${job.slug}.png`} />
                <PostTitle className="prata">
                  <strong>{job.jobs}</strong> empleos remotos de {job.name}
                </PostTitle>
              </PostContent>
            </BlogPost>
          )
        ) : (
          <div key="empty-div" className="empty-message">
            Error, recarga la página por favor.
          </div>
        )}
      </GridContainer>

			<div className="extra">
				<div className="container" style={{ marginTop: "0" }}>
					<div>
						<h3>Misión de Trabajos Remotos</h3>

						<p>
							Trabajos remotos nace en 2019 para ayudar a todas aquellas personas que quieren dar el paso al teletrabajo
							y no saben por donde empezar, publicando ofertas de trabajos remotos de manera frecuente y dando
							información en nuestro <a href={`${WEB_URL}/blog`}>blog</a>.
						</p>

						<h3>Situación actual del teletrabajo</h3>

						<p>
							Cada vez más empresas están buscando perfiles remotos para sus nuevas contrataciones, no sólo por la
							situación actual si no por los{" "}
							<a href={`${WEB_URL}/blog/que-es-el-teletrabajo-o-trabajo-en-remoto`}>beneficios</a> que el teletrabajo
							tiene.
						</p>

						<p>
							La demanda de teletrabajo ha ido creciendo con los años y estamos en un punto en el cual es cada vez más
							normal pedir el trabajo en remoto como beneficio en un nuevo puesto de trabajo.
						</p>

						<h3>¿Eres una empresa buscando perfiles remotos?</h3>

						<p>
							Si eres una empresa remote friendly o que está pensando dar el paso al teletrabajo para tus nuevas
							contrataciones, sigue leyendo.
						</p>

						<p>
							Además de los lectores de nuestra página web, al publicar una oferta la enviamos por Telegram, Twitter y
							cada martes en nuestra newsletter, dando así más difusión a tu trabajo y atrayendo un mayor número de
							interesados.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Index.getInitialProps = async () => {
	const thisQuery = `/categories`;

	try {

		// Jobs query
		const res = await fetch(`${API_URL}${thisQuery}`);
		const jobs = await res.json();
    let jobCount = 0;

    jobs.forEach(job => {
      jobCount = jobCount + job.jobs;
    });
    
		return { jobs, jobCount, query: thisQuery };
	} catch (error) {
		console.error(error);
		return { error };
	}
};

export default Index;

// Styles
const GridContainer = styled.div`
	display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  padding: 60px 20px;
  margin: 0 auto;
  max-width: 960px;
  padding-top: 32px;
`;
const PostThumbnail = styled.img`
	height: 96px;
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
	font-size: 1.2rem;
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