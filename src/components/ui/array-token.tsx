import { Children, Fragment } from 'react';

export const ArrayToken = ({ children }: React.PropsWithChildren) => {
  const arrayItems = Children.toArray(children);

  return (
    <span className="text-foreground/90">
      [
      {arrayItems.map((child, idx, arr) => {
        const showComma = arr.length > 1 && idx !== arr.length - 1;

        const comma = showComma ? ', ' : '';

        return (
          <Fragment key={idx}>
            {child}
            {comma}
          </Fragment>
        );
      })}
      ]
    </span>
  );
};
