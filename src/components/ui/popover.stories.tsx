import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const meta = {
  title: "UI/Popover",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <Popover defaultOpen>
      <PopoverTrigger render={<Button variant="outline" />}>
        Share
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Share this document</PopoverTitle>
          <PopoverDescription>
            Anyone with the link can view this file.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

function WithoutDescriptionExample() {
  return (
    <Popover defaultOpen>
      <PopoverTrigger render={<Button variant="outline" />}>
        Notifications
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>You're all caught up</PopoverTitle>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithoutDescription: Story = {
  render: () => <WithoutDescriptionExample />,
}
