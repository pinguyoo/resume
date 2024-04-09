import info from "@/info.json";

const PersonalInfo = ({ className: classNameProp = "" }) => {
  const className = ["flex flex-col items-center", classNameProp].join(" ");
  const { name, email, phone, linkedin } = info.personalInfo;
  const { hostname, pathname } = new URL(linkedin);
  const linkedinDisplayName = `${hostname}${pathname}`
    .replace("www.", "")
    .replace(/\/$/, "");

  return (
    <header className={className}>
      <h1 className="text-4xl mb-2 font-bold text-xl sm:text-4xl">{name}</h1>
      <div className="divider-after text-xs sm:text-lg">
        <a href={`mailto:${email}`}>{email}</a>
        <span>{phone}</span>
        <a className="underline" href={linkedin}>
          {linkedinDisplayName}
        </a>
      </div>
    </header>
  );
};

export default PersonalInfo;
