import type { Meta, StoryObj } from "@storybook/react-vite"

import { BoldIcon, ItalicIcon } from "lucide-react"

const meta = {
  title: "UI/Toggle",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Toggle } from "@/components/ui/toggle"

function DefaultExample() {
  return (
    <div className="flex items-center gap-2">
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" defaultPressed>
        <ItalicIcon />
      </Toggle>
    </div>
  )
}

function OutlineExample() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic" defaultPressed>
      <ItalicIcon />
      Italic
    </Toggle>
  )
}

function SizesExample() {
  return (
    <div className="flex items-center gap-2">
      <Toggle size="sm" defaultPressed aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle size="default" defaultPressed aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg" defaultPressed aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
    </div>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Outline: Story = { render: () => <OutlineExample /> }
export const Sizes: Story = { render: () => <SizesExample /> }
