<<<<<<< HEAD
import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:p-20 xl:p-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-red-50'>
            <td className='hidden md:block py-6 px-1'>234567</td>
            <td className='py-6 px-1'>23.23.24</td>
            <td className='py-6 px-1'>$89.90</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), veggie Pi (2), Coca IL (2)</td>
            <td className='py-6 px-1'>On the way (approx. 20min)...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>234567</td>
            <td className='py-6 px-1'>23.23.24</td>
            <td className='py-6 px-1'>$89.90</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), veggie Pi (2), Coca IL (2)</td>
            <td className='py-6 px-1'>On the way (approx. 20min)...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>234567</td>
            <td className='py-6 px-1'>23.23.24</td>
            <td className='py-6 px-1'>$89.90</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), veggie Pi (2), Coca IL (2)</td>
            <td className='py-6 px-1'>On the way (approx. 20min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

=======
import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:p-20 xl:p-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-red-50'>
            <td className='hidden md:block py-6 px-1'>234567</td>
            <td className='py-6 px-1'>23.23.24</td>
            <td className='py-6 px-1'>$89.90</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), veggie Pi (2), Coca IL (2)</td>
            <td className='py-6 px-1'>On the way (approx. 20min)...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>234567</td>
            <td className='py-6 px-1'>23.23.24</td>
            <td className='py-6 px-1'>$89.90</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), veggie Pi (2), Coca IL (2)</td>
            <td className='py-6 px-1'>On the way (approx. 20min)...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>234567</td>
            <td className='py-6 px-1'>23.23.24</td>
            <td className='py-6 px-1'>$89.90</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), veggie Pi (2), Coca IL (2)</td>
            <td className='py-6 px-1'>On the way (approx. 20min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

>>>>>>> f81e6151e4270a74601deff909f04fc13b74b58b
export default OrdersPage;