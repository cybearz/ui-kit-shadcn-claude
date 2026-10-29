import type { Meta, StoryObj } from "@storybook/react-vite"

import { ArrowRightIcon } from "lucide-react"

const meta = {
  title: "UI/Direction Provider",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import { Button } from "@/components/ui/button"
import { DirectionProvider } from "@/components/ui/direction"

function LTRExample() {
  return (
    <DirectionProvider direction="ltr">
      <div dir="ltr" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">
          Left-to-right reading direction
        </p>
        <Button>
          Continue
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </DirectionProvider>
  )
}

function RTLExample() {
  return (
    <DirectionProvider direction="rtl">
      <div dir="rtl" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">
          اتجاه القراءة من اليمين إلى اليسار
        </p>
        <Button>
          متابعة
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </DirectionProvider>
  )
}

export const LTR: Story = { render: () => <LTRExample /> }
export const RTL: Story = { render: () => <RTLExample /> }
