import Image from "next/image";
import dashboardLight from "@/public/_static/images/dashboard-light.png";
import dashboardDark from "@/public/_static/images/dashboard-dark.png";
import studentView from "@/public/_static/images/student-view.png";
import adminView from "@/public/_static/images/admin-view.png";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Check } from "lucide-react";

export default function PreviewLanding() {
  return (
    <div className="py-6 sm:py-20 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-black">
      <MaxWidthWrapper>
        <h2 className="text-center text-3xl font-bold mb-12">Multi-Role Dashboard System</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Main Dashboard */}
          <div className="h-auto rounded-xl bg-muted/30 p-3.5 ring-1 ring-inset ring-border">
            <div className="relative overflow-hidden rounded-xl border">
              <Image
                src={dashboardLight}
                alt="Main dashboard light mode"
                className="flex size-full object-contain object-center dark:hidden"
                width={1200}
                height={800}
                priority
              />
              <Image
                src={dashboardDark}
                alt="Main dashboard dark mode"
                className="hidden size-full object-contain object-center dark:flex"
                width={1200}
                height={800}
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                Unified Control Panel
              </div>
            </div>
          </div>

          {/* Student View */}
          <div className="h-auto rounded-xl bg-muted/30 p-3.5 ring-1 ring-inset ring-border">
            <div className="relative overflow-hidden rounded-xl border">
              <Image
                src={studentView}
                alt="Student portal view"
                className="size-full object-contain object-center"
                width={1200}
                height={800}
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                Student Portal
              </div>
            </div>
          </div>

          {/* Admin View */}
          <div className="h-auto rounded-xl bg-muted/30 p-3.5 ring-1 ring-inset ring-border md:col-span-2">
            <div className="relative overflow-hidden rounded-xl border">
              <Image
                src={adminView}
                alt="Administrator view"
                className="size-full object-contain object-center"
                width={1600}
                height={600}
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                School Administrator Dashboard
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { role: "Student", features: ["Result Checker", "Timetable", "E-Learning", "Payment"] },
            { role: "Teacher", features: ["Gradebook", "Attendance", "Lesson Plans", "Analytics"] },
            { role: "Staff", features: ["HR Management", "Payroll", "Inventory", "Reporting"] },
            { role: "Admin", features: ["User Management", "System Config", "Data Export", "Audit Logs"] },
          ].map((role) => (
            <div key={role.role} className="rounded-xl border p-4">
              <h3 className="font-bold text-amber-600 mb-3">{role.role} Features</h3>
              <ul className="space-y-2">
                {role.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 size-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}