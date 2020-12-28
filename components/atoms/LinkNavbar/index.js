import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/link'

export default function Link ({href, children}){
const router = useRouter()
const active = {
    transform: 'scaleX(1)'
  }

return <Link href={href}>{React.cloneElement(children,{className})}
<span className={`linkBorder ${style.linkBorder}`} style={active}></span>
</Link>

}