export const CenteredAsterisk = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => <sub className={className}>{children}</sub>;
