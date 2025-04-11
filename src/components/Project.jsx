import gradient from '../assets/Gradient.png'
import portfolio from '../assets/Portfolio.png'
import iconParkSolid from '../assets/icon-park-solid_click.svg'

function Project() {
  return (
    <div class="box">
      <div class="group">
        <div class="overlap">
          <div class="overlap-wrapper">
            <div class="overlap-group">
              <img class="gradient" src={gradient} />
              <img class="portfolio" src={portfolio} />
              <div class="portfolio-text">
                <div class="a-web-app-for-wrapper">
                  <p class="a-web-app-for">
                    A modern, student-focused platform with a clean, responsive design and playful UI elements. Zenova features smooth transitions, vibrant visuals, and interactive booking flows, creating an engaging space for students to schedule mentor sessions, explore prep resources, and claim rewards through referrals.
                  </p>
                </div>
                <div class="div">
                  <div class="text-wrapper">Example Project</div>
                  <div class="featured-project">Featured&nbsp;&nbsp;Project</div>
                </div>
                <div class="icon-park-solid-wrapper">
                  <img class="icon-park-solid" src={iconParkSolid} />
                </div>
                <img class="img" src={iconParkSolid} />
              </div>
            </div>
          </div>
          <div class="overlap-group-wrapper">
            <div class="overlap-2">
              <img class="gradient-2" src={gradient} />
              <img class="gradient-3" src={gradient} />
              <img class="portfolio-2" src={portfolio} />
              <div class="portfolio-text-2">
                <div class="a-web-app-for-wrapper">
                  <p class="a-web-app-for">
                  A clean, student-focused platform with a responsive design and interactive UI. Zenova offers smooth booking flows, vibrant visuals, and prep resources, making it easy to schedule mentor sessions and claim rewards through referrals.
                  </p>
                </div>
                <div class="overlap-group-2">
                  <div class="text-wrapper-2">Zenova.one</div>
                  <div class="featured-project-2">Featured&nbsp;&nbsp;Project</div>
                </div>
                <div class="img-wrapper"><img class="icon-park-solid" src={iconParkSolid} /></div>
                <img class="icon-park-solid-2" src={iconParkSolid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Project