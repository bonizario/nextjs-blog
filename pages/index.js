import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Full Stack Software Developer with over one year of experience
          designing, developing, and testing software solutions.
        </p>
        <p>
          I have worked with various programming languages and database
          management systems, showing great problem-solving skills and the
          ability to work effectively in a team-based environment.
        </p>
        <p>
          In my current position, I am developing a platform built with
          TypeScript, using React, Next, Node, Nest, and MariaDB.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
