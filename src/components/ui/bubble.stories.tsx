import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"

const meta = {
  title: "UI/Bubble",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <BubbleGroup>
      <Bubble align="start" variant="muted">
        <BubbleContent>
          Hey, did you get a chance to review the PR?
        </BubbleContent>
      </Bubble>
      <Bubble align="end" variant="default">
        <BubbleContent>
          Just finished — left a couple of comments, looks good overall.
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}

function VariantsExample() {
  return (
    <BubbleGroup>
      <Bubble variant="default">
        <BubbleContent>Default variant</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Secondary variant</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Muted variant</BubbleContent>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>Tinted variant</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Outline variant</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Something went wrong</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}

function WithReactionsExample() {
  return (
    <BubbleGroup>
      <Bubble align="start" variant="muted">
        <BubbleContent>That demo went really well today</BubbleContent>
        <BubbleReactions side="bottom" align="start">
          🎉 3
        </BubbleReactions>
      </Bubble>
    </BubbleGroup>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Variants: Story = { render: () => <VariantsExample /> }
export const WithReactions: Story = { render: () => <WithReactionsExample /> }
