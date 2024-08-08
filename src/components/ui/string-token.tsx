export const StringToken = ({ children }: React.PropsWithChildren) => (
  <span className="text-[#be95ff]">
    {`"`}
    {children}
    {`"`}
  </span>
);
