import Section from './Section'

type EducationInfo = {
  school: string;
  degree: string;
  duration: string;
  nation: string;
}

type Props = {
  info: {
    title: string;
    content: EducationInfo[]
  }
}

const Education = ({ info }: Props) => {
  const { title, content } = info

  return <Section title={title}>
    {content.map(({ school, degree, nation, duration }) => 
      <div key={degree} className="flex flex-col mb-2">
        <div className="flex flex-col mb-1">
          <div className="flex justify-between font-bold text-sm sm:text-base">
            <span>{school}</span>
            <span className="invisible sm:visible">{nation}</span>
          </div>
          <div className="flex flex-col sm:flex-row text-xs sm:text-sm justify-between">
            <span>{degree}</span>
            <span className="italic">{duration}</span>
          </div>
        </div>
      </div>
    )}
  </Section>
}

export default Education
