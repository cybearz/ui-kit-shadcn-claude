import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

const meta = {
  title: "UI/Progress",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <div className="flex w-72 flex-col gap-4">
      <Progress value={30}>
        <div className="flex w-full justify-between">
          <ProgressLabel>Uploading</ProgressLabel>
          <ProgressValue />
        </div>
      </Progress>
      <Progress value={70}>
        <div className="flex w-full justify-between">
          <ProgressLabel>Processing</ProgressLabel>
          <ProgressValue />
        </div>
      </Progress>
      <Progress value={100}>
        <div className="flex w-full justify-between">
          <ProgressLabel>Complete</ProgressLabel>
          <ProgressValue />
        </div>
      </Progress>
    </div>
  )
}

function WithoutLabelExample() {
  return (
    <div className="w-72">
      <Progress value={45} />
    </div>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithoutLabel: Story = { render: () => <WithoutLabelExample /> }
