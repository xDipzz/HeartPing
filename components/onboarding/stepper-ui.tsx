"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type Step = {
  title: string
  description: string
}

export function StepperUI({ steps, currentStep }: { steps: Step[]; currentStep: number }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2 border-muted transition-colors",
                index < currentStep
                  ? "border-rose-500 bg-rose-500 text-white"
                  : index === currentStep
                    ? "border-rose-500 text-rose-500"
                    : "text-muted-foreground",
              )}
            >
              {index < currentStep ? <Check className="h-5 w-5" /> : <span>{index + 1}</span>}
            </div>
            <div className="absolute -bottom-6 w-max text-center">
              <p
                className={cn(
                  "text-xs font-medium",
                  index <= currentStep ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {step.title}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "absolute left-[100%] top-5 h-[2px] w-[calc(100%-40px)] -translate-y-1/2 transition-colors",
                  index < currentStep ? "bg-rose-500" : "bg-muted",
                )}
                style={{ left: "100%", width: "calc(100% - 40px)" }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-lg font-medium">{steps[currentStep].title}</h3>
        <p className="text-sm text-muted-foreground">{steps[currentStep].description}</p>
      </div>
    </div>
  )
}
