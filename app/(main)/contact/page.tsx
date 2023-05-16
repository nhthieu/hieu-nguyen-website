import ContactItem from "@/components/ContactItem";

export const metadata = {
  title: "Hieu Nguyen - Contact",
  description: `Hieu Nguyen's Portfolio`,
}

function ContactPage() {
  return (
    <div className='w-full py-40'>
      <div className="grid grid-cols-3 gap-8">
        <ContactItem
          className='col-span-1'
          name='LinkedIn'
          info="nhthieu16"
          href="https://www.linkedin.com/in/nhthieu16/"
        />
        <ContactItem
          className='col-span-1'
          name='Email'
          info="nhthieu0106@gmail.com"
          href="mailto:nguyenhotrunghieu0106@gmail.com"
        />
        <ContactItem
          className='col-span-1'
          name='Github'
          info="nthieu"
          href="https://www.github.com/nhthieu"
        />
      </div>
    </div>
  );
}

export default ContactPage;