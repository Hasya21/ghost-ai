import { FolderOpen, Plus, Users, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface EmptyProjectsProps {
  description: string
  icon: typeof FolderOpen
  title: string
}

function EmptyProjects({
  description,
  icon: Icon,
  title,
}: EmptyProjectsProps) {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-border bg-subtle text-copy-muted">
        <Icon className="h-8 w-8" />
      </div>
      <p className="font-heading text-sm font-medium text-copy-primary">{title}</p>
      <p className="mt-1 max-w-52 text-sm leading-6 text-copy-muted">
        {description}
      </p>
    </div>
  )
}

export function ProjectSidebar({
  isOpen,
  onClose,
}: ProjectSidebarProps) {
  return (
    <aside
      id="project-sidebar"
      aria-hidden={!isOpen}
      className={cn(
        "fixed bottom-3 left-3 top-17 z-40 flex w-[calc(100%-1.5rem)] max-w-80 flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface/90 shadow-2xl backdrop-blur-xl transition-[transform,opacity] duration-200 ease-out",
        isOpen
          ? "translate-x-0 opacity-100"
          : "-translate-x-[calc(100%+1rem)] pointer-events-none opacity-0"
      )}
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-surface-border px-4">
        <h2 className="font-heading text-base font-semibold text-copy-primary">
          Projects
        </h2>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close project sidebar"
          tabIndex={isOpen ? 0 : -1}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="min-h-0 flex-1 gap-0">
        <TabsList className="m-3 mb-0 grid w-auto grid-cols-2 rounded-xl bg-subtle">
          <TabsTrigger value="my-projects" className="rounded-xl">
            My Projects
          </TabsTrigger>
          <TabsTrigger value="shared" className="rounded-xl">
            Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects">
          <EmptyProjects
            icon={FolderOpen}
            title="No projects yet"
            description="Create a project to start mapping your system architecture."
          />
        </TabsContent>
        <TabsContent value="shared">
          <EmptyProjects
            icon={Users}
            title="Nothing shared with you"
            description="Projects shared by collaborators will appear here."
          />
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t border-surface-border p-3">
        <Button type="button" className="h-10 w-full rounded-xl">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
