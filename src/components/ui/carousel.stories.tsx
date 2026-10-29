import type { Meta, StoryObj } from "@storybook/react-vite"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const meta = {
  title: "UI/Carousel",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const slides = [
  { title: "Onboarding", description: "Set up your workspace" },
  { title: "Invite your team", description: "Add teammates to collaborate" },
  { title: "Connect tools", description: "Link your calendar and chat" },
  { title: "Go live", description: "Publish your first project" },
]

function DefaultExample() {
  return (
    <Carousel className="w-full max-w-xs" style={{ marginInline: "3.5rem" }}>
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.title}>
            <Card>
              <CardContent className="flex aspect-square flex-col items-center justify-center gap-1 text-center">
                <span className="text-base font-medium">{slide.title}</span>
                <span className="text-sm text-muted-foreground">
                  {slide.description}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function VerticalExample() {
  return (
    <Carousel orientation="vertical" className="w-full max-w-xs">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.title}>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-1 py-3 text-center">
                <span className="text-base font-medium">{slide.title}</span>
                <span className="text-sm text-muted-foreground">
                  {slide.description}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const Vertical: Story = { render: () => <VerticalExample /> }
