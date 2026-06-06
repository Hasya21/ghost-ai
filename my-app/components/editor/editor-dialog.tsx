"use client"

import type { ReactNode } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface EditorDialogProps {
  children: ReactNode
  description: string
  footer: ReactNode
  onOpenChange?: (open: boolean) => void
  open: boolean
  title: string
}

export function EditorDialog({
  children,
  description,
  footer,
  onOpenChange,
  open,
  title,
}: EditorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-6 rounded-3xl border border-surface-border bg-elevated p-6 text-copy-primary shadow-2xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg text-copy-primary">{title}</DialogTitle>
          <DialogDescription className="leading-6 text-copy-muted">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="-mx-6 -mb-6 rounded-b-3xl border-surface-border bg-subtle/70 px-6">
          {footer}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
