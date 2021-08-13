import { Button, Form, Input, Radio, Space } from 'antd'
import { BulletIcon } from 'assets/images'

const UploadNewInjection = () => {
  return (
    <>
      <Form.Item
        label="Project Name"
        name="projectName"
        rules={[{ required: true, message: 'Please select input project name.' }]}
      >
        <Input placeholder="Input Project Name" />
      </Form.Item>

      <Form.Item
        label="Disbursement Date"
        name="projectName"
        rules={[{ required: true, message: 'Please select disbursement date.' }]}
      >
        <Radio.Group className="w-full">
          <Radio className="w-1/3" value="a">
            Immediate
          </Radio>
          <Radio value="b">Custom Date</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Injection Type" name="projectName" rules={[{ required: true, message: 'Please select type.' }]}>
        <Radio.Group className="w-full">
          <Radio className="w-1/3" value="a">
            Fixed point amount
          </Radio>
          <Radio value="b">Based on transaction</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Reporting Result Email"
        name="projectName"
        rules={[{ required: true, message: 'Please input your reporting result email.' }]}
      >
        <Input placeholder="Input Email" />
        <p className="text-gray-400 text-xs pt-2">Separated by comma (,)</p>
      </Form.Item>

      <Form.Item label="Upload File" name="projectName" rules={[{ required: true, message: 'Please upload files.' }]}>
        <Button className="btn w-full secondary">Upload</Button>
      </Form.Item>

      <div className="flex flex-col">
        <Space>
          <img src={BulletIcon} />
          <a href="">Download example file here</a>
        </Space>
        <Space>
          <img src={BulletIcon} />
          File must have no duplicate in merchant invoice
        </Space>
        <Space>
          <img src={BulletIcon} />
          Max file size 20 MB
        </Space>
      </div>
    </>
  )
}

export default UploadNewInjection
