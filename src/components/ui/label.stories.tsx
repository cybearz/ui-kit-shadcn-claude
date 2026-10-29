import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "UI/Label",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return <Label htmlFor="email">Email</Label>
}

function WithInputExample() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="label-email">Email</Label>
      <Input id="label-email" type="email" placeholder="you@example.com" />
    </div>
  )
}

function WithCheckboxExample() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="label-terms" defaultChecked />
      <Label htmlFor="label-terms">Accept terms and conditions</Label>
    </div>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithInput: Story = { render: () => <WithInputExample /> }
export const WithCheckbox: Story = { render: () => <WithCheckboxExample /> }
