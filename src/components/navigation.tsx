"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            Gastos
          </Link>
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
