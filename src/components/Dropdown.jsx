import React from "react";
// import {Accordion, AccordionItem} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";



export default function Dropdown({ data }) {


    return (
<Accordion className="w-[90%] mx-auto">
  {
    data?.map(item => (
      <AccordionItem variant="splitted" key={item.id} aria-label="Accordion 1" title={ item.title } className="mb-2">
        {item.content}
        <Link href={item.link} target="_blank" className="text-white block" > <Button className="bg-gray-600 text-white mt-8" radius="full">
        Visit Website</Button></Link>
      </AccordionItem>
    ))
  }
    </Accordion>
          
 );
}
