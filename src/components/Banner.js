import React from 'react'
import water3 from '../assets/sounds/water3.wav'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>The Art of Water</h1>
      </header>
      
      <audio src={water3} controls>
        <p>
          If you are reading this, it is because your browser does not support
          the audio element.
        </p>
      </audio>

      <div className="content">
        <p>
          Color, light, shape and rhythm are all properties of water. Water runs
          through our stories, represented in language, music, imagery,
          sculpture, and performance. The Art of Water provides a space to
          display those artistic expressions.
        </p>
        {/* <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Play sound
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  </section>
)

export default Banner
