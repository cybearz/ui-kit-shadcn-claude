import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "@/components/ui/input"

const meta = {
  title: "UI/Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return <Input type="email" placeholder="Email" />
}

function WithValueExample() {
  return <Input type="text" defaultValue="Pedro Duarte" />
}

function DisabledExample() {
  return <Input type="text" placeholder="Disabled input" disabled />
}

function InvalidExample() {
  return <Input type="email" defaultValue="not-an-email" aria-invalid="true" />
}

function FileExample() {
  return <Input id="picture" type="file" />
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithValue: Story = { render: () => <WithValueExample /> }
export const Disabled: Story = { render: () => <DisabledExample /> }
export const Invalid: Story = { render: () => <InvalidExample /> }
export const File: Story = { render: () => <FileExample /> }
