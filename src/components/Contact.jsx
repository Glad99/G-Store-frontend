import React from 'react'

const Contact = () => {
  return (
    <div className='pt-[5rem]'>
      <div>
            <div>
                <p>call icon</p>
                <h3>Call To Us</h3>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +2348106972329</p>
            </div>
            <hr />
            <div>
                <p>email box</p>
                <h3>Write To Us</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: Customer@g-Store.com </p>
            <p>Emails: Support@g-Store.com </p>
        </div>
        <div>
            <div>
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Email' />
            <input type="text" placeholder='Your Phone' />
            </div>
            <input type="text" placeholder='You Message' />
            <button>Send Message</button>
        </div>
    </div>
  )
}

export default Contact