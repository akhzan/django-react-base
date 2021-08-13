import { Modal, Checkbox, Space, Button } from 'antd'

interface Props {
  cancel: () => void
  visible: boolean
  submit?: () => void
}

const options = [
  { label: 'Merchants have been registered in Pillar', value: '1' },
  { label: `Merchant's point balance is sufficient`, value: '2' },
  { label: `Merchant's point limit is correct`, value: '3' },
  { label: 'Points limit per OVO ID is correct', value: '4' },
  { label: 'Campaign is active on Pillar', value: '5' },
]

const NewInjectionChecklist = ({ cancel, submit = () => {}, visible }: Props) => {
  return (
    <Modal centered width={400} closable={false} visible={visible} footer={null} onCancel={cancel}>
      <div className="p-2">
        <p className="text-lg text-center font-bold mb-8">Request Checklist</p>
        <p className="mb-4">I have (really carefully) checked that:</p>
        <Checkbox.Group options={options} />
        <Space className="flex justify-center items-center pt-8">
          <Button type="text" className="btn" onClick={cancel}>
            Cancel
          </Button>
          <Button className="btn primary" onClick={submit}>
            Submit
          </Button>
        </Space>
      </div>
    </Modal>
  )
}

export default NewInjectionChecklist
