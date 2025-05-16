import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { HelpCircle, Info } from "lucide-react";

export default function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-screen-md flex-col items-center gap-5 text-center">
        <div className={cn(
          buttonVariants({ variant: "outline", size: "sm", rounded: "xl" }),
          "px-4 bg-amber-500 text-white border-amber-600"
        )}>
          <span className="mr-3">🏫</span> Edo State Government Initiative
        </div>

        <h1 className="text-balance font-satoshi text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
          Edo State Unified <br />
          <span className="bg-gradient-to-r from-amber-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
            School Management System
          </span>
        </h1>

        <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
          Comprehensive digital platform for all public schools in Edo State. <br />
          <b>Student Tracking</b> • <b>Staff Management</b> • <b>Performance Analytics</b>
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ rounded: "xl", size: "lg" }),
              "gap-2 px-5 text-[15px] bg-amber-600 hover:bg-amber-700"
            )}
          >
            <span>Access Portal</span>
            <Icons.arrowRight className="size-4" />
          </Link>
          <Link
            href="#features"
            className={cn(
              buttonVariants({
                variant: "outline",
                rounded: "xl",
                size: "lg",
              }),
              "px-4 text-[15px] border-amber-500 text-amber-600 hover:bg-amber-50"
            )}
          >
            <Info className="mr-2 size-4" />
            <p>System Features</p>
          </Link>
          <Link
            href="/help"
            className={cn(
              buttonVariants({
                variant: "ghost",
                rounded: "xl",
                size: "lg",
              }),
              "px-4 text-[15px] text-blue-600 hover:bg-blue-50"
            )}
          >
            <HelpCircle className="mr-2 size-4" />
            <p>Help Center</p>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { name: "Students", count: "250K+", icon: "👨‍🎓" },
            { name: "Schools", count: "1.2K+", icon: "🏫" },
            { name: "Teachers", count: "15K+", icon: "👩‍🏫" },
            { name: "Staff", count: "8K+", icon: "👨‍💼" },
          ].map((stat) => (
            <div key={stat.name} className="rounded-xl border p-4 text-center">
              <div className="text-2xl">{stat.icon}</div>
              <div className="text-lg font-bold">{stat.count}</div>
              <div className="text-sm text-muted-foreground">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}