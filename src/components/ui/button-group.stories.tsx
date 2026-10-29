import type { Meta, StoryObj } from "@storybook/react-vite"

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

const meta = {
  title: "UI/Button Group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"

function DefaultExample() {
  return (
    <ButtonGroup>
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
      <Button variant="outline">Year</Button>
    </ButtonGroup>
  )
}

function WithIconsExample() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <BoldIcon />
      </Button>
      <Button variant="outline" size="icon">
        <ItalicIcon />
      </Button>
      <Button variant="outline" size="icon">
        <UnderlineIcon />
      </Button>
    </ButtonGroup>
  )
}

function WithSeparatorAndTextExample() {
  return (
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Paste</Button>
      <ButtonGroupSeparator />
      <ButtonGroupText>Read only</ButtonGroupText>
    </ButtonGroup>
  )
}

function VerticalExample() {
  return (
    <ButtonGroup orientation="vertical" className="w-64">
      <Button variant="outline">Profile</Button>
      <Button variant="outline">Billing</Button>
      <Button variant="outline">Settings</Button>
    </ButtonGroup>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithIcons: Story = { render: () => <WithIconsExample /> }
export const WithSeparatorAndText: Story = {
  render: () => <WithSeparatorAndTextExample />,
}
export const Vertical: Story = { render: () => <VerticalExample /> }
