import type { Meta, StoryObj } from "@storybook/react-vite"

import { CircleIcon, GitCommitHorizontalIcon } from "lucide-react"

const meta = {
  title: "UI/Marker",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

function DefaultExample() {
  return (
    <Marker>
      <MarkerIcon>
        <CircleIcon />
      </MarkerIcon>
      <MarkerContent>Order placed</MarkerContent>
    </Marker>
  )
}

function SeparatorExample() {
  return (
    <Marker variant="separator">
      <MarkerContent>October 29, 2026</MarkerContent>
    </Marker>
  )
}

function TimelineExample() {
  return (
    <div className="flex flex-col gap-3">
      <Marker>
        <MarkerIcon>
          <GitCommitHorizontalIcon />
        </MarkerIcon>
        <MarkerContent>
          Deployed <a href="#">v2.4.0</a> to production
        </MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <GitCommitHorizontalIcon />
        </MarkerIcon>
        <MarkerContent>Merged pull request #182</MarkerContent>
      </Marker>
    </div>
  )
}

function BorderExample() {
  return (
    <Marker variant="border">
      <MarkerContent>Shipping details</MarkerContent>
    </Marker>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Separator: Story = { render: () => <SeparatorExample /> }
export const Timeline: Story = { render: () => <TimelineExample /> }
export const Border: Story = { render: () => <BorderExample /> }
