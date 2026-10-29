import type { Meta, StoryObj } from "@storybook/react-vite"

import { DownloadIcon, FileTextIcon, ImageIcon, XIcon } from "lucide-react"

const meta = {
  title: "UI/Attachment",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"

function DefaultExample() {
  return (
    <Attachment className="max-w-72">
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent data-slot="attachment-content">
        <AttachmentTitle>Q3-financial-report.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Download">
          <DownloadIcon />
        </AttachmentAction>
        <AttachmentAction aria-label="Remove">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  )
}

function StatesExample() {
  return (
    <div className="flex flex-col gap-2">
      <Attachment state="uploading" className="max-w-72">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>design-assets.zip</AttachmentTitle>
          <AttachmentDescription>Uploading…</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error" className="max-w-72">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>budget-2024.xlsx</AttachmentTitle>
          <AttachmentDescription>
            Upload failed, try again
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="idle" className="max-w-72">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Drop a file here</AttachmentTitle>
          <AttachmentDescription>or click to browse</AttachmentDescription>
        </AttachmentContent>
        <AttachmentTrigger />
      </Attachment>
    </div>
  )
}

function GroupExample() {
  return (
    <AttachmentGroup>
      <Attachment orientation="vertical">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>cover-photo.png</AttachmentTitle>
          <AttachmentDescription>820 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment orientation="vertical">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>contract.pdf</AttachmentTitle>
          <AttachmentDescription>1.1 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </AttachmentGroup>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const States: Story = { render: () => <StatesExample /> }
export const Group: Story = { render: () => <GroupExample /> }
