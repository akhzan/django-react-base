import { Button, Checkbox, Form, Modal, Space } from 'antd'
import { useState } from 'react'
import UploadNewInjection from './upload'
import NewInjectionSummary from './summary'

const options = [
  { label: 'Merchants have been registered in Pillar', value: '1' },
  { label: `Merchant's point balance is sufficient`, value: '2' },
  { label: `Merchant's point limit is correct`, value: '3' },
  { label: 'Points limit per OVO ID is correct', value: '4' },
  { label: 'Campaign is active on Pillar', value: '5' },
]

const NewInjection = () => {
  const [step, setStep] = useState('upload')
  const [isShowChecklist, setIsShowChecklist] = useState(false)
  const isSummary = step === 'summary'
  const title = isSummary ? 'Summary Point Injection' : 'Upload Point Injection File'
  const width = isSummary ? 'w-3/4' : 'w-1/2'
  return (
    <div className="px-28 py-8 flex justify-center">
      <div className={width}>
        <p className="mb-8 font-bold text-lg">{title}</p>
        <Form name="basic" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} onFinish={() => {}}>
          {step === 'summary' ? <NewInjectionSummary /> : <UploadNewInjection />}
          <div className="flex justify-center my-8">
            <Form.Item>
              <Space>
                {isSummary && (
                  <Button className="btn secondary mr-2" onClick={() => setStep('upload')}>
                    Back
                  </Button>
                )}
                <Button
                  className="btn"
                  type="primary"
                  htmlType="submit"
                  onClick={() => (isSummary ? setIsShowChecklist(true) : setStep('summary'))}
                >
                  {isSummary ? 'Submit for Approval' : 'Next'}
                </Button>
              </Space>
            </Form.Item>
          </div>
        </Form>
      </div>
      <Modal
        centered
        width={400}
        closable={false}
        visible={isShowChecklist}
        footer={null}
        onCancel={() => setIsShowChecklist(false)}
      >
        <div className="p-2">
          <p className="text-lg text-center font-bold mb-8">Request Checklist</p>
          <p className="mb-4">I have (really carefully) checked that:</p>
          <Checkbox.Group options={options} />
          <Space className="flex justify-center items-center pt-8">
            <Button type="text" className="btn">
              Cancel
            </Button>
            <Button type="primary" className="btn">
              Submit
            </Button>
          </Space>
        </div>
      </Modal>
    </div>
  )
}

export default NewInjection
