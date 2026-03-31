import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function SectionTitle({ children }: Props) {
  return (
    <h2 className="section-title">
      <span className="section-title-text">{children}</span>
    </h2>
  );
}
