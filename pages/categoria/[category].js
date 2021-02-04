import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from '../../components/ActiveLink';
import CategoryMenu from '../../components/CategoryMenu';
import SearchBar from '../../components/SearchBar';

import JobsList from '../../modules/JobsList';
import MailForm from '../../components/MailForm';
import { API_URL, getLocalDate } from '../../utils';

const CategoryList = (props) => {
	const { initialJobs, error, categoryName, query } = props;
	const categoryFinalName = categoryName !== 'none' ? `de ${categoryName}` : '';
	const categoryTextName = categoryName !== 'none' ? `${categoryName}` : '';

	return (
		<div>
			<Head>
				<title>Trabajos remotos {categoryFinalName}</title>

				<meta name="robots" content="all" />
				<meta property="description" content={`Explora cientos de trabajos online en nuestra categoria de ${categoryFinalName} de trabajos remotos`} />
				<meta property="og:title" content={`Trabajos remotos de ${categoryFinalName}`} key="trabajos-title-og" />
				<meta property="og:image" content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg" key="trabajos-logo-og" />
				<meta property="og:description" content={`Explora cientos de trabajos online en nuestra categoria de ${categoryFinalName} de trabajos remotos`} />
				<meta name="twitter:title" content={`Trabajos remotos de ${categoryFinalName}`} key="trabajos-title-twitter" />
				<meta name="twitter:image" content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg" key="trabajos-image-twitter" />
				<meta name="twitter:description" content={`Explora cientos de trabajos online en nuestra categoria de ${categoryFinalName} de trabajos remotos`} />
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>

      <div className="hero">
        <div className="container">
          <div className="desktop"><br /><br /><br /></div>
          {
            categoryTextName == 'Otros'
              ?
              <h1>Otros trabajos remotos</h1>
              :
              <h1>Trabajos remotos de {categoryTextName}</h1>
          }
          <p className="prata">La plataforma para encontrar trabajos remotos online de manera sencilla.</p>
        </div>
      </div>

      <SearchBar />

			<div className="trabajos nobottom">
        <CategoryMenu />
        
				<JobsList
					initialJobs={initialJobs}
					error={error}
					query={query}
				/>
			</div>

			<div className="extra">
				<div className="container" style={{ marginTop: '0' }}>
					{/* Otros trabajos */}
					{
						categoryTextName == 'Otros'
							?
							<div>
								<h3>Otros trabajos en remoto</h3>

								<p>
									Encuentra trabajos en remoto únicos en nuestra categoría de otros teletrabajos, donde juntamos todos aquellos que no encajan en categorías más definidas como <Link href="/categoria/programacion"><a>programación</a></Link>. Si estás buscando trabajar desde casa, te ofrecemos la oportunidad de encontrar el trabajo de tus sueños.
								</p>
							</div>
							:
							``
					}

					{/* Trabajos de programación */}
					{
						categoryTextName === 'Programación'
							?
							<div>
								<h3>Trabajos remotos de {categoryTextName}</h3>

								<p>
									Descubre los mejores trabajos en remoto para programadores. Seas un desarrollador front-end o back-end, tenemos oportunidades de teletrabajo para ti. No dejes que tu localización limite la búsqueda de trabajos para encontrar la empresa ideal para ti. 
								</p>
							</div>
							:
							``
					}

					{/* Trabajos de gamedev */}
					{
						categoryTextName === 'GameDev'
							?
							<div>
								<h3>Trabajos remotos de desarrollo de videojuegos</h3>

								<p>
									Descubre los mejores teletrabajos en la industria de los videojuegos. Seas un desarrollador, un concept artist o modelador 3D. No dejes que tu localización limite la búsqueda de trabajos para encontrar la empresa ideal para ti. 
								</p>
							</div>
							:
							``
					}

					{/* Trabajos de diseño */}
					{
						categoryTextName === 'Diseño'
							?
							<div>
								<h3>Trabajos remotos de {categoryTextName}</h3>

								<p>
									¿Estás buscando trabajo remoto como diseñador? Muchas empresas están abiertas a contratar diseñadores con opción a teletrabajo. Seas un diseñador web buscando nuevas oportunidades en UI/UX o un diseñador gráfico, aquí encontrarás las mejores oportunidades laborales para diseñadores que quieren dar el paso al teletrabajo.
								</p>
							</div>
							:
							``
					}

					{/* Trabajos de atención al cliente */}
					{
						categoryTextName === 'Atención al cliente'
							?
							<div>
								<h3>Trabajos remotos de {categoryTextName}</h3>

								<p>
									Descubre los mejores trabajos en remoto relacionados con atención al cliente. No dejes que tu localización limite la búsqueda de trabajos para encontrar la empresa ideal para ti. 
								</p>
							</div>
							:
							``
					}

					{/* Trabajos de marketing */}
					{
						categoryTextName === 'Marketing'
							?
							<div>
								<h3>Trabajos remotos de {categoryTextName}</h3>

								<p>
									Encuentra los mejores teletrabajos de marketing en <Link href="/"><a>trabajosremotos.es</a></Link>. Seas un guru de las redes sociales o te encante el copywriting, en nuestra categoría de Marketing encontrarás las mejores oportunidades para trabajar en remoto. Muchas empresas están dispuestas a contratar en remoto en sus departamentos de marketing ya que en la gran mayoría de casos, solo necesitas un portátil e internet para poder trabajar.
								</p>
							</div>
							:
							``
					}
				</div>
			</div>
		</div>
	)
};


CategoryList.getInitialProps = async ({ query }) => {
	const { category } = query;
	const thisQuery = `/jobs?category.slug=${category}&_sort=pinned:DESC,created_at:desc&_limit=40`;
	try {
		// Advertisement query
		const ad = await fetch(`${API_URL}/archives?_sort=active:DESC&_limit=1`);
		const ads = await ad.json();
		
		// Jobs query
		const res = await fetch(`${API_URL}${thisQuery}`);
		const jobs = await res.json();
		
		// add category name to the query
		const categoryName = jobs.length > 0 ? jobs[0].category.name : 'none';

		// Format date and sort jobs
		const initialJobs = jobs.map((job) => ({ ...job, created_at_formatted: getLocalDate(job.created_at) }));

		// Before returning the jobs, add the advertisement to the array of jobs
		try { if (ads.length !== 0 && ads[0].Active === true) initialJobs.splice(5, 0, ads[0]) } catch{ console.error('cannot load ads') };

		return { initialJobs, categoryName, query: thisQuery };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default CategoryList;