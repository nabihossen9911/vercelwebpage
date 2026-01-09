import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Users2, Clock, Trophy, Briefcase, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "আধুনিক ল্যাব সুবিধা",
    description: "সর্বশেষ কম্পিউটার এবং সফটওয়্যার দিয়ে সজ্জিত ল্যাব",
  },
  {
    icon: Users2,
    title: "অভিজ্ঞ প্রশিক্ষক",
    description: "ইন্ডাস্ট্রি এক্সপার্ট প্রশিক্ষকদের কাছ থেকে শিখুন",
  },
  {
    icon: Clock,
    title: "ফ্লেক্সিবল সময়সূচী",
    description: "সকাল, দুপুর এবং সন্ধ্যা - আপনার সুবিধামত সময়",
  },
  {
    icon: Trophy,
    title: "সার্টিফিকেট প্রদান",
    description: "কোর্স সম্পন্ন করলে স্বীকৃত সার্টিফিকেট পাবেন",
  },
  {
    icon: Briefcase,
    title: "চাকরির সহায়তা",
    description: "কোর্স শেষে চাকরি খুঁজতে আমরা সাহায্য করব",
  },
  {
    icon: HeadphonesIcon,
    title: "আজীবন সাপোর্ট",
    description: "কোর্স শেষেও আমাদের সাপোর্ট পাবেন",
  },
]

export default function Features() {
  return (
    <section id="facilities" className="bg-secondary/50 py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            কেন NITS বেছে নিবেন?
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            আমরা প্রদান করি সেরা মানের প্রশিক্ষণ এবং সুবিধা যা আপনার শেখাকে আরও সহজ করে তুলবে
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-none bg-background transition-shadow hover:shadow-md">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
