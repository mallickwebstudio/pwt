import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Section from "@/components/section/section";

type FaqData = {
  value: string,
  question: string,
  answer: string[],
};
const faqsData: FaqData[] = [
  {
    value: "item-1",
    question: "How do I book a tour package?",
    answer: [
      "Browse our tour packages and click the 'Get Best Price' or 'Enquire Now' button on your preferred package.",
      "Share your name and phone number, and one of our travel experts will contact you to help you complete your booking.",
    ],
  },
  {
    value: "item-2",
    question: "What is included in the tour package?",
    answer: [
      "Most packages include accommodation, sightseeing, transfers, meals as mentioned in the itinerary, and the services of a tour manager or local guide.",
      "The exact inclusions and exclusions are listed on each package details page.",
    ],
  },
  {
    value: "item-3",
    question: "Are flights and visas included?",
    answer: [
      "Many of our international packages include return flights and visa assistance or visa fees, while others may not.",
      "Please check the package inclusions or speak with our travel expert for complete details.",
    ],
  },
  {
    value: "item-4",
    question: "Can I customize my tour package?",
    answer: [
      "Yes. We can customize destinations, hotels, transportation, sightseeing, travel dates, and trip duration based on your preferences.",
      "Our travel consultants will prepare a personalized itinerary that matches your budget and requirements.",
    ],
  },
  {
    value: "item-5",
    question: "What payment methods do you accept?",
    answer: [
      "We accept UPI, bank transfers, debit cards, credit cards, and other secure online payment methods.",
      "Payment details will be shared by our team once your itinerary is finalized.",
    ],
  },
  {
    value: "item-6",
    question: "What is your cancellation and refund policy?",
    answer: [
      "Cancellation charges depend on the destination, supplier policies, and the time remaining before departure.",
      "Please refer to our cancellation policy or contact our team for package-specific refund details.",
    ],
  },
  {
    value: "item-7",
    question: "Do you provide travel insurance?",
    answer: [
      "Travel insurance is available for most domestic and international tours and is highly recommended.",
      "Our travel experts can help you choose suitable coverage for your trip.",
    ],
  },
  {
    value: "item-8",
    question: "How can I contact your travel experts?",
    answer: [
      "You can submit your phone number through our enquiry form, call us directly, or reach us via WhatsApp.",
      "Our team will respond as quickly as possible during business hours.",
    ],
  },
];

export default function FaqThree() {
  return (
    <Section
      className="bg-linear-to-b from-green-100 to-transparent"
      h2="FAQs"
      p="Find answers to the most common questions about our product and services."
    >
      {/* FAQ Accordion */}
      <div className="mt-10 w-full grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Accordion
          className="w-full bg-secondary"
          multiple
          defaultValue={[faqsData[0].value]}
        >
          {faqsData.map((faq) => (
            <AccordionItem
              key={faq.value + 'FaqThree'}
              value={faq.value}
            >
              <AccordionTrigger
                className="cursor-pointer"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="flex flex-col gap-4 text-balance"
              >
                {faq.answer.map((paragraph, index) => (
                  <p key={index + 'FaqThree'}>{paragraph}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
