import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

import foundry10Logo from '../assets/images/foundry10Logo.png';
import townsendLogo from '../assets/images/townsendLogo.png';
import seamediaLogo from '../assets/images/seamediaLogo.png';
import salishLogo from '../assets/images/salishLogo.png';
import seadocLogo from '../assets/images/seadocLogo.png';

const Partners = props => (
  <Layout>
    <Helmet>
      <title>Partners</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Partners</h1>
        </header>
        <div className="content">
          <p>
            Our valued partners for the Art of Water Project.
          </p>
        </div>
      </div>
    </section>

    <div id="main">
      {/* <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Sed amet aliquam</h2>
          </header>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
            urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Nullam et orci eu lorem consequat tincidunt vivamus et
            sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula
            tate urna.
          </p>
        </div>
      </section> */}
      <section id="two" className="spotlights">
        <section>
          <Link className="image">
            <img src={foundry10Logo} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Foundry10</h3>
              </header>
              <p>
              Foundry10 is an an educational research organization striving to expand the way people think
about learning and create direct value for kids. Foundry10 hosts an annual emerging artist
exhibition called Everyday Unseen, which aims to uplift the voices of youth creators. In 2021,
the gallery was shifted online and the artists were celebrated virtually. You can visit the gallery
at www.everydayunboxed2021.com
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        
        <section>
          <Link className="image">
            <img src={townsendLogo} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>The Port Townsend Marine Science Center (PTMSC)</h3>
              </header>
              <p>
              The Port Townsend Marine Science Center (PTMSC) is committed to hands-on, place-based, and people-powered programs that inspire conservation of the Salish Sea.  Community science projects, school and public education experiences, aquarium and museum exhibits, a strong volunteer corps and partnerships with other conservation organizations connect us to one another and to the marine and shoreline environment we work to understand and to steward.
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={seamediaLogo} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>SEA-Media</h3>
              </header>
              <p>
              SEA-Media brings you media about our Pacific Northwest waters: our sea-media.org web site offers reviews of, and links to, books, movies, art, music, blogs, and more.  We specialize in highlighting independent media, but we  include as much media as we can from all sources.  We hope that exploring this web site will help you better know our marine environment which is the overwhelming majority of our biosphere. SEA-Media is a nonprofit organization dedicated to increasing the profile of our marine environment in the media. 
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={salishLogo} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Salish Magazine</h3>
              </header>
              <p>
              Salish Magazine is another project of SEA-Media. Salish Magazine is a free, quarterly, and advertisement free, on-line publication that reveals our natural world through visually rich stories about outdoor features in our Salish Sea region. Since 2018, Salish Magazine has been taking inquisitive readers outdoors with in-depth storytelling about what our readers can see firsthand in our public forests and beaches. A key focus of the magazine is to illustrate the interconnectedness woven through our ecosystems, using lenses of history, science, and culture. From up-close views of pollination to the mysterious lives of sea anemones, Salish Magazine uses 21st century methods to deliver engaging stories that are interactive, rich in visual imagery, scientifically correct, yet fun to read. You can read it at salishmagazine.org
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={seadocLogo} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>SeaDoc Society</h3>
              </header>
              <p>
              The mission of the SeaDoc Society is to ensure the health of marine wildlife and their ecosystems through science and education. We strive to find science-based solutions for marine wildlife in the Salish Sea through a multi-species approach.

seadocsociety.org.

              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Partners
