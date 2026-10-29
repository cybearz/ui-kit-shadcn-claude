import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTitle,
  CodeBlockActions,
  CodeBlockCopyButton,
  CodeBlockContent,
  CodeBlockLine,
  CodeBlockFooter,
} from "@/components/ui/code-block"
import { TerminalIcon } from "lucide-react"

const meta = {
  title: "UI/Code Block",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const sample = `function greet(name: string) {
  return \`Hello, \${name}!\`
}

console.log(greet("world"))
`

function DefaultExample() {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockTitle>
          <TerminalIcon />
          greet.ts
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={sample} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent lineNumbers>{sample}</CodeBlockContent>
    </CodeBlock>
  )
}

function WithDiffLinesExample() {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockTitle>server.ts</CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value="app.listen(3000)" />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeBlockLine variant="removed">app.listen(8080)</CodeBlockLine>
        <CodeBlockLine variant="added">app.listen(3000)</CodeBlockLine>
        <CodeBlockLine>console.log("Server started")</CodeBlockLine>
      </CodeBlockContent>
      <CodeBlockFooter>3 lines, 2 changed</CodeBlockFooter>
    </CodeBlock>
  )
}

function DestructiveVariantExample() {
  return (
    <CodeBlock variant="destructive" size="sm">
      <CodeBlockHeader>
        <CodeBlockTitle>build error</CodeBlockTitle>
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeBlockLine>Error: Cannot find module './config'</CodeBlockLine>
        <CodeBlockLine>
          at Object.&lt;anonymous&gt; (index.ts:3:18)
        </CodeBlockLine>
      </CodeBlockContent>
    </CodeBlock>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const WithDiffLines: Story = { render: () => <WithDiffLinesExample /> }
export const DestructiveVariant: Story = {
  render: () => <DestructiveVariantExample />,
}
