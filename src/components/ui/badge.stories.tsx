import type { Meta, StoryObj } from "@storybook/react-vite"

import { BadgeCheckIcon } from "lucide-react"

const meta = {
  title: "UI/Badge",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Badge } from "@/components/ui/badge"

function DefaultExample() {
  return <Badge>Badge</Badge>
}

function VariantsExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  )
}

function WithIconExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>
        <BadgeCheckIcon data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="destructive">
        <BadgeCheckIcon data-icon="inline-start" />
        Failed
      </Badge>
    </div>
  )
}

function AsLinkExample() {
  return (
    <Badge variant="secondary" render={<a href="#" />}>
      Clickable badge
    </Badge>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Variants: Story = { render: () => <VariantsExample /> }
export const WithIcon: Story = { render: () => <WithIconExample /> }
export const AsLink: Story = { render: () => <AsLinkExample /> }
