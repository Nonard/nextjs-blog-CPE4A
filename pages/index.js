import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
<p><b>Contact Information:</b></p>

      <p><Link href="https://www.facebook.com/nonardusi/">Facebook Page</Link></p>

      <p><b>Description:</b></p>

      <p>Computer Engineering Professional with experience speciallized on how to code, design, build and fix complex harwdware equipments, system and when given a program, they will generally spend many hours to study mathematical and Computer hardwares.  </p>

      <p><b>Skills:</b></p>

      <li>Knowledgeable in Communication Skills, Time Management, Excel, Phyton, C++ and HTML.</li>
      <li>Capable of Working Underpressure.</li>
      <li>Oriented in HTML5, CSS, PHP and MySQL database. </li>


      <p><b>Educational Attainment:</b></p>
      <div>
        <p style={{textAlign: "left"}}><b>Tertiary</b></p>
        <p style={{textAlign: "center"}}>
        Bachelor of Science in Computer Engineering (Degree)
        </p>
        <p style={{textAlign: "center"}}>
        University of the Assumption Unisite Subdivision,
        </p>
        <p style={{textAlign: "center"}}>
        Barangay Del Pilar, City of San Fernando Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2019-present
        </p>
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Secondary</b></p>
        <p style={{textAlign: "center"}}>
        St. Nicholas Academy, Center of Catholic Education, Inc.
        </p>
        <p style={{textAlign: "center"}}>
        Poblacion Macabebe, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2017-2019 (Senior High School)
        </p><br></br>
        <p style={{textAlign: "center"}}>
        St. Nicholas Academy, Center of Catholic Education, Inc.
        </p>
        <p style={{textAlign: "center"}}>
        Poblacion Macabebe, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2013-2017 (Junior High School)
        </p>
      </div>

        <div>
        <p style={{textAlign: "left"}}><b>Primary</b></p>
        <p style={{textAlign: "center"}}>
        St. Michael School Academy
        </p>
        <p style={{textAlign: "center"}}>
        Poblacion Masantol, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2006-2013
        </p>
      </div>



        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}