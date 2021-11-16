import JobsList from "../modules/JobsList";
import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "../components/SearchBar";
import PublishBanner from "../components/PublishBanner";
import Hero from "../components/Hero";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

import { WEB_URL, API_URL, getLocalDate } from "../utils";

const Trabajos = (props) => {
  const { initialJobs, error, query } = props;

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

      <div className="trabajos nobottom">
        <CategoryMenu />
        <PublishBanner />
        <JobsList initialJobs={initialJobs} error={error} query={query} />
      </div>
    </div>
  );
};

Trabajos.getInitialProps = async () => {
  const thisQuery = `/jobs?_sort=pinned:DESC,created_at:desc&_limit=40`;

  try {
    // Advertisement query
    const ad = await fetch(`${API_URL}/archives?_sort=active:DESC`);
    const ads = await ad.json();
    const randomAd = ads[Math.floor(Math.random() * ads.length)];

    // Jobs query
    const res = await fetch(`${API_URL}${thisQuery}`);
    const jobs = await res.json();

    // Format date and sort jobs
    const initialJobs = jobs.map((job) => ({ ...job, created_at_formatted: getLocalDate(job.created_at) }));

    // Before returning the jobs, add the advertisement to the array of jobs
    try {
      if (ads.length !== 0 && randomAd.Active === true) initialJobs.splice(3, 0, randomAd);
    } catch {
      console.error("cannot load ads");
    }

    return { initialJobs, query: thisQuery };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default Trabajos;