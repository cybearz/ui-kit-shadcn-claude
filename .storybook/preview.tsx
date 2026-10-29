import type { Preview } from "@storybook/react-vite"

import "../src/index.css"
import { ThemeProvider } from "../src/components/theme-provider"

const preview: Preview = {
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
