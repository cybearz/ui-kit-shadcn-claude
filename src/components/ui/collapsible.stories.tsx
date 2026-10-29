import type { Meta, StoryObj } from "@storybook/react-vite"

import { ChevronsUpDownIcon } from "lucide-react"

const meta = {
  title: "UI/Collapsible",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

function DefaultExample() {
  return (
    <Collapsible defaultOpen className="flex w-80 flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-1">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-input px-4 py-2 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border border-input px-4 py-2 font-mono text-sm">
          @base-ui/react
        </div>
        <div className="rounded-md border border-input px-4 py-2 font-mono text-sm">
          @tailwindlabs/tailwindcss
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

function ClosedExample() {
  return (
    <Collapsible className="flex w-80 flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-1">
        <h4 className="text-sm font-semibold">Advanced settings</h4>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-input px-4 py-2 text-sm text-muted-foreground">
        Click to expand advanced settings
      </div>
    </Collapsible>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Closed: Story = { render: () => <ClosedExample /> }
