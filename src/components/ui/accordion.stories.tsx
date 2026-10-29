import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const meta = {
  title: "UI/Accordion",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <Accordion defaultValue={["item-1"]} className="max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and is tested with
          screen readers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function MultipleExample() {
  return (
    <Accordion
      multiple
      defaultValue={["shipping", "returns"]}
      className="max-w-md"
    >
      <AccordionItem value="shipping">
        <AccordionTrigger>Shipping policy</AccordionTrigger>
        <AccordionContent>
          Orders ship within 2 business days via standard carrier.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Return policy</AccordionTrigger>
        <AccordionContent>
          Items can be returned within 30 days of delivery for a full refund.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="warranty" disabled>
        <AccordionTrigger>Warranty (unavailable)</AccordionTrigger>
        <AccordionContent>
          This item does not include an extended warranty.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Multiple: Story = { render: () => <MultipleExample /> }
