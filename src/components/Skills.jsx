import SkillSvg from '../assets/skills.svg'

function Skills() {
  return (
    <section id='Skills'>
      <div className="container skills-container">
        <h4><span>Cross Functional</span></h4>
        <h5>I'm currently looking to join a cross-functional team</h5>
        <p>That values improving people's lives through accessible design</p>
        <img src={SkillSvg} alt="" />
      </div>
    </section>
  )
}

export default Skills