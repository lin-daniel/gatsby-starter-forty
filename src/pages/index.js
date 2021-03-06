import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import clouds from '../assets/images/clouds.jpg'
import leaf from '../assets/images/leaf-on-ice.jpg'
import rocks from '../assets/images/rocks.jpg'
import sand from '../assets/images/sand.jpg'
import shadows from '../assets/images/shadows.jpg'
import soundwave from '../assets/images/soundwave.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="The Art of Water"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${clouds})`}}>
                            <header className="major">
                                <h3>Music</h3>
                                <p>Join Boom.Diwan for a special workshop and learn the rhythms of Khaleeji pearl-diving music with musician and Ethnomusicologist Dr. Ghazi Al Mulaifi.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${leaf})`}}>
                            <header className="major">
                                <h3>Performance</h3>
                                <p>Students at Zayed University’s College of Arts and Creative Enterprises share a common impulse to critically remix the everyday and the nostalgic.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${rocks})`}}>
                            <header className="major">
                                <h3>Words</h3>
                                <p>Grassroots art collecting and research platform 101 takes over Warehouse 44 to present its second curated sale "Playing Spaces."</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${sand})`}}>
                            <header className="major">
                                <h3>Art</h3>
                                <p>How can an exterior environment embody the qualities of interiors, and conversely, an interior integrate exterior characteristics?</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${shadows})`}}>
                            <header className="major">
                                <h3>Photography</h3>
                                <p>A roundtable discussion on how to formulate a considered response and blueprint to the question, "how will we return?" </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${soundwave})`}}>
                            <header className="major">
                                <h3>Film</h3>
                                <p>A conversation with Yemeni-Bosnian-US multi-media artist Alia Ali, curator Miranda McKee, and Mohamed Somji, Director and curator at Gulf Photo Plus.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Contribute your art today</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/upload" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section> */}
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
