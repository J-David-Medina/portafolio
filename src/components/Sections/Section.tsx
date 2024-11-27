import React, { ReactNode } from "react";

interface sectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<sectionProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={` animated-section  py-10 ${className}`}>
      {children}
    </section>
  );
};
