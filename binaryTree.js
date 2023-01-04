//  ! we are inserting values into binary tree using queue 


//   * =======> QUEUE========>
class NodeforQue{
    constructor(data,next){
        this.data=data
        this.next=next
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    pushback(data){
        const node=new NodeforQue(data)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            
            this.tail=node

        }
        this.size+=1
    }
    popBack(){
        if(this.size==0){
            return "no elements present"
        }else{
            let curr=this.head
            this.head=curr.next
            curr.next=null
            this.size-=1
            return curr.data
        }
    }
}
class Queue{
    constructor(){
        this.list=new LinkedList()
    }
    enQueue(data){
        this.list.pushback(data)
    }
    dQueue(){
        return this.list.popBack()
    }
    getsize(){
        return this.list.size
    }
    frontElement(){
        return this.list.head
    }
    isEmpty(){
        return this.list.size==0
    }
}

// ! binary tree using queue 
class Node{
    constructor(data,left,right){
        this.data=data;
        this.left=null;
        this.right=null;

    }
}

class binaryTree{

    constructor(){
            this.root=null;
            this.size=0
        }
        insertion(data){
            const node=new Node(data)
            if(!this.root){
                this.root=node
                this.size+1
            }
        else{
            const queue=new Queue()  //[1,null,2,3]
            queue.enQueue(this.root)
            while(!queue.isEmpty()){
                let temp =queue.dQueue()
                    if(temp.left==null){
                        temp.left=node
                        break
                }else{
                   queue.enQueue(temp.left)
                }
                if(temp.right==null){
                    temp.right=node
                break
                }else{
                    queue.enQueue(temp.right)
               }
            }

        }
    }
    inOrder(root){
        if(!root){
            return
        }
        this.inOrder(root.left)
        console.log(root.data,"=>")
        this.inOrder(root.right)
    }
    isLeaf(root){
        {
            if (root == null)
                return 0;
            if (root.left == null && root.right == null)
                return 1;
            return 0;
        }
    }
     sum(root)
    {
        if(root == null)
        {
            return 0;
        }
        return (this.sum(root.left) + root.data+this.sum(root.right));
    }
        isSumTree(root){
        let ls,rs
        if(root == null || (root.left == null && root.right == null))
        {
            return 1;
        }
        ls = this.sum(root.left);
        rs = this.sum(root.right);
        if((root.data == ls + rs) && this.isSumTree(root.left) != 0 && this.isSumTree(root.right) != 0)
        {
            return 1;
        }
        return 0;
    }
}
   
 



let bt=new binaryTree()
bt.insertion(60)
bt.insertion(20)
bt.insertion(10)
bt.insertion(15)
bt.insertion(5)
bt.insertion(5)
bt.insertion(5)


console.log(bt.isSumTree(bt.root))

bt.inOrder(bt.root)
//bt.preOrder(bt.root)
//bt.postOrder(bt.root)
