import React from 'react'


type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="flex text-3xl font-medium capitalize mb-8 mt-8 justify-center items-center">
        {children}
    </h2>
  )
}
