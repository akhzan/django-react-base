import { Avatar } from 'antd'

export const columns = [
  {
    title: 'Project Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'No of Rows',
    dataIndex: 'rows',
    key: 'noRows',
  },
  {
    title: 'Total Amount',
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
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => <Avatar size={40}>{text}</Avatar>,
  },
]
