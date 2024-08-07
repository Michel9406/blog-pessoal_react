import React from 'react'

function Grid() {
  return (
<div className='grid grid-cols-12'>

<div className='col-span-1 bg-purple-900 h-screen text-center'>
    
Produtos

    </div>

<div className='col-span-3 bg-purple-950 text-center'>
    
    Funcionalidades

</div>

<div className='col-span-3 bg-purple-700 text-center'>
    
    Planos e preços

</div>

<div className='col-span-5 bg-purple-950 text-center'>
    
    Fazer Login

</div>

</div>
  
  )
}

export default Grid