import type { Meta, StoryObj } from "@storybook/react-vite"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta = {
  title: "UI/Kbd",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return <Kbd>⌘</Kbd>
}

function SingleKeysExample() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⌃</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  )
}

function GroupExample() {
  return (
    <div className="flex items-center gap-4">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const SingleKeys: Story = { render: () => <SingleKeysExample /> }
export const Group: Story = { render: () => <GroupExample /> }
