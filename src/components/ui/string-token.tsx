export const StringToken = ({ children }: React.PropsWithChildren) => (
  <span className="text-visual-mode ">
    {`"`}
    {children}
    {`"`}
  </span>
);
