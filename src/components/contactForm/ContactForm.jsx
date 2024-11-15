import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import './contactForm.css';


export default function ContactForm() {

   const form = useRef();
   const [ formResponse, setFormResponse ] = useState(false);

  const sendEmail = (e) => {
      e.preventDefault();

    emailjs
      .sendForm('service_g7tsqhe', 'template_jwp4bgm', form.current, {
        publicKey: '2isRkbPXbeWsaegy3',
      })
      .then(
        (res) => {
        //   console.log(res.text);
          e.target.reset();
          setFormResponse("Thank you for contacting us! We'll get back to you shortly.");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormResponse(`Message Failed! : Please try again`);
        },
      );
  };

  useEffect(()=>{

    if(formResponse){
        setTimeout(()=> {
            setFormResponse(false)
        }, 2500)
    }
  }, [ formResponse ])


  return (
    <div className="w-4/3 flex flex-col gap-4 justify-center m-auto p-20 max-w-[1000px] contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <Input size={'md'} type="text" placeholder="Enter Your Name" label='Name' labelPlacement="outside" name="user_name" className="mb-8"/>
          <Input size={'md'} className="mb-8" type="email" placeholder="Enter Your Email"  label='Email' labelPlacement="outside" name="user_email" />
          <Input size={'md'} className="mb-8" type="text" placeholder="Enter Your Subject" label='Subject' labelPlacement="outside" name="user_subject" />
          <Textarea label="Message" className="mb-8" variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your Message Here" name="message" />
          <Button size="lg" className="w-full" type="submit" value="Send"> Submit </Button>
          </form>
          {
            formResponse && <p className="text-center">{ formResponse }</p>
          }
    </div>  
  );
}
