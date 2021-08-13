import { Modal, Space, Button, Input } from 'antd'

interface Props {
  cancel: () => void
  visible: boolean
}

const InjectionReason = ({ cancel, visible }: Props) => {
  return (
    <Modal centered width={400} closable={false} visible={visible} footer={null} onCancel={cancel}>
      <div className="p-2">
        <p className="text-lg text-center font-bold mb-8">Cancel this request?</p>
        <label>Reason</label>
        <Input.TextArea rows={4} placeholder="Please enter your reason" />
        <Space className="flex justify-center items-center pt-8">
          <Button type="text" className="btn" onClick={cancel}>
            Cancel
          </Button>
          <Button className="btn primary">Submit</Button>
        </Space>
      </div>
    </Modal>
  )
}

export default InjectionReason
