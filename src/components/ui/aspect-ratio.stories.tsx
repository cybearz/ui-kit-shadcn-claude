import type { Meta, StoryObj } from "@storybook/react-vite"

import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta = {
  title: "UI/Aspect Ratio",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const LANDSCAPE_IMG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwIDAgNjQwIDM2MCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InNreSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN2RkM2ZjIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2UwZjJmZSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIGZpbGw9InVybCgjc2t5KSIvPgogIDxjaXJjbGUgY3g9IjUyMCIgY3k9IjcwIiByPSIzNiIgZmlsbD0iI2ZkZTY4YSIvPgogIDxwb2x5Z29uIHBvaW50cz0iMCwzNjAgMTYwLDE4MCAyNjAsMjgwIDM0MCwxNjAgNDgwLDMwMCA2NDAsMjIwIDY0MCwzNjAiIGZpbGw9IiM2MGE1ZmEiIG9wYWNpdHk9IjAuNiIvPgogIDxwb2x5Z29uIHBvaW50cz0iMCwzNjAgMTIwLDI0MCAyMjAsMzIwIDMyMCwyMDAgNDYwLDMzMCA2NDAsMjYwIDY0MCwzNjAiIGZpbGw9IiMzYjgyZjYiLz4KPC9zdmc+Cg=="

function DefaultExample() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="w-80 overflow-hidden rounded-lg bg-muted"
    >
      <img
        src={LANDSCAPE_IMG}
        alt="Landscape with mountains at sunset"
        className="size-full object-cover"
      />
    </AspectRatio>
  )
}

function SquareExample() {
  return (
    <AspectRatio ratio={1} className="w-48 overflow-hidden rounded-lg bg-muted">
      <img
        src={LANDSCAPE_IMG}
        alt="Landscape with mountains at sunset"
        className="size-full object-cover"
      />
    </AspectRatio>
  )
}

function PortraitExample() {
  return (
    <AspectRatio
      ratio={3 / 4}
      className="w-48 overflow-hidden rounded-lg bg-muted"
    >
      <img
        src={LANDSCAPE_IMG}
        alt="Landscape with mountains at sunset"
        className="size-full object-cover"
      />
    </AspectRatio>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Square: Story = { render: () => <SquareExample /> }
export const Portrait: Story = { render: () => <PortraitExample /> }
