import ContactItem from "@/components/ContactItem";

export const metadata = {
  title: "Hieu Nguyen - Contact",
  description: `Hieu Nguyen's Portfolio`,
}

function ContactPage() {
  return (
    <div className='w-full pb-48'>
      <div className="grid grid-cols-3 gap-8 2xl:grid-cols-2 md:grid-cols-1">
        <ContactItem
          className='col-span-1'
          name='LinkedIn'
          href="https://www.linkedin.com/in/nhthieu16/"
        />
        <ContactItem
          className='col-span-1'
          name='Email'
          href="mailto:nhthieu0106@gmail.com"
        />
        <ContactItem
          className='col-span-1'
          name='Github'
          href="https://www.github.com/nhthieu"
        />
      </div>
    </div>
  );
}

export default ContactPage;