interface ContentZone {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ContentZone = ({ children, className, style }: ContentZone) => {
  return (
    <div className={"mx-auto w-[91%]" + ` ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ContentZone;
