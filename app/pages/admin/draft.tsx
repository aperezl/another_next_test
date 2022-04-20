import Header from '../../components/Header'

const Draft = () => {
  return (
    <div>
      <Header />
      <table className='table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Title</th>
            <th className='px-4 py-2'>published</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Draft
