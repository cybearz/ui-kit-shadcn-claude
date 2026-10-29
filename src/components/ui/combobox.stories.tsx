import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox"

const meta = {
  title: "UI/Combobox",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <Combobox defaultValue="next" defaultOpen>
      <ComboboxInput placeholder="Select a framework..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="next">Next.js</ComboboxItem>
          <ComboboxItem value="react">React</ComboboxItem>
          <ComboboxItem value="svelte">SvelteKit</ComboboxItem>
          <ComboboxItem value="nuxt">Nuxt</ComboboxItem>
          <ComboboxItem value="remix">Remix</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function GroupedExample() {
  return (
    <Combobox defaultOpen>
      <ComboboxInput placeholder="Search produce..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxLabel>Fruits</ComboboxLabel>
            <ComboboxItem value="apple">Apple</ComboboxItem>
            <ComboboxItem value="banana">Banana</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>Vegetables</ComboboxLabel>
            <ComboboxItem value="carrot">Carrot</ComboboxItem>
            <ComboboxItem value="potato">Potato</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function EmptyExample() {
  return (
    <Combobox items={[]} defaultInputValue="xyz" defaultOpen>
      <ComboboxInput placeholder="Search frameworks..." />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList />
      </ComboboxContent>
    </Combobox>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Grouped: Story = { render: () => <GroupedExample /> }
export const Empty: Story = { render: () => <EmptyExample /> }
