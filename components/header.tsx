import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">NITS</span>
              <span className="text-xs text-muted-foreground">Computer Training</span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#courses" className="text-sm font-medium transition-colors hover:text-primary">
              কোর্স সমূহ
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              আমাদের সম্পর্কে
            </a>
            <a href="#facilities" className="text-sm font-medium transition-colors hover:text-primary">
              সুবিধা সমূহ
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              যোগাযোগ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:inline-flex">ভর্তি হন</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
