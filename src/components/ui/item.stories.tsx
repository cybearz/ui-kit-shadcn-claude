import type { Meta, StoryObj } from "@storybook/react-vite"

import { BellIcon, MoreHorizontalIcon, WifiIcon } from "lucide-react"

const meta = {
  title: "UI/Item",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const AVATAR_IMG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNjM2NmYxIi8+PGNpcmNsZSBjeD0iMzIiIGN5PSIyNCIgcj0iMTIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTIgNThjMC0xMiA5LTIwIDIwLTIwczIwIDggMjAgMjAiIGZpbGw9IiNmZmYiLz48L3N2Zz4="

function DefaultExample() {
  return (
    <ItemGroup>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Push notifications</ItemTitle>
          <ItemDescription>
            Get notified when someone mentions you in a comment.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Manage
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <WifiIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Offline sync</ItemTitle>
          <ItemDescription>
            Keep a local copy of your workspace for offline access.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Manage
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}

function TeamMembersExample() {
  return (
    <ItemGroup>
      <Item>
        <ItemMedia variant="image">
          <img src={AVATAR_IMG} alt="Jane Cooper" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Cooper</ItemTitle>
          <ItemDescription>jane.cooper@acme.com &middot; Admin</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </ItemActions>
      </Item>
      <Item>
        <ItemMedia variant="image">
          <img src={AVATAR_IMG} alt="Alex Torres" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Alex Torres</ItemTitle>
          <ItemDescription>
            alex.torres@acme.com &middot; Member
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}

function SizesExample() {
  return (
    <ItemGroup>
      <Item variant="muted" size="sm">
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
        </ItemContent>
      </Item>
      <Item variant="muted" size="xs">
        <ItemContent>
          <ItemTitle>Compact size</ItemTitle>
        </ItemContent>
      </Item>
    </ItemGroup>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const TeamMembers: Story = { render: () => <TeamMembersExample /> }
export const Sizes: Story = { render: () => <SizesExample /> }
