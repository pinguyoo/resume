import info from "@/info.json";

const PersonalInfo = ({ className: classNameProp = "" }) => {
  const className = ["flex flex-col items-center", classNameProp].join(" ");
  const { name, email, phone, linkedin } = info.personalInfo;
  const { hostname, pathname } = new URL(linkedin);
  const linkedinDisplayName = `${hostname}${pathname}`
    .replace("www.", "")
    .replace(/\/$/, "");

  return (
    <div className={className}>
      <h1 className="text-4xl mb-2 font-bold">{name}</h1>
      <div className="divider-after">
        <a href={`mailto:${email}`}>{email}</a>
        <span>{phone}</span>
        <a className="underline" href={linkedin}>
          {linkedinDisplayName}
        </a>
      </div>
    </div>
  );
};

export default PersonalInfo;
