import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-violet-950 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: </p>
            <p className='text-lg'>Acesse minhas redes sociais</p>
            <div className='flex gap-8 m-5'>
              <LinkedinLogo size={40} weight='bold' />
              <InstagramLogo size={40} weight='bold' />
              <FacebookLogo size={40} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer