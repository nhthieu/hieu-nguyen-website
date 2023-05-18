import BackToTop from "@/components/BackToTop";
import ContactItem from "@/components/ContactItem";
import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata = {
  title: "Hieu Nguyen - Contact",
  description: `Hieu Nguyen's Personal Website`,
}

function ContactPage() {
  return (
    <div className='w-full pb-48'>
      <ThemeSwitcher />
      <BackToTop />
      <div className="grid grid-cols-3 gap-8 2xl:grid-cols-2 md:grid-cols-1">
        <ContactItem
          className='col-span-1'
          name='LinkedIn'
          href="https://www.linkedin.com/in/nhthieu16/"
        >
          <LinkedInIcon className="fill-dark dark:fill-light"/>
        </ContactItem>
        <ContactItem
          className='col-span-1'
          name='Email'
          href="mailto:nhthieu0106@gmail.com"
        >
          <MailIcon className="fill-dark dark:fill-light"/>
        </ContactItem>
        <ContactItem
          className='col-span-1'
          name='Github'
          href="https://www.github.com/nhthieu"
        >
          <GithubIcon className="fill-dark dark:fill-light"/>
        </ContactItem>
      </div>
    </div>
  );
}

export default ContactPage;