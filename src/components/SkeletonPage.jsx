import React from 'react'

export default function SkeletonPage({ title }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="inline-flex items-center rounded-full border border-border bg-white/70 px-4 py-2 text-sm text-light">
          {title}
        </div>
        <p className="mt-4 text-sm text-light">
          This page is a placeholder.
        </p>
      </div>
    </div>
  )
}

