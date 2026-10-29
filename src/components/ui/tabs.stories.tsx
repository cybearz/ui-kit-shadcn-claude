import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const meta = {
  title: "UI/Tabs",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <Tabs defaultValue="account" className="w-72">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Update your name and email address here.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Change your password to keep your account secure.</p>
      </TabsContent>
      <TabsContent value="team">
        <p>Invite teammates and manage their roles.</p>
      </TabsContent>
    </Tabs>
  )
}

function LineVariantExample() {
  return (
    <Tabs defaultValue="overview" className="w-72">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p>A summary of recent activity across your projects.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p>Traffic, conversion, and retention metrics.</p>
      </TabsContent>
    </Tabs>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const LineVariant: Story = { render: () => <LineVariantExample /> }
