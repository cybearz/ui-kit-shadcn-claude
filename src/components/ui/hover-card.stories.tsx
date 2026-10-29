import type { Meta, StoryObj } from "@storybook/react-vite"

import { CalendarDaysIcon } from "lucide-react"

const meta = {
  title: "UI/Hover Card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function DefaultExample() {
  return (
    <HoverCard defaultOpen>
      <HoverCardTrigger
        render={
          <a
            href="#"
            className="text-sm font-medium underline underline-offset-4"
          />
        }
      >
        @shadcn
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm text-muted-foreground">
              Building beautiful, accessible component libraries.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDaysIcon className="size-3.5" />
            Joined December 2021
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
