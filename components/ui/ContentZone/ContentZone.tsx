interface ContentZone {
  children: React.ReactNode;
  className?: string;
}

const ContentZone = ({ children, className }: ContentZone) => {
  return <div className={"mx-auto w-[91%]" + ` ${className}`}>{children}</div>;
};

export default ContentZone;
