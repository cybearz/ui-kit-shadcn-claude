import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const meta = {
  title: "UI/Radio Group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <RadioGroup defaultValue="comfortable" className="max-w-xs">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}

function PlanSelectorExample() {
  return (
    <RadioGroup defaultValue="pro" className="max-w-xs">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="free" id="plan-free" />
        <Label htmlFor="plan-free">Free — $0/mo</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="pro" id="plan-pro" />
        <Label htmlFor="plan-pro">Pro — $12/mo</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="team" id="plan-team" />
        <Label htmlFor="plan-team">Team — $29/mo</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="enterprise" id="plan-enterprise" disabled />
        <Label htmlFor="plan-enterprise">Enterprise — Contact us</Label>
      </div>
    </RadioGroup>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const PlanSelector: Story = { render: () => <PlanSelectorExample /> }
