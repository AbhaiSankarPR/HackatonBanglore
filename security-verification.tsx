import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight } from "lucide-react"

export default function SecurityVerification() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Main heading */}
        <h1 className="text-2xl font-normal text-orange-500">{"Let's confirm you are human"}</h1>

        {/* Description text */}
        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
          Complete the security check before continuing. This step verifies that you are not a bot, which helps to
          protect your account and prevent spam.
        </p>

        {/* Begin button */}
        <div className="pt-4">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-md font-medium"
            size="default"
          >
            Begin
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Language selector */}
        <div className="pt-8">
          <Select defaultValue="english">
            <SelectTrigger className="w-32 mx-auto border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Español</SelectItem>
              <SelectItem value="french">Français</SelectItem>
              <SelectItem value="german">Deutsch</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
