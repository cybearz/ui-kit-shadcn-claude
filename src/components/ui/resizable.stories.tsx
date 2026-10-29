import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const meta = {
  title: "UI/Resizable Panel Group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="max-w-md rounded-lg border"
      style={{ height: 240 }}
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

function ThreePanelsExample() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="max-w-md rounded-lg border"
      style={{ height: 240 }}
    >
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-sm text-muted-foreground">Nav</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-sm text-muted-foreground">Editor</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-sm text-muted-foreground">Preview</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

function VerticalExample() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      aria-orientation="vertical"
      className="max-w-md rounded-lg border"
      style={{ height: 240 }}
    >
      <ResizablePanel defaultSize={35}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={65}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Body</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const ThreePanels: Story = { render: () => <ThreePanelsExample /> }
export const Vertical: Story = { render: () => <VerticalExample /> }
