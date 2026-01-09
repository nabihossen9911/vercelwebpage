import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Globe, Database, Smartphone, Video } from "lucide-react"

const courses = [
  {
    icon: Code,
    title: "প্রোগ্রামিং",
    description: "C, C++, Java, Python সহ বিভিন্ন প্রোগ্রামিং ভাষা শিখুন",
    duration: "৬ মাস",
  },
  {
    icon: Globe,
    title: "ওয়েব ডেভেলপমেন্ট",
    description: "HTML, CSS, JavaScript, React, Node.js দিয়ে ওয়েবসাইট তৈরি করুন",
    duration: "৮ মাস",
  },
  {
    icon: Palette,
    title: "গ্রাফিক্স ডিজাইন",
    description: "Photoshop, Illustrator দিয়ে পেশাদার ডিজাইন তৈরি করুন",
    duration: "৪ মাস",
  },
  {
    icon: Database,
    title: "ডেটাবেস ম্যানেজমেন্ট",
    description: "MySQL, MongoDB, SQL Server এ দক্ষতা অর্জন করুন",
    duration: "৩ মাস",
  },
  {
    icon: Smartphone,
    title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
    description: "Android এবং iOS অ্যাপ ডেভেলপমেন্ট শিখুন",
    duration: "৬ মাস",
  },
  {
    icon: Video,
    title: "ডিজিটাল মার্কেটিং",
    description: "SEO, Social Media Marketing, Content Marketing শিখুন",
    duration: "৩ মাস",
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            আমাদের জনপ্রিয় কোর্স সমূহ
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            আধুনিক প্রযুক্তি এবং চাহিদা অনুযায়ী ডিজাইন করা কোর্স যা আপনাকে ক্যারিয়ারে এগিয়ে নিয়ে যাবে
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <course.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">সময়কাল: {course.duration}</span>
                  <Button variant="link" className="p-0">
                    বিস্তারিত →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
