import { Button, Form, Radio } from 'semantic-ui-react'
import { Button as AntdButton } from 'antd'

const NewInjection = () => {
  return (
    <div className="px-28 py-8 flex justify-center">
      <div className="w-1/2">
        <p className="mb-8 font-bold text-lg">Upload Point Injection File</p>
        <Form>
          <Form.Field>
            <label>Project Name</label>
            <input placeholder="Input Project Name" />
          </Form.Field>
          <Form.Field>
            <label>Disbursement Date</label>
          </Form.Field>
          <div className="flex items-center">
            <Form.Field className="w-1/2">
              <Radio label="Immediate" />
            </Form.Field>
            <Form.Field className="w-1/2">
              <Radio label="Custom date" />
            </Form.Field>
          </div>
          <Form.Field>
            <label>Injection Type</label>
          </Form.Field>
          <div className="flex items-center">
            <Form.Field className="w-1/2">
              <Radio label="Fixed point amount" />
            </Form.Field>
            <Form.Field className="w-1/2">
              <Radio label="Based on transaction" />
            </Form.Field>
          </div>
          <Form.Field>
            <label>Reporting Result Email</label>
            <input placeholder="Input Email" />
            <label className="mt-2">Separated by comma (,)</label>
          </Form.Field>
          <Form.Field>
            <label>Upload File</label>
            <Button fluid className="btn">
              Upload
            </Button>
          </Form.Field>
          <div className="grid gap-2 mt-2">
            <div>
              <Radio checked disabled />
              <a href="/" style={{ paddingLeft: 13 }}>
                Download example file here
              </a>
            </div>
            <Radio checked disabled label="File must have no duplicate in merchant invoice" />
            <Radio checked disabled label="Max file size 20 MB" />
          </div>
          <div className="mt-8 mb-6 flex justify-center">
            <Button className="btn primary" type="submit">
              Next
            </Button>
          </div>
          <div>
            <AntdButton className="btn">Test</AntdButton>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default NewInjection
