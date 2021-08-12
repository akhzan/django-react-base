import { DownOutlined } from '@ant-design/icons'
import { Avatar, List, Popover, Space } from 'antd'
import { Completed, InfoIcon } from 'assets/images'

const data = [
  { key: 'W', name: 'Waiting' },
  { key: 'A', name: 'Approved' },
  { key: '', name: 'See All' },
]

const popoverContent = (
  <div className="-mx-3">
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <div className="w-full px-4 flex justify-between items-center">
            <Space>
              {item.key ? <Avatar size={40}>{item.key}</Avatar> : <div className="w-10 h-10" />}
              <p className="mr-6">{item.name}</p>
            </Space>
            <div className="w-6 h-auto">
              <img src={Completed} alt="" />
            </div>
          </div>
        </List.Item>
      )}
    />
  </div>
)

export const columns = [
  {
    title: 'Project Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: (
      <Space>
        <p>Total Rows</p>
        <Popover content="From File">
          <img src={InfoIcon} alt="" />
        </Popover>
      </Space>
    ),
    dataIndex: 'rows',
    key: 'noRows',
  },
  {
    title: (
      <Space>
        <p>Total Amount</p>
        <Popover content="From File">
          <img src={InfoIcon} alt="" />
        </Popover>
      </Space>
    ),
    dataIndex: 'totalAmount',
    key: 'totalAmount',
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Disbursement Date',
    dataIndex: 'disbursementDate',
    key: 'disbursementDate',
  },
  {
    title: 'Created by',
    dataIndex: 'createdBy',
    key: 'createdBy',
  },
  {
    title: (
      <Popover placement="bottomRight" trigger="click" content={popoverContent}>
        <Space className="cursor-pointer">
          <p>Status</p>
          <DownOutlined />
        </Space>
      </Popover>
    ),
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => <Avatar size={40}>{text}</Avatar>,
  },
]
