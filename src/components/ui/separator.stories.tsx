import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "@/components/ui/separator"

const meta = {
  title: "UI/Separator",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function HorizontalExample() {
  return (
    <div className="max-w-xs">
      <div className="flex flex-col gap-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-2" />
      <div className="flex h-5 items-center text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" className="mx-2" />
        <div>Docs</div>
        <Separator orientation="vertical" className="mx-2" />
        <div>Source</div>
      </div>
    </div>
  )
}

function VerticalExample() {
  return (
    <div className="flex items-center gap-4" style={{ height: 96 }}>
      <span className="text-sm">Profile</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Settings</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Billing</span>
    </div>
  )
}

export const Horizontal: Story = { render: () => <HorizontalExample /> }
export const Vertical: Story = { render: () => <VerticalExample /> }
