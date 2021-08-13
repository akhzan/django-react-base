import { Button, Space } from 'antd'
import InjectionSummary from 'injection/new/summary'
import { useState } from 'react'
import InjectionReason from './reason'
import InjectionChecklist from 'injection/new/checklist'

const InjectionDetail = () => {
  const [isShowCancel, setIsShowCancel] = useState(false)
  const [isShowCheckList, setIsShowCheckList] = useState(false)
  return (
    <div className="px-28 py-8 flex justify-center">
      <div className="w-3/4">
        <InjectionSummary />
        <div className="py-8 flex justify-center">
          <Button className="btn primary" onClick={() => setIsShowCancel(true)}>
            Cancel
          </Button>
        </div>
        <div className="py-8 flex justify-center">
          <Space>
            <Button className="btn secondary mr-4" onClick={() => setIsShowCancel(true)}>
              Reject
            </Button>
            <Button className="btn primary" onClick={() => setIsShowCheckList(true)}>
              Proceed
            </Button>
          </Space>
        </div>
        <div className="py-8 flex justify-center">
          <Space>
            <Button className="btn primary mr-4">Download Success File</Button>
            <Button className="btn primary">Download Failed File</Button>
          </Space>
        </div>
        <div className="py-8 flex justify-center">
          <Button className="btn primary">Clone</Button>
        </div>
      </div>
      <InjectionReason visible={isShowCancel} cancel={() => setIsShowCancel(false)} />
      <InjectionChecklist visible={isShowCheckList} cancel={() => setIsShowCheckList(false)} />
    </div>
  )
}

export default InjectionDetail
