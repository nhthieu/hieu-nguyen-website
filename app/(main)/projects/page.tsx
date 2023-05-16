import ProjectItem from "@/components/ProjectItem";

export const metadata = {
  title: "Hieu Nguyen - Projects",
  description: `Hieu Nguyen's Portfolio`,
}

export default function ProjectsPage() {
  return (
    <div className='w-full min-h-screen pb-64'>
      <div className="flex flex-col border-b border-solid border-light/10 pb-16">
        <h1 className="font-bold text-5xl mb-6">Projects</h1>
        <p className="text-light/75 font-medium text-lg">Some are from school and some are side projects on my own time.</p>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 pt-20">
        <div className="col-span-1">
          <ProjectItem
            date="May 15, 2023"
            title="Hieu Nguyen's Portfolio"
            description="The website you're looking at."
            url="/"
          />
          <ProjectItem
            date="Dec 5, 2022"
            title="Chat App"
            description="A basic chat application with real-time messaging using Socket.io and Node as the backend and React as the frontend."
            url="https://github.com/nhthieu/chat_app"
            blank
          />
          <ProjectItem
            date="Dec 5, 2022"
            title="Cafe Management"
            description="A full Java application for a personal cafe that helps owner manage orders, products and the staffs."
            url="https://github.com/nhthieu/CafeManagementApp"
            blank
          />

        </div>
        <div className="col-span-1">
          <ProjectItem
            date="Aug 26, 2022"
            title="Covid Website"
            description="A Covid-19 web application designed to help healthcare providers manage patient's data and related products."
            url="https://github.com/namhoai1109/Covid-web"
            blank
          />
          <ProjectItem
            date="Jul 31, 2022"
            title="Remote Control"
            description="A simple Remote Control project for the Networking Course, implementing socket programming in Python."
            url="https://github.com/nhthieu/RC_Project"
            blank
          />

        </div>
        <div className="col-span-1">
          <ProjectItem
            date="Sep 7, 2022"
            title="Hanbai"
            description="An Android mobile application that helps online merchants manage orders, customers and products."
            url="https://github.com/Anhduy-git/Hanbai"
            blank
          />
          <ProjectItem
            date="Sep 7, 2022"
            title="Food Ordering App"
            description="An outsource Android application for a personal restaurant that helps owner manage orders, customers and products."
            url="https://github.com/Anhduy-git/Food-Order-Management"
            blank
          />
        </div>
      </div>
    </div>
  )
}