import Heading from './Heading'

export const About = () => {
  return (
    <section className='aboutSection wrapper' data-aos="zoom-in-up" id='about'>
      <Heading title="About Me"/>
      <div>
        <p data-aos="zoom-in-up">Hi, I'm Shahab, a passionate frontend developer skilled in <strong>
        HTML, CSS, TailwindCSS, JavaScript, TypeScript, and Next.js 
        </strong>. I love transforming ideas into engaging, high-performing web applications with clean and efficient code.</p> 
        <p data-aos="zoom-in-up">When I'm not coding, I enjoy solving programming challenges, working on personal projects, and staying up-to-date with the latest trends in web development.</p>



      </div>
   </section>
  )
}
export default About