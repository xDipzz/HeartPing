import { Heart } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Heart className="h-6 w-6 text-rose-500" />
      <span className="font-bold text-lg">HeartPing</span>
    </div>
  )
}
