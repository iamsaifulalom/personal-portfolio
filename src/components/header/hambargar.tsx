import React from 'react'

export default function Hambargar() {
    return (
        <div className="w-28 group flex gap-3 flex-col cursor-pointer items-end">
            <div className="w-full group-hover:w-2/3 transition-all duration-300 rounded-full bg-foreground h-1" />
            <div className="w-2/3 group-hover:w-full transition-all duration-300 rounded-full bg-foreground h-1" />
        </div>)
}
