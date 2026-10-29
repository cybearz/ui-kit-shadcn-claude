import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

const meta = {
  title: "UI/Native Select",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <NativeSelect defaultValue="apple" aria-label="Fruit">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  )
}

function WithOptGroupExample() {
  return (
    <NativeSelect defaultValue="orange" aria-label="Fruit, grouped">
      <NativeSelectOption value="" disabled>
        Select a fruit
      </NativeSelectOption>
      <NativeSelectOptGroup label="Citrus">
        <NativeSelectOption value="orange">Orange</NativeSelectOption>
        <NativeSelectOption value="lemon">Lemon</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Berries">
        <NativeSelectOption value="strawberry">Strawberry</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}

function SmallExample() {
  return (
    <NativeSelect size="sm" defaultValue="usd" aria-label="Currency">
      <NativeSelectOption value="usd">USD</NativeSelectOption>
      <NativeSelectOption value="eur">EUR</NativeSelectOption>
      <NativeSelectOption value="gbp">GBP</NativeSelectOption>
    </NativeSelect>
  )
}

function DisabledExample() {
  return (
    <NativeSelect disabled defaultValue="usd" aria-label="Currency">
      <NativeSelectOption value="usd">USD</NativeSelectOption>
      <NativeSelectOption value="eur">EUR</NativeSelectOption>
    </NativeSelect>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithOptGroup: Story = { render: () => <WithOptGroupExample /> }
export const Small: Story = { render: () => <SmallExample /> }
export const Disabled: Story = { render: () => <DisabledExample /> }
