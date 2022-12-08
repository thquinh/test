import React, { ChangeEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MyBadge } from '../models/Item'
import Item from "../models/Item";

interface IMyProps {
  list: Array<Item>,
  setList(_list: Array<Item>): void,
}

const Add = (props: IMyProps) => {
  const [newCont, setItem] = useState<string>("")
  const [newBadge, setBadge] = useState<MyBadge>(MyBadge.Work)
  const [newNote, setNote] = useState<string | undefined>(undefined)
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false)
    setItem("")
    setNote(undefined)
    setBadge(MyBadge.Work)
  }
  const handleShow = () => setShow(true);
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
  const handleclick = () => {
    if (newCont === "") {
      alert('Please enter your task')
    } else {
      let array = [...props.list];
      let newItem = new Item(props.list.length + 1, newBadge, newCont, false, undefined, newNote)
      array.push(newItem)
      props.setList(array)
      setShow(false)
      setItem("")
      setNote(undefined)
      setBadge(MyBadge.Work)
    }

  }

  return (
    <React.Fragment>
      <tr>
        <td className='mid'>
          <Button
            variant="primary"
            size="sm"
            onClick={handleShow}
            style={{ borderRadius: '18px', paddingLeft: "9px", paddingRight: "9px" }}>
            +
          </Button>
        </td>
        <td colSpan={6}><i>Việc hôm nay chớ để ngày mai!</i></td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nội dung: </Form.Label>
            <Form.Control onChange={onChangeContent} value={newCont} as="textarea" rows={3} required />
            <Form.Label style={{marginTop: '10px'}}>Nhãn: </Form.Label>
            <Form.Select onChange={onChangeBadge}>
              <option value={MyBadge.Work}>Công việc</option>
              <option value={MyBadge.Personal}>Cá nhân</option>
              <option value={MyBadge.Family}>Gia đình</option>
              <option value={MyBadge.Others}>Khác</option>
            </Form.Select>
            <Form.Label style={{marginTop: '10px'}}>Ghi chú: </Form.Label>
            <Form.Control onChange={onChangeNote} value={newNote} as="textarea" rows={3} required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleclick} variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}
export default Add;