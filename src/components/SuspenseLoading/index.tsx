'use client'
import React from "react";
import { Skeleton } from "@nextui-org/react";


const SuspenseLoading = () => {

  const CardClass = "px-4 border-divider border-b transition-transform-background outline-none text-foreground bg-content1 overflow-hidden"

  return [0,1,2,3].map((v) => (
    <article key={v} className={CardClass}>
      <div className="flex items-center py-2">
        <Skeleton className="w-8 h-8 rounded-lg" />
        <Skeleton className="w-3/5 h-4 rounded-lg ml-2" />
      </div>
      <div className="space-y-3 col-span-4">
        <Skeleton className="rounded-lg h-6 w-3/5">
          <div className="h-6 w-3/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg h-3 w-5/5">
          <div className="h-6 w-3/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg h-3 w-4/5">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="rounded-lg h-3 w-2/5">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
      <div className="flex justify-between items-center py-2">
        <Skeleton className="h-2.5 w-10 rounded" />

        <div className="flex items-center text-default-800 text-sm space-x-2">
          <Skeleton className="h-4 w-8 rounded" />
          <Skeleton className="h-4 w-8 rounded" />
          <Skeleton className="h-4 w-8 rounded" />
        </div>
      </div>
    </article>
  ))
}

export default SuspenseLoading
