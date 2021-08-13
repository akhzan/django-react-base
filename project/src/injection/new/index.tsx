import { Button, Form, Space } from 'antd'
import { useState } from 'react'
import UploadNewInjection from './upload'
import NewInjectionSummary from './summary'
import NewInjectionChecklist from './checklist'

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
                  className="btn primary"
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
      <NewInjectionChecklist cancel={() => setIsShowChecklist(false)} visible={isShowChecklist} />
    </div>
  )
}

export default NewInjection
