import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
}

export function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header className="grid h-14 shrink-0 grid-cols-3 items-center border-b border-surface-border bg-surface px-3">
      <div className="flex items-center justify-start">
        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          onClick={onSidebarToggle}
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          aria-expanded={isSidebarOpen}
          aria-controls="project-sidebar"
        >
          <ToggleIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <span className="font-heading text-sm font-semibold tracking-tight text-copy-primary">
          Ghost AI
        </span>
      </div>

      <div aria-hidden="true" />
    </header>
  )
}
