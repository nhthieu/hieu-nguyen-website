import BackToTop from "@/components/BackToTop";
import ProjectItem from "@/components/ProjectItem";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import profileData from "@/data.json"

export const metadata = {
  title: "Hieu Nguyen - Projects",
  description: `Hieu Nguyen's Personal Website`,
}

export default function ProjectsPage() {
  return (
    <div className='w-full min-h-screen pb-16'>
      <ThemeSwitcher />
      <BackToTop />
      <section id="projects" className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center border-b border-solid border-dark/10 dark:border-light/10 pb-16 md:text-center">
          <h1 className="font-bold text-5xl mb-6 md:text-4xl">Projects</h1>
          <p className="text-dark/75 dark:text-light/75 font-medium text-lg md:text-base">Some are from school and some are side projects on my own time.</p>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 pt-20 md:grid-cols-1">
          {
            profileData.projects.map((project, index) => (
              <ProjectItem
                key={project.title}
                className="col-span-1"
                date={project.date}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}