import type { Meta, StoryObj } from "@storybook/react-vite"

import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "UI/Textarea",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return <Textarea placeholder="Type your message here." className="w-72" />
}

function WithValueExample() {
  return (
    <Textarea
      defaultValue="We appreciate you reaching out. Our team will get back to you within one business day."
      className="w-72"
    />
  )
}

function DisabledExample() {
  return (
    <Textarea
      disabled
      defaultValue="This field is read-only."
      className="w-72"
    />
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithValue: Story = { render: () => <WithValueExample /> }
export const Disabled: Story = { render: () => <DisabledExample /> }
