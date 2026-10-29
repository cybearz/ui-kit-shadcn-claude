import type { Meta, StoryObj } from "@storybook/react-vite"

import { CreditCardIcon, SearchIcon, SendIcon } from "lucide-react"

const meta = {
  title: "UI/Input Group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

function SearchExample() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search components..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  )
}

function WithButtonExample() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Enter your email" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="sm">Subscribe</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

function WithTextExample() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <CreditCardIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="4242 4242 4242 4242" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>CVC</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}

function TextareaExample() {
  return (
    <InputGroup>
      <InputGroupTextarea placeholder="Type your message here." />
      <InputGroupAddon align="block-end">
        <InputGroupButton size="icon-xs" variant="default">
          <SendIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export const Search: Story = { render: () => <SearchExample /> }
export const WithButton: Story = { render: () => <WithButtonExample /> }
export const WithText: Story = { render: () => <WithTextExample /> }
export const Textarea: Story = { render: () => <TextareaExample /> }
