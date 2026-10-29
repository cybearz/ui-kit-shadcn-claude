import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "UI/Field",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="field-name">Name</FieldLabel>
        <Input id="field-name" defaultValue="Pedro Duarte" />
        <FieldDescription>
          This is the name that will be displayed on your profile.
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="field-bio">Bio</FieldLabel>
        <Textarea
          id="field-bio"
          placeholder="Tell us a little about yourself"
        />
      </Field>
    </FieldGroup>
  )
}

function ErrorStateExample() {
  return (
    <Field data-invalid="true">
      <FieldLabel htmlFor="field-email">Email</FieldLabel>
      <Input
        id="field-email"
        type="email"
        defaultValue="not-an-email"
        aria-invalid="true"
      />
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  )
}

function FieldSetWithLegendExample() {
  return (
    <FieldSet>
      <FieldLegend>Notifications</FieldLegend>
      <FieldDescription>
        Choose what you want to be notified about.
      </FieldDescription>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="field-marketing">
            <Checkbox id="field-marketing" defaultChecked />
            <FieldContent>
              <FieldTitle>Marketing emails</FieldTitle>
              <FieldDescription>
                Receive emails about new products and features.
              </FieldDescription>
            </FieldContent>
          </FieldLabel>
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldLabel htmlFor="field-security">
            <Checkbox id="field-security" />
            <FieldContent>
              <FieldTitle>Security alerts</FieldTitle>
              <FieldDescription>
                Get notified about unusual account activity.
              </FieldDescription>
            </FieldContent>
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const ErrorState: Story = { render: () => <ErrorStateExample /> }
export const FieldSetWithLegend: Story = {
  render: () => <FieldSetWithLegendExample />,
}
