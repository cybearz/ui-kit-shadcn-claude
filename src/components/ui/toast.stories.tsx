import type { Meta, StoryObj } from "@storybook/react-vite"

import * as React from "react"

const meta = {
  title: "UI/Toast",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Toaster, toast } from "@/components/ui/toast"

function AutoFire({ options }: { options: Parameters<typeof toast.add>[0] }) {
  React.useEffect(() => {
    toast.add(options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}

function DefaultExample() {
  return (
    <>
      <Toaster />
      <AutoFire
        options={{
          title: "Changes saved",
          description: "Your profile has been updated successfully.",
          type: "success",
        }}
      />
    </>
  )
}

function WithActionExample() {
  return (
    <>
      <Toaster />
      <AutoFire
        options={{
          title: "Event created",
          description: "Friday, Oct 31 at 5:00 PM",
          actionProps: { children: "Undo" },
        }}
      />
    </>
  )
}

function ErrorExample() {
  return (
    <>
      <Toaster />
      <AutoFire
        options={{
          title: "Upload failed",
          description: "The file exceeds the 10 MB size limit.",
          type: "error",
        }}
      />
    </>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithAction: Story = { render: () => <WithActionExample /> }
export const Error: Story = { render: () => <ErrorExample /> }
