import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, BookOpen } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              আপনার ক্যারিয়ার শুরু হোক প্রযুক্তির সাথে
            </h1>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              NITS Computer Training Institute এ আপনার দক্ষতা বৃদ্ধি করুন। আমরা প্রদান করি সেরা মানের প্রশিক্ষণ যা আপনাকে সফল ক্যারিয়ার
              গড়তে সাহায্য করবে।
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="group">
                কোর্স দেখুন
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                আমাদের সাথে যোগাযোগ করুন
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <Users className="mb-2 h-8 w-8" />
                <div className="text-2xl font-bold">৫০০০+</div>
                <div className="text-sm text-primary-foreground/80">শিক্ষার্থী</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <BookOpen className="mb-2 h-8 w-8" />
                <div className="text-2xl font-bold">৩০+</div>
                <div className="text-sm text-primary-foreground/80">কোর্স</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="mb-2 h-8 w-8" />
                <div className="text-2xl font-bold">১৫+</div>
                <div className="text-sm text-primary-foreground/80">বছরের অভিজ্ঞতা</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <img
                src="/publicstudents-learning-computer-programming-in-modern-t.jpg.png"
                alt="Students learning at NITS"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-accent p-6 text-accent-foreground shadow-2xl">
              <div className="mb-2 text-3xl font-bold">৯৫%</div>
              <div className="text-sm">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
