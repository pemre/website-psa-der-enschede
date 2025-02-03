import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { InstagramEmbed } from 'react-social-media-embed';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <Heading as="h1" className="hero__title">
                {siteConfig.title}
            </Heading>
            <div className="hero__subtitle">{siteConfig.tagline}</div>
        </div>
    </header>
  );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader/>



            <main>
            <div style={{display: 'flex', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem'}}>
                YAPILACAKLAR
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '-3rem'}}>
                <ol>
                    <li>
                        <input type="checkbox" /> <a href="https://github.com/pemre/website-psa-der-enschede/blob/main/README.md">README.md</a> dosyasını güncelle
                    </li>
                    <li><input type="checkbox" /> <a href="https://docusaurus.io/blog/releases/3.7">Docusaurus 3.7</a>'ye güncelle</li>
                    <li><input type="checkbox" /> Instagram hesabini halka acik yap ve asagida guncelle.</li>
                    <li><input type="checkbox" /> Adres ekle.</li>
                    <li><input type="checkbox" /> Harita ekle.</li>
                    <li><input type="checkbox" /> Logoyu yeniden yarat.</li>
                    <li><input type="checkbox" /> Asagidaki kutulari ya sil ya da uygun icerik bul.</li>
                </ol>
            </div>
                <HomepageFeatures/>
            </main>

            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
                <InstagramEmbed url="https://www.instagram.com/psa.gencler" width={"60%"}/>
            </div>
        </Layout>
    );
}
