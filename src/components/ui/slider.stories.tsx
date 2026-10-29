import type { Meta, StoryObj } from "@storybook/react-vite"

import { Slider } from "@/components/ui/slider"

const meta = {
  title: "UI/Slider",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return <Slider defaultValue={[50]} className="w-72" />
}

function RangeExample() {
  return <Slider defaultValue={[25, 75]} className="w-72" />
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Range: Story = { render: () => <RangeExample /> }
