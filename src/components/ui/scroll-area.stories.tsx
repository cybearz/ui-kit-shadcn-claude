import type { Meta, StoryObj } from "@storybook/react-vite"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const meta = {
  title: "UI/Scroll Area",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 24 }, (_, i) => `v1.${24 - i}.0`)

function DefaultExample() {
  return (
    <ScrollArea
      className="rounded-md border"
      style={{ height: 288, width: 192 }}
    >
      <div className="p-4">
        <h4 className="mb-2 text-sm font-medium">Releases</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

function HorizontalExample() {
  const artworks = [
    "Abstract Shapes",
    "Mountain Lake",
    "City at Night",
    "Desert Dunes",
    "Ocean Waves",
    "Forest Path",
  ]

  return (
    <ScrollArea
      className="rounded-md border whitespace-nowrap"
      style={{ width: 384 }}
    >
      <div className="flex w-max gap-4 p-4">
        {artworks.map((art) => (
          <div
            key={art}
            className="flex shrink-0 flex-col rounded-md bg-muted p-2"
            style={{ height: 128, width: 128, justifyContent: "flex-end" }}
          >
            <span className="text-xs font-medium">{art}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Horizontal: Story = { render: () => <HorizontalExample /> }
