import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "UI/Card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>Invite your team to collaborate.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          You have 4 pending invitations and 12 active members.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Manage members</Button>
      </CardFooter>
    </Card>
  )
}

function WithActionExample() {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            Mark all read
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          New comment from Sarah on your latest design review.
        </p>
      </CardContent>
    </Card>
  )
}

function FormCardExample() {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="card-email">Email</Label>
            <Input id="card-email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="card-password">Password</Label>
            <Input id="card-password" type="password" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}

function SmallExample() {
  return (
    <Card size="sm" className="w-64">
      <CardHeader>
        <CardTitle>Storage</CardTitle>
        <CardDescription>8.2 GB of 15 GB used</CardDescription>
      </CardHeader>
    </Card>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithAction: Story = { render: () => <WithActionExample /> }
export const FormCard: Story = { render: () => <FormCardExample /> }
export const Small: Story = { render: () => <SmallExample /> }
