
import Heading from './Heading'

 const Contact = () => {
    
  return (
    <section className='contactSection wrapper' id='contact'>
        <Heading title='Get in Touch' />
        <div>
            <form className='form'>
              <div>

                <label htmlFor="name" ></label>
                <input type="text" name='name' id='name' placeholder='Enter your name....' data-aos="zoom-out"/>
               
                <label htmlFor="phone"></label>
                <input type="text" name='phone' id='phone' placeholder='Enter phone number....' data-aos="zoom-out"/>
                
                 
                <label htmlFor="eamil"></label>
                <input type="text" name='email' id='email' placeholder='Enter your email....' data-aos="zoom-out"/> 
              </div>
              <div>

                <label htmlFor="subject"></label>
                <input type="text" name='subject' id='subject' placeholder='Enter subject...' data-aos="zoom-out"/>
                <label htmlFor="message"></label>
                <textarea name="message" id="message" rows={7} placeholder='Enter your meesage...' data-aos="zoom-out">
                </textarea>
              </div>


           

            </form>
                 <button type='submit' className='btn' data-aos="zoom-out">Send</button>
            <div>

           
</div>
        </div>
    </section>
  )
}

export default Contact