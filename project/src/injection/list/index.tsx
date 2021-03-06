import { Completed } from 'assets/images'
import { URL } from 'config/constants'
import { useHistory } from 'react-router-dom'
import { Button, Icon, Input, Label, List, Popup, Table } from 'semantic-ui-react'

const InjectionList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const history = useHistory()
  const gotoNewInjection = () => {
    history.push(URL.NEW_INJECTION)
  }
  const popupContent = (
    <div>
      <List divided>
        <List.Item className="p-4 flex items-center">
          <Label circular>W</Label>
          <p className="ml-4 mr-8">Waiting</p>
          <div className="w-6"></div>
        </List.Item>
        <List.Item className="p-4 flex items-center">
          <Label circular>A</Label>
          <p className="ml-4 mr-8">Approved</p>
          <div className="w-6"></div>
        </List.Item>
        <List.Item className="p-4 flex items-center">
          <Label circular>A</Label>
          <p className="ml-4 mr-8">Approved</p>
          <div className="w-6"></div>
        </List.Item>
        <List.Item className="p-4 flex items-center">
          <Label circular>A</Label>
          <p className="ml-4 mr-8">Approved</p>
          <div className="w-6"></div>
        </List.Item>
        <List.Item className="p-4 flex items-center">
          <Label circular>A</Label>
          <p className="ml-4 mr-8">Approved</p>
          <div className="w-6">
            <img src={Completed} alt="" />
          </div>
        </List.Item>
        <List.Item className="p-4 flex items-center">
          <Label circular>A</Label>
          <p className="ml-4 mr-8">Approved</p>
          <div className="w-6"></div>
        </List.Item>
        <List.Item className="p-4 flex items-center">
          <Label circular className="bg-transparent" />
          <p className="ml-4 mr-8">See All</p>
        </List.Item>
      </List>
    </div>
  )
  const trigger = (
    <div className="flex items-center cursor-pointer">
      <div className="mr-2">Status</div>
      <Icon name="chevron down" />
    </div>
  )
  return (
    <div className="py-8 px-28">
      <p className="mb-8 font-bold text-lg text-center">List of Point Injection File</p>
      <div className="flex justify-between mb-4">
        <Button className="btn primary" onClick={gotoNewInjection}>
          Create Point Injection
        </Button>
        <Input style={{ minWidth: 328 }} placeholder="Search" icon="search" iconPosition="left" />
      </div>
      <Table padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Project Name</Table.HeaderCell>
            <Table.HeaderCell>Total Data</Table.HeaderCell>
            <Table.HeaderCell>Total Amount</Table.HeaderCell>
            <Table.HeaderCell>Created At</Table.HeaderCell>
            <Table.HeaderCell>Disbursement Date</Table.HeaderCell>
            <Table.HeaderCell>Submitted By</Table.HeaderCell>
            <Table.HeaderCell>
              <Popup
                className="p-0 popup-no-arrow"
                content={popupContent}
                on="click"
                position="bottom right"
                trigger={trigger}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((dt) => (
            <Table.Row key={dt} className="hover:bg-gray-100 cursor-pointer">
              <Table.Cell>
                <p className="font-bold mb-1">Tokopedia</p>
                <p className="text-xs">
                  <span className="text-gray-400 mr-2">Created by</span>Derto Arojaysi
                </p>
              </Table.Cell>
              <Table.Cell>10.000</Table.Cell>
              <Table.Cell>20.000</Table.Cell>
              <Table.Cell>15/08/2021 - 09:00</Table.Cell>
              <Table.Cell>15/08/2021 - 09:00</Table.Cell>
              <Table.Cell>Andilaw Gorden</Table.Cell>
              <Table.Cell>
                <Label circular>A</Label>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        {!data.length && (
          <Table.Footer>
            <Table.HeaderCell colSpan="7">
              <div className="flex justify-center">Test</div>
            </Table.HeaderCell>
          </Table.Footer>
        )}
      </Table>
      <div className="flex justify-center">
        <div className="my-8 inline-grid gap-4 grid-cols-5">
          <Button className="btn-circular primary">1</Button>
          <Button className="btn-circular secondary">2</Button>
          <Button className="btn-circular secondary">3</Button>
          <Button className="btn-circular secondary">4</Button>
          <Button className="btn-circular secondary" icon="chevron right" />
        </div>
      </div>
    </div>
  )
}

export default InjectionList
