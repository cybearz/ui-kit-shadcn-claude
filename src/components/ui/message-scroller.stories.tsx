import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

const meta = {
  title: "UI/Message Scroller",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const conversation = [
  {
    id: "1",
    role: "user",
    text: "Hey, can you walk me through the pricing tiers?",
  },
  {
    id: "2",
    role: "assistant",
    text: "Sure! We offer Starter, Pro, and Enterprise. Which one are you considering?",
  },
  {
    id: "3",
    role: "user",
    text: "I think Pro fits best for my team of 8 people.",
  },
  {
    id: "4",
    role: "assistant",
    text: "Great choice. Pro includes unlimited projects, priority support, and advanced analytics for up to 10 seats.",
  },
  {
    id: "5",
    role: "user",
    text: "Does it include single sign-on?",
  },
  {
    id: "6",
    role: "assistant",
    text: "SSO is available as an add-on on Pro, and it's included by default on Enterprise.",
  },
]

function DefaultExample() {
  return (
    <MessageScrollerProvider defaultScrollPosition="start">
      <MessageScroller className="h-80 w-full max-w-md rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            {conversation.map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <div
                  className={
                    message.role === "user"
                      ? "ml-auto max-w-[80%] rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground"
                      : "mr-auto max-w-[80%] rounded-lg bg-muted px-3 py-2 text-sm"
                  }
                >
                  {message.text}
                </div>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  )
}

function CompactExample() {
  return (
    <MessageScrollerProvider defaultScrollPosition="end">
      <MessageScroller className="h-48 w-full max-w-sm rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-3">
            {conversation.slice(0, 3).map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <div
                  className={
                    message.role === "user"
                      ? "ml-auto max-w-[85%] rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground"
                      : "mr-auto max-w-[85%] rounded-lg bg-muted px-3 py-2 text-sm"
                  }
                >
                  {message.text}
                </div>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Compact: Story = { render: () => <CompactExample /> }
