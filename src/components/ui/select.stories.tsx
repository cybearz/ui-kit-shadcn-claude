import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const meta = {
  title: "UI/Select",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <Select defaultValue="Next.js">
      <SelectTrigger style={{ width: 192 }}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Next.js">Next.js</SelectItem>
        <SelectItem value="SvelteKit">SvelteKit</SelectItem>
        <SelectItem value="Nuxt.js">Nuxt.js</SelectItem>
        <SelectItem value="Remix">Remix</SelectItem>
        <SelectItem value="Astro">Astro</SelectItem>
      </SelectContent>
    </Select>
  )
}

function OpenExample() {
  return (
    <Select defaultValue="Next.js" defaultOpen>
      <SelectTrigger style={{ width: 192 }}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Next.js">Next.js</SelectItem>
        <SelectItem value="SvelteKit">SvelteKit</SelectItem>
        <SelectItem value="Nuxt.js">Nuxt.js</SelectItem>
        <SelectItem value="Remix">Remix</SelectItem>
        <SelectItem value="Astro">Astro</SelectItem>
      </SelectContent>
    </Select>
  )
}

function WithGroupsExample() {
  return (
    <Select defaultValue="Banana" defaultOpen>
      <SelectTrigger style={{ width: 192 }}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false}>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="Apple">Apple</SelectItem>
          <SelectItem value="Banana">Banana</SelectItem>
          <SelectItem value="Blueberry">Blueberry</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="Carrot">Carrot</SelectItem>
          <SelectItem value="Potato">Potato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function PlaceholderExample() {
  return (
    <Select>
      <SelectTrigger style={{ width: 192 }}>
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Next.js">Next.js</SelectItem>
        <SelectItem value="SvelteKit">SvelteKit</SelectItem>
        <SelectItem value="Nuxt.js">Nuxt.js</SelectItem>
      </SelectContent>
    </Select>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Open: Story = { render: () => <OpenExample /> }
export const WithGroups: Story = { render: () => <WithGroupsExample /> }
export const Placeholder: Story = { render: () => <PlaceholderExample /> }
