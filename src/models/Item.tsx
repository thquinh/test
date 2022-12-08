import Badge from 'react-bootstrap/Badge'
import { FcOk} from 'react-icons/fc'
import { TiDelete } from 'react-icons/ti'
import { RiEdit2Fill } from 'react-icons/ri'
import '../App.css'

export enum MyBadge {
    Work = "Công việc",
    Personal = "Cá nhân",
    Family = "Gia đình",
    Others = "Khác"
}

class Item {
    private index: number
    private badge: MyBadge
    private detail: string
    private flag: boolean
    private dateCreate: Date
    private dateFinish: Date
    private note: string
    private edit: boolean
    private delete: boolean

    constructor(_index: number, _badge: MyBadge, _detail: string, _flag: boolean, _dateCreate?: Date, _note?: string) {
        this.index = _index
        this.badge = _badge
        this.detail = _detail
        this.flag = _flag
        this.edit = false
        this.delete = false
        this.dateFinish = new Date()
        this.Edit = this.Edit.bind(this)
        this.Delete = this.Delete.bind(this)
        if(_dateCreate === undefined) this.dateCreate = new Date()
        else {
            this.dateCreate = _dateCreate
        }
        if (_note === undefined) {
            this.note = ""
        } else this.note = _note
    }

    public get Badge(): MyBadge {
        return this.badge
    }
    public set Badge(_badge: MyBadge) {
        this.badge = _badge
    }
    public get Detail(): string {
        return this.detail
    }
    public set Detail(_detail: string) {
        this.detail = _detail
    }
    public get Flag(): boolean {
        return this.flag
    }
    public set Flag(_flag: boolean) {
        this.flag = _flag
        if (this.flag) this.dateFinish = new Date()
    }

    public get Note(): string {
        return this.note
    }
    public set Note(_note: string) {
        this.note = _note
    }
    public get Index(): number {
        return this.index
    }
    public set Index(_index: number) {
        this.index = _index
    }
    public get DateCreate(): Date {
        return this.dateCreate
    }
    public get _edit(): boolean {
        return this.edit
    }
    public get _delete(): boolean {
        return this.delete
    }
    private Edit() {
        this.edit ? this.edit = false : this.edit = true
        console.log(this.edit)
    }
    private Delete() {
        this.delete ? this.delete = false : this.delete = true
        console.log(this.delete)
    }

    render() {
        let bge: string
        switch (this.badge) {
            case MyBadge.Work:
                bge = "danger"
                break
            case MyBadge.Personal:
                bge = "info"
                break
            case MyBadge.Family:
                bge = "success"
                break
            default:
                bge = "secondary"
        }
        return (
            <tr key={this.index}>
                <td className='mid'>{this.index}</td>
                <td>{this.detail}</td>
                <td><Badge pill bg={bge}>{this.badge}</Badge></td>
                <td className='mid'>{this.dateCreate.toLocaleTimeString()} {this.dateCreate.toLocaleDateString()}</td>
                <td className='mid'>{this.flag ? `${this.dateFinish.toLocaleTimeString()}  ${this.dateFinish.toLocaleDateString()}` : ""}</td>
                <td className='mid'>{this.flag ? <FcOk/> : ""}</td>
                <td>{this.note}</td>
                <td className='mid'><RiEdit2Fill onClick={this.Edit} className='text-primary icon' style={{marginRight: '10px'}}/><TiDelete onClick={this.Delete} className='icon' color='red'/></td>
            </tr>
        );

    }
}

export default Item;