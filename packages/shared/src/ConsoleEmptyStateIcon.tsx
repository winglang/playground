import { forwardRef } from "react";

type ConsoleEmptyStateIconProps = React.PropsWithoutRef<
  React.SVGProps<SVGSVGElement>
> & {
  title?: string;
  titleId?: string;
} & React.RefAttributes<SVGSVGElement>;

export const ConsoleEmptyStateIcon = forwardRef<SVGSVGElement, ConsoleEmptyStateIconProps>(
  ({ title, titleId, ...props }, svgRef) => {
    return (
      <>
        <svg
          viewBox="0 0 482 200"
          fill="CurrentColor"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          aria-labelledby={titleId}
          {...props}
        >
          {title && <title id={titleId}>{title}</title>}
          <g fill-opacity=".5" fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd">
            <path d="M0 0h90v90H0V0Zm20 20h50v50H20V20Zm90-20h262v90H110V0Zm20 20h222v50H130V20Zm-20 90h90v90h-90v-90Zm20 20h50v50h-50v-50Zm90-20h262v90H220v-90Zm20 20h222v50H240v-50Z"/>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h482v200H0z"/>
            </clipPath>
          </defs>
        </svg>
      </>
    );
  },
);
