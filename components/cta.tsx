import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 overflow-hidden rounded-2xl bg-primary p-8 text-center text-primary-foreground lg:p-16">
          <h2 className="mb-4 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">আজই শুরু করুন আপনার শেখার যাত্রা</h2>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-primary-foreground/90">
            NITS Computer Training Institute এ যোগ দিয়ে নিজেকে আধুনিক প্রযুক্তিতে দক্ষ করে তুলুন
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="text-base">
              ফ্রি কনসালটেশন বুক করুন
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10"
            >
              কোর্স ক্যাটালগ ডাউনলোড করুন
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">ফোন করুন</h3>
              <p className="text-sm text-muted-foreground">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
              <p className="text-sm text-muted-foreground">+৮৮০ ১৮১২-৩৪৫৬৭৮</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">ইমেইল করুন</h3>
              <p className="text-sm text-muted-foreground">info@nits.edu.bd</p>
              <p className="text-sm text-muted-foreground">admission@nits.edu.bd</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">আমাদের অফিস</h3>
              <p className="text-sm text-muted-foreground">মিরপুর-১০, ঢাকা-১২১৬</p>
              <p className="text-sm text-muted-foreground">বাংলাদেশ</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
