import React, { memo } from 'react'

const EmptyCart = () => {
  return (
    <div className='w-full text-center font-bold text-primary text-3xl py-10'>Cart Is Empty</div>
  )
}

export default memo(EmptyCart);