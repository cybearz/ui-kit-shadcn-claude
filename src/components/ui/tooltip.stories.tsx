import type { Meta, StoryObj } from "@storybook/react-vite"

import { PlusIcon } from "lucide-react"

const meta = {
  title: "UI/Tooltip",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function DefaultExample() {
  return (
    <TooltipProvider>
      <Tooltip defaultOpen>
        <TooltipTrigger render={<Button variant="outline" size="icon" />}>
          <PlusIcon />
        </TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function BottomExample() {
  return (
    <TooltipProvider>
      <Tooltip defaultOpen>
        <TooltipTrigger render={<Button variant="outline" />}>
          Hover me
        </TooltipTrigger>
        <TooltipContent side="bottom">
          Tooltips show a short hint on hover
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Bottom: Story = { render: () => <BottomExample /> }
