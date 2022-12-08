import { useState } from "react";
import Item from "../models/Item";
import { MyBadge } from "../models/Item";
import Table from 'react-bootstrap/Table'
import Add from "./Add";
import Edit from "./Edit"

const TodoList = () => {
    const [list, setList] = useState<Array<Item>>([
        new Item(1, MyBadge.Work, "Cái gì đó", false, undefined, "Biết rồi"),
        new Item(2, MyBadge.Family, "Cái gì dị", false),
        new Item(3, MyBadge.Personal, "Cái gì dọ", false),
        new Item(4, MyBadge.Others, "Cái gì đấy", true)
    ])
    const [selectedItem, setSelect] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)

    const EventHandle = () => {
        list.map((item) => {
            if (item._edit) {
                setSelect(list.indexOf(item))
                onClickEdit()
            }
            if (item._delete) {
                setSelect(list.indexOf(item))
                onClickDel()
            }
        })
    }

    const updateList = (_list: Array<Item>): void => {
        setList(_list)
    }

    const onClickEdit = () => {
        setShow(show ? false : true)
    }

    const onClickDel = () => {
        let array: Array<Item> = [...list]
        array.splice(selectedItem, 1)
        array.map((item) => {
            item.Index = array.indexOf(item) + 1
        })
        setList(array)
    }

    return (
        <div>
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th className="text-white bg-info">STT</th>
                        <th className="text-white bg-info" style={{ minWidth: '150px' }}>Nội dung</th>
                        <th className="text-white bg-info">Nhãn</th>
                        <th className="text-white bg-info" style={{ minWidth: '155px' }}>Ngày tạo</th>
                        <th className="text-white bg-info" style={{ minWidth: '155px' }}>Ngày hoàn thành</th>
                        <th className="text-white bg-info" style={{ minWidth: '110px' }}>Hoàn thành</th>
                        <th className="text-white bg-info" style={{ minWidth: '150px' }}>Ghi chú</th>
                        <th className="text-white bg-info"></th>
                    </tr>
                </thead>
                <tbody onClick={EventHandle}>
                    {list.map((item) => item.render())}
                    <Add list={list} setList={updateList} />
                </tbody>
            </Table>
            {show ? <Edit setShow={onClickEdit} show={show} list={list} setList={updateList} index={selectedItem} /> : <></>}
        </div>
    );
}

export default TodoList;