import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMessage.css'
const ContactMessage = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v91l7il', 'template_d4x8x3d', form.current, 'Mz4Oihtupq2A9YV30')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contact" class="bg-cover text-white message-contact-container pb-5" >
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 section-intro text-center" data-aos="fade-up">
                        <h1 className='pt-5 pb-3'>Get in touch</h1>
                        <div class="divider"></div>
                        <p className='pb-3 lh-4 fs-5'>There are many variations of passages of Lorem Ipsum available, but the <br />
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 mx-auto" data-aos="fade-up">
                        <form ref={form} onSubmit={sendEmail} action="#" class="row g-4">


                            <div class="form-group col-md-6">
                                <input type="text" name="from_name" class="form-control" placeholder="Full name" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" name="user_email" class="form-control" placeholder="Email address" />
                            </div>
                            <div class="form-group col-md-12">
                                <input type="text" class="form-control" placeholder="Subject" />
                            </div>
                            <div class="form-group col-md-12">
                                <textarea name="message" id="" cols="30" rows="4" class="form-control" placeholder="Message"></textarea>
                            </div>
                            <div class="text-center">
                                <input class="btn btn-main" type="submit" value="Send" />
                                {/* <button class="btn btn-main" type="submit">Send Message</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMessage;