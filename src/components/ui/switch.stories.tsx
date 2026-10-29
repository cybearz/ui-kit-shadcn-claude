import type { Meta, StoryObj } from "@storybook/react-vite"

import { Switch } from "@/components/ui/switch"

const meta = {
  title: "UI/Switch",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="unchecked" />
        <label htmlFor="unchecked" className="text-sm">
          Off
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="checked" defaultChecked />
        <label htmlFor="checked" className="text-sm">
          On
        </label>
      </div>
    </div>
  )
}

function SmallExample() {
  return (
    <div className="flex items-center gap-4">
      <Switch size="sm" />
      <Switch size="sm" defaultChecked />
    </div>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Small: Story = { render: () => <SmallExample /> }
