import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const meta = {
  title: "UI/Checkbox",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return <Checkbox />
}

function CheckedExample() {
  return <Checkbox defaultChecked />
}

function WithLabelExample() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" defaultChecked />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}

function DisabledExample() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked">Unchecked and disabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Checked and disabled</Label>
      </div>
    </div>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Checked: Story = { render: () => <CheckedExample /> }
export const WithLabel: Story = { render: () => <WithLabelExample /> }
export const Disabled: Story = { render: () => <DisabledExample /> }
