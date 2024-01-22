import Section from './Section'

type Experience = {
  company: string;
  position: string;
  duration: string;
  descriptions: string[];
  nation: string;
}

type Props = {
  info: {
    title: string;
    content: Experience[];
  }
}

const WorkingExperience = ({ info }: Props) => {
  const { title, content } = info

  return <Section title={title}>
    {content.map(({ company, position, nation, duration, descriptions }) => 
      <div key={company} className="flex flex-col mb-2">
        <div className="flex flex-col mb-1">
          <div className="flex justify-between font-bold text-lg">
            <span>{company}</span>
            <span>{nation}</span>
          </div>
          <div className="flex justify-between">
            <span>{position}</span>
            <span>{duration}</span>
          </div>
        </div>
        <ul className="list-disc pl-4">
          {descriptions.map((description) => <li key={description}>{description}</li>)}
        </ul>
      </div>
    )}
  </Section>
}

export default WorkingExperience;
