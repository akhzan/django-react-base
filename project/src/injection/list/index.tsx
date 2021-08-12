import { Completed } from 'assets/images'
import { URL } from 'config/constants'
import { useHistory } from 'react-router-dom'
import { Button, Input, Pagination, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { columns } from './columns'

const InjectionList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const history = useHistory()
  const gotoNewInjection = () => {
    history.push(URL.NEW_INJECTION)
  }
  const datasource = data.map((dt) => ({
    key: dt,
    name: 'Lazada Indonesia',
    rows: 1000,
    totalAmount: '10.000.000',
    createdAt: '15/08/2021 - 09:00',
    disbursementDate: '15/08/2021 - 09:00',
    createdBy: 'Andilaw Gorden',
    status: 'A',
  }))

  return (
    <div className="py-8 px-28">
      <p className="mb-8 font-bold text-lg text-center">List of Point Injection File</p>
      <div className="flex justify-between mb-4">
        <Input style={{ width: 328 }} prefix={<SearchOutlined />} placeholder="Search" />
        <Button type="primary" className="btn" onClick={gotoNewInjection}>
          Create Point Injection
        </Button>
      </div>
      <Table dataSource={datasource} columns={columns} pagination={false} />
      <div className="my-8 flex justify-center">
        <Pagination defaultCurrent={1} total={990} showSizeChanger={false} />
      </div>
    </div>
  )
}

export default InjectionList
