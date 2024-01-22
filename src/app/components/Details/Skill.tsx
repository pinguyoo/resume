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
    {content.join(', ')}
  </Section>
}

export default Skill
