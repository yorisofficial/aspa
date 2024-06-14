import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {FAQ} from "@/app/lib/FAQ"

export function ListFaqUser() {
  const data = FAQ

  return (
    <Accordion type="single" collapsible className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
      {data.map((item, index) => (
        <AccordionItem key={index} value={item.title} className="h-fit">
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
