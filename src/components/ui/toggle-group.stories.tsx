import type { Meta, StoryObj } from "@storybook/react-vite"

import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"

const meta = {
  title: "UI/Toggle Group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function DefaultExample() {
  return (
    <ToggleGroup defaultValue={["left"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

function OutlineExample() {
  return (
    <ToggleGroup variant="outline" defaultValue={["center"]} spacing={0}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Outline: Story = { render: () => <OutlineExample /> }
