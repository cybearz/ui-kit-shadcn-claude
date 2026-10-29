import type { Meta, StoryObj } from "@storybook/react-vite"

import { Calendar } from "@/components/ui/calendar"

const meta = {
  title: "UI/Calendar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <Calendar
      mode="single"
      defaultMonth={new Date(2026, 9, 1)}
      selected={new Date(2026, 9, 14)}
      className="rounded-xl border"
    />
  )
}

function RangeExample() {
  return (
    <Calendar
      mode="range"
      defaultMonth={new Date(2026, 9, 1)}
      selected={{ from: new Date(2026, 9, 10), to: new Date(2026, 9, 17) }}
      className="rounded-xl border"
    />
  )
}

function MultipleExample() {
  return (
    <Calendar
      mode="multiple"
      defaultMonth={new Date(2026, 9, 1)}
      selected={[
        new Date(2026, 9, 3),
        new Date(2026, 9, 9),
        new Date(2026, 9, 22),
      ]}
      className="rounded-xl border"
    />
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Range: Story = { render: () => <RangeExample /> }
export const Multiple: Story = { render: () => <MultipleExample /> }
