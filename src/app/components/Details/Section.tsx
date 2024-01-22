import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
}

const Section = ({ children, title }: Props) => {
  return (
    <section className="flex flex-col w-full mb-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <hr className="border-t-solid my-2"></hr>
      {children}
    </section>
  )
}

export default Section;
