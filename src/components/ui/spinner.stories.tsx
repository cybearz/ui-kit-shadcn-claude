import type { Meta, StoryObj } from "@storybook/react-vite"

import { Spinner } from "@/components/ui/spinner"

const meta = {
  title: "UI/Spinner",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return <Spinner />
}

function SizesExample() {
  return (
    <div className="flex items-center gap-4">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Sizes: Story = { render: () => <SizesExample /> }
