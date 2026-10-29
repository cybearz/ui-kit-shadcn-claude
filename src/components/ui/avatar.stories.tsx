import type { Meta, StoryObj } from "@storybook/react-vite"

import { CheckIcon } from "lucide-react"

const meta = {
  title: "UI/Avatar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

const AVATAR_IMG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjk3MzE2Ii8+PGNpcmNsZSBjeD0iMzIiIGN5PSIyNCIgcj0iMTIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTIgNThjMC0xMiA5LTIwIDIwLTIwczIwIDggMjAgMjAiIGZpbGw9IiNmZmYiLz48L3N2Zz4="

function DefaultExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage src={AVATAR_IMG} alt="Jane Cooper" />
        <AvatarFallback>JC</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src={AVATAR_IMG} alt="Jane Cooper" />
        <AvatarFallback>JC</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src={AVATAR_IMG} alt="Jane Cooper" />
        <AvatarFallback>JC</AvatarFallback>
      </Avatar>
    </div>
  )
}

function FallbackExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>AT</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
    </div>
  )
}

function WithBadgeExample() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="lg">
        <AvatarImage src={AVATAR_IMG} alt="Jane Cooper" />
        <AvatarFallback>JC</AvatarFallback>
        <AvatarBadge>
          <CheckIcon />
        </AvatarBadge>
      </Avatar>
      <Avatar size="default">
        <AvatarFallback>AT</AvatarFallback>
        <AvatarBadge />
      </Avatar>
    </div>
  )
}

function GroupExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src={AVATAR_IMG} alt="Jane Cooper" />
        <AvatarFallback>JC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AT</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Fallback: Story = { render: () => <FallbackExample /> }
export const WithBadge: Story = { render: () => <WithBadgeExample /> }
export const Group: Story = { render: () => <GroupExample /> }
