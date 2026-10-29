import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const meta = {
  title: "UI/Questionnaire",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function DefaultExample() {
  return (
    <Questionnaire className="w-full max-w-md" defaultItem="team-size">
      <QuestionnaireProgress />
      <QuestionnaireItem name="company">
        <QuestionnaireTitle>What's your company name?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Acme Inc." />
      </QuestionnaireItem>
      <QuestionnaireItem name="team-size" required>
        <QuestionnaireTitle>How big is your team?</QuestionnaireTitle>
        <QuestionnaireDescription>
          This helps us recommend the right plan for you.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="solo">
            Just me
            <QuestionnaireChoiceDescription>
              1 person
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="small">
            Small team
            <QuestionnaireChoiceDescription>
              2 to 10 people
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="medium">
            Growing company
            <QuestionnaireChoiceDescription>
              11 to 50 people
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="large">
            Large organization
            <QuestionnaireChoiceDescription>
              50+ people
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="role">
        <QuestionnaireTitle>What's your role?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Engineering manager" />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
      </QuestionnaireActions>
    </Questionnaire>
  )
}

function LastStepExample() {
  return (
    <Questionnaire className="w-full max-w-md" defaultItem="email">
      <QuestionnaireProgress />
      <QuestionnaireItem name="team-size">
        <QuestionnaireTitle>How big is your team?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="solo">Just me</QuestionnaireChoice>
          <QuestionnaireChoice value="small">
            2 to 10 people
          </QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="email" required>
        <QuestionnaireTitle>What's your work email?</QuestionnaireTitle>
        <QuestionnaireDescription>
          We'll send your account setup link here.
        </QuestionnaireDescription>
        <QuestionnaireInput type="email" placeholder="you@company.com" />
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireSubmit />
      </QuestionnaireActions>
    </Questionnaire>
  )
}

function InvalidChoiceExample() {
  return (
    <Questionnaire className="w-full max-w-md" defaultItem="plan">
      <QuestionnaireProgress />
      <QuestionnaireItem name="company">
        <QuestionnaireTitle>What's your company name?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Acme Inc." />
      </QuestionnaireItem>
      <QuestionnaireItem name="plan" required invalid>
        <QuestionnaireTitle>
          Which plan do you want to start with?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          You can always change this later from billing settings.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="starter">Starter</QuestionnaireChoice>
          <QuestionnaireChoice value="pro">Pro</QuestionnaireChoice>
          <QuestionnaireChoice value="enterprise">
            Enterprise
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="role">
        <QuestionnaireTitle>What's your role?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Engineering manager" />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
      </QuestionnaireActions>
    </Questionnaire>
  )
}

export const Default: Story = { render: () => <DefaultExample /> }
export const LastStep: Story = { render: () => <LastStepExample /> }
export const InvalidChoice: Story = { render: () => <InvalidChoiceExample /> }
