import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base px-6 text-copy-primary">
      <section className="flex max-w-md flex-col items-center gap-4 text-center">
        <p className="font-mono text-sm text-brand">404</p>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-sm text-copy-muted">
          The requested workspace route does not exist.
        </p>
        <Button render={<Link href="/" />}>
          Return home
        </Button>
      </section>
    </main>
  );
}
