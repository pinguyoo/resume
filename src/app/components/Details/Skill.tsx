import Section from './Section'

type Props = {
  info: {
    title: string;
    content: string[]
  }
}

const Skill = ({ info }: Props) => {
  const { title, content } = info

  return <Section title={title}>
    <span className="text-xs sm:text-sm">{content.join(', ')}</span>
  </Section>
}

export default Skill
