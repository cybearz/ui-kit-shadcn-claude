import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "@/components/ui/skeleton"

const meta = {
  title: "UI/Skeleton",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  )
}

function CardExample() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-12 w-64 rounded-xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Card: Story = { render: () => <CardExample /> }
