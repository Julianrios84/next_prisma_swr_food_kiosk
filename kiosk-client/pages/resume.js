import Layout from '../layout/Layout'
import useKiosk from '../hooks/useKiosk'
import ProductResume from '../components/ProductResume'


export default function Resume() {

  const { order } = useKiosk()


  return (
    <Layout page='Resumen'>
      <h1 className='text-4xl font-black'>Resumen</h1>
      <p className='text-2xl my-10'>Revisa tu pedido</p>
      
      {order.length === 0 ? (
        <p className='text-center text-2xl'>No hay elementos en tu pedido</p>
      ): (
        order.map(product => (
          <ProductResume key={product.id} product={product}  />
        ))
      )}
    </Layout>
  )
}