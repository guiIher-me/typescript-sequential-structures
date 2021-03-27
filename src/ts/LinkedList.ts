import { Util } from './util';
import { Nullable, Node } from './Node';

export class LinkedList<E> {
    protected head: Nullable<Node<E>>;
    protected tail: Nullable<Node<E>>;
    protected length: number;

    protected readonly ERROR_EMPTY_LIST = 'List is empty!';
    protected readonly ERROR_ILLEGAL_ARG = 'Inappropriate argument!';

    constructor() {
        this.clean();
    }

    public clean() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    public empty(node: Nullable<Node<E>> = this.head): boolean {
        return node == null;
    }

    protected assertNotEmpty(node: Nullable<Node<E>> = this.head, message: string = this.ERROR_EMPTY_LIST): void {
        Util.assertFalse(this.empty(node), message);
    }

    public size(): number {
        return this.length;
    }

    public contains(data: E, node: Nullable<Node<E>> = this.head): boolean {
        if(this.empty(node))
            return false;

        if(node.data == data)
            return true;

        return this.contains(data, node.next);
    }

    public clone(): LinkedList<E> {
        const cloned = new LinkedList<E>();

        if(this.empty())
            return cloned;

        cloned.head = new Node(this.head.data);
        cloned.tail = this.clone_impl(cloned.head, this.head);

        return cloned;
    }

    private clone_impl(node_dest: Nullable<Node<E>>, node_src: Nullable<Node<E>>): Nullable<Node<E>> {
        if(this.empty(node_src.next))
            return node_dest; 

        node_dest.next = new Node(node_src.next.data);

        return this.clone_impl(node_dest.next, node_src.next);
    }

    public print(): void {
        console.log("List:");
        return this.print_impl();
    }

    protected print_impl(node: Nullable<Node<E>> = this.head): void {
        if(this.empty(node)) {
            console.log(`[null]`);
            return;
        }

        console.log(`[${node.data}]`);
        return this.print_impl(node.next);
    }

    public add(data: E): void {
        return this.addFirst(data);
    }

    public addFirst(data: E): void {
        const node = new Node(data);

        if(this.empty())
            this.tail = node;

        node.next = this.head;
        this.head = node;
        this.length++;
    }

    public addLast(data: E): void {
        const node = new Node(data);

        if(this.empty())
            this.head = node;
        else
            this.tail.next = node;

        this.tail = node;
        this.length++;
    }

    public peek(): E {
        return this.peekFirst();
    }

    public peekFirst(): E {
        this.assertNotEmpty();
        return this.head.data;
    }

    public peekLast(): E {
        this.assertNotEmpty();
        return this.tail.data;
    }

    public get(n: number): E {
        this.assertNotEmpty();
        return this.getNode(n, this.head).data;
    }

    protected getNode(n: number, node: Nullable<Node<E>>): Node<E> {
        this.assertNotEmpty(node, this.ERROR_ILLEGAL_ARG);
        
        if(n == 1)
            return node;

        return this.getNode(n-1, node.next);
    }

    public remove(): E {
        return this.removeFirst();
    }

    public removeFirst(): E {
        this.assertNotEmpty();

        const element = this.head.data;
        this.head = this.head.next;

        if(this.empty())
            this.tail = null;
        
        this.length--;
        return element;
    }

    public removeLast(): E {
        this.assertNotEmpty();

        const element = this.tail.data;
        if(this.length == 1) {
            this.clean();
            return element;
        }

        const penult = this.getNode(this.length-1, this.head);
        this.tail = penult;
        this.tail.next = null;

        this.length--;
        return element;
    }

}