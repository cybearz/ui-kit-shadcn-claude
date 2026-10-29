import type { Meta, StoryObj } from "@storybook/react-vite"

import { CheckIcon, Loader2Icon, SearchIcon, XIcon } from "lucide-react"

const meta = {
  title: "UI/Trace",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"

function DefaultExample() {
  return (
    <Trace className="w-72">
      <span>
        <TraceLine>
          <TraceIcon>
            <CheckIcon />
          </TraceIcon>
          <TraceTitle>Searched the web for "shadcn tabs example"</TraceTitle>
          <TraceDescription>1.2s</TraceDescription>
        </TraceLine>
      </span>
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <SearchIcon />
            </TraceIcon>
            <TraceTitle>Read 3 files in src/components/ui</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          tabs.tsx, tabs-list.tsx, tabs-trigger.tsx
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <span>
        <TraceLine status="running">
          <TraceIcon>
            <Loader2Icon className="animate-spin" />
          </TraceIcon>
          <TraceTitle>Generating preview component</TraceTitle>
        </TraceLine>
      </span>
    </Trace>
  )
}

function WithErrorExample() {
  return (
    <Trace className="w-72">
      <span>
        <TraceLine>
          <TraceIcon>
            <CheckIcon />
          </TraceIcon>
          <TraceTitle>Installed dependencies</TraceTitle>
          <TraceDescription>4.8s</TraceDescription>
        </TraceLine>
      </span>
      <span>
        <TraceLine status="error">
          <TraceIcon>
            <XIcon />
          </TraceIcon>
          <TraceTitle>Build failed: missing export "Spinner"</TraceTitle>
        </TraceLine>
      </span>
    </Trace>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithError: Story = { render: () => <WithErrorExample /> }
