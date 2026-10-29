import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"

const meta = {
  title: "UI/Message",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const AVATAR_IMG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMTBiOTgxIi8+PGNpcmNsZSBjeD0iMzIiIGN5PSIyNCIgcj0iMTIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTIgNThjMC0xMiA5LTIwIDIwLTIwczIwIDggMjAgMjAiIGZpbGw9IiNmZmYiLz48L3N2Zz4="

function DefaultExample() {
  return (
    <Message align="start">
      <MessageAvatar>
        <img src={AVATAR_IMG} alt="Sam Lee" />
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>Sam Lee</MessageHeader>
        <p>Can you take a look at the deploy logs from last night?</p>
      </MessageContent>
    </Message>
  )
}

function WithFooterExample() {
  return (
    <MessageGroup>
      <Message align="start">
        <MessageAvatar>
          <img src={AVATAR_IMG} alt="Sam Lee" />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Sam Lee</MessageHeader>
          <p>
            The staging build is green again — looks like it was a flaky
            dependency cache.
          </p>
          <MessageFooter>9:41 AM</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <p>Nice, thanks for digging into that so fast.</p>
          <MessageFooter>9:43 AM &middot; Seen</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithFooter: Story = { render: () => <WithFooterExample /> }
