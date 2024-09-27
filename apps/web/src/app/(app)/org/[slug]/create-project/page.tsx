import { Header } from '@/components/header'

import { ProjectForm } from './form'

export default function CreateProject() {
  return (
    <div className="space-y-4 py-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200px] space-y-4">
        <h1 className="text-2xl font-bold">Create Project</h1>

        <ProjectForm />
      </main>
    </div>
  )
}
