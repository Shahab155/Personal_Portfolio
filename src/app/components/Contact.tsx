
import Heading from './Heading'

 const Contact = () => {
    
  return (
    <section className='contactSection wrapper' id='contact'>
        <Heading title='Get in Touch' />
        <div>
            <form className='form '>
                <label htmlFor="name" ></label>
                <input type="text" name='name' id='name' placeholder='Enter you name....' data-aos="zoom-out"/>
               
                <label htmlFor="name"></label>
                <input type="text" name='email' id='email' placeholder='Enter you email....' data-aos="zoom-out"/>

                <label htmlFor="name"></label>
                <textarea name="message" id="message" rows={6} placeholder='Enter your meesage...' data-aos="zoom-out">

                </textarea>
                 <button type='submit' className='btn' data-aos="zoom-out">Send</button>
           

            </form>
            <div>

           
</div>
        </div>
    </section>
  )
}

export default Contact