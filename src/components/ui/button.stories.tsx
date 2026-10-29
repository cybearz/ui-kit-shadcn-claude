import type { Meta, StoryObj } from "@storybook/react-vite"

import { ArrowRightIcon, Loader2Icon, MailIcon, TrashIcon } from "lucide-react"

const meta = {
  title: "UI/Button",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Button } from "@/components/ui/button"

function DefaultExample() {
  return <Button>Button</Button>
}

function VariantsExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

function SizesExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

function WithIconExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>
        <MailIcon data-icon="inline-start" />
        Send email
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
      <Button variant="destructive" size="icon">
        <TrashIcon />
      </Button>
    </div>
  )
}

function StatesExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>Disabled</Button>
      <Button disabled>
        <Loader2Icon data-icon="inline-start" className="animate-spin" />
        Please wait
      </Button>
    </div>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Variants: Story = { render: () => <VariantsExample /> }
export const Sizes: Story = { render: () => <SizesExample /> }
export const WithIcon: Story = { render: () => <WithIconExample /> }
export const States: Story = { render: () => <StatesExample /> }
