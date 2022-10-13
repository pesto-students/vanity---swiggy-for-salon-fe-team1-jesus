

import React from 'react'

const Button = ({ str, clr, click }) => {
    return (
        <div onClick={click} className="cursor-pointer my-4 relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
            <span className={`absolute inset-0 rounded transition-transform bg-${clr ? clr : "pink"} translate-x-1 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0`}></span>

            <span className="relative block font-bold px-8 py-3 rounded bg-white border-2 border-current">
                {str}
            </span>
        </div>
    )
}

export default Button