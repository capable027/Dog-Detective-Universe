import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function RevealSection({ children }: Props) {
  return (
    <div className="section" data-observe>
      {children}
    </div>
  );
}
