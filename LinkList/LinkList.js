class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

//构建一个列表类
// class LinkNodeList{
//     constructor(){
//         this.head = null
//         this.length = 0
//     }
//     append(val){
//         let node = new Node(val)
//         let p = this.head
//         if (this.head) {
//             //把node赋值给最后一个节点
//             while (p.next) {
//                 p = p.next
//             }
//             p.next = node
//         }else{
//             //把node作为第一个节点
//             this.head = node
//         }
//         this.length++
//     }
//     print(){
//         let p = this.head
//         let ret =""
//         if (this.head) {
//             //组成一个string后全打出来
//             do {
//                 ret = ret + p.val+ '=>'
//                 p = p.next
//             } while (p.next);
//             ret += p.val
//             console.log(ret);
//         }else{
//             //空链表
//             console.log('empty linklist');
            
//         }
//     }
// }


class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkNodeList{
    constructor(){
        this.head = null
        this.length = 0
    }
    append(val){
        let node = new Node(val)
        if (this.head === null) {
            this.head = node
        }else{
            let p = this.head
            while (p.next) {
                p = p.next
            }
            p.next = node
        }
        this.length ++
    }
    print(){
        let p = this.head
        let rec = ""
        if (p) {
            do {
                ret = ret + p.val + "=>"
                p = p.next
            } while (p.next);
            ret += p.val
            console.log(ret);
        }else{
            console.log("kong");
        }
    }
}

//实现一个列表 1=》2=》3=》4
let link = new LinkNodeList()

link.append(1)
link.append(2)
link.append(3)
link.append(4)
link.print()