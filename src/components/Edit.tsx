import React, { ChangeEvent, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { MyBadge } from '../models/Item'
import Item from "../models/Item";

interface IMyProps {
  list: Array<Item>,
  setList(_list: Array<Item>): void,
  index: number
  show: boolean
  setShow(): void
}

const Edit = (props: IMyProps) => {
  const [newCont, setItem] = useState<string>(props.list[props.index].Detail)
  const [newBadge, setBadge] = useState<MyBadge>(props.list[props.index].Badge)
  const [newNote, setNote] = useState<string | undefined>(props.list[props.index].Note)
  const [done, setDone] = useState<boolean>(props.list[props.index].Flag)
  const [show, setShow] = useState<boolean>(props.show)
  const handleClose = () => {
    setShow(false)
    props.setShow()
  }
  const onChangeContent = (event: ChangeEvent<HTMLInputElement>): void => {
    setItem(event.currentTarget.value)
  }
  const onChangeNote = (event: ChangeEvent<HTMLInputElement>): void => {
    setNote(event.currentTarget.value)
    if (newNote === "") setNote(undefined)
  }
  const onChangeBadge = (event: ChangeEvent<HTMLSelectElement>) => {
    setBadge(event.target.value as MyBadge)
  }
  const onChangeDone = (event: ChangeEvent<HTMLInputElement>) => {
    setDone(event.target.checked)
  }
  const handleclick = () => {
    if (newCont === "") {
      alert('Please enter your task')
    } else {
      let array = [...props.list];
      let newItem = new Item(props.index + 1, newBadge, newCont, done, array[props.index].DateCreate, newNote)
      array[props.index] = newItem
      props.setList(array)
      props.setShow()
      setShow(false)
    }

  }

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nội dung: </Form.Label>
            <Form.Control onChange={onChangeContent} value={newCont} as="textarea" rows={3} required />
            <Form.Label style={{marginTop: '10px'}}>Nhãn: </Form.Label>
            <Form.Select onChange={onChangeBadge} value={newBadge}>
              <option value={MyBadge.Work}>Công việc</option>
              <option value={MyBadge.Personal}>Cá nhân</option>
              <option value={MyBadge.Family}>Gia đình</option>
              <option value={MyBadge.Others}>Khác</option>
            </Form.Select>
            <Form.Label style={{marginTop: '10px'}}>Ghi chú: </Form.Label>
            <Form.Control onChange={onChangeNote} value={newNote} as="textarea" rows={3} required />
            <Form.Check style={{marginTop: '10px'}} onChange={onChangeDone} type="checkbox" label='Hoàn thành' checked={done} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleclick} variant="primary" >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}
export default Edit;