import type { Meta, StoryObj } from "@storybook/react-vite"

import { CheckCircle2Icon, TerminalIcon, TriangleAlertIcon } from "lucide-react"

const meta = {
  title: "UI/Alert",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

function DefaultExample() {
  return (
    <Alert className="max-w-md">
      <TerminalIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  )
}

function DestructiveExample() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>Unable to process payment</AlertTitle>
      <AlertDescription>
        Please verify your billing information and try again.
      </AlertDescription>
    </Alert>
  )
}

function SuccessExample() {
  return (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Deployment successful</AlertTitle>
      <AlertDescription>
        Your changes are now live on production.
      </AlertDescription>
    </Alert>
  )
}

function WithActionExample() {
  return (
    <Alert className="max-w-md">
      <TerminalIcon />
      <AlertTitle>New version available</AlertTitle>
      <AlertDescription>
        Version 2.4.0 includes performance improvements and bug fixes.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          Update
        </Button>
      </AlertAction>
    </Alert>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Destructive: Story = { render: () => <DestructiveExample /> }
export const Success: Story = { render: () => <SuccessExample /> }
export const WithAction: Story = { render: () => <WithActionExample /> }
