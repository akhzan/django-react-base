import { Table } from 'antd'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const NewInjectionSummary = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <label>Project Name</label>
          <p className="mb-4">Lazada Indonesia</p>
          <label>Created By</label>
          <p className="mb-4">mkt.user123</p>
          <label>Injection Type</label>
          <p className="mb-4">Fixed point amount</p>
        </div>
        <div className="w-1/2">
          <label>Disbursement Date</label>
          <p className="mb-4">01/9/2021 - Morning (09.00 - 12.00)</p>
          <label>Created At</label>
          <p className="mb-4">01/8/2021 - 14.00</p>
          <label>Reporting Result Email</label>
          <p className="mb-4">dertoarojaysi@ovo.id, bajindulark@ovo.id, mkt@ovo.id</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <label>Total Data</label>
          <p className="mb-4">500</p>
        </div>
        <div className="w-1/2">
          <label>Total Points</label>
          <p className="mb-4">5.000.000</p>
        </div>
      </div>
      <div className="my-8" style={{ borderBottom: '1px dashed rgba(0, 0, 0, 0.2)' }} />
      <div>
        <label>Upload File</label>
        <p className="mt-4 mb-2 font-bold">Point injection lazada#1.csv</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    </div>
  )
}

export default NewInjectionSummary
