import { Iterable } from '../util/iterator/Iterable';
import { Iterator } from '../util/iterator/Iterator';
import { ListIterator } from './ListIterator';
import { Nullable, Node } from './Node';
import { Util } from '../util/Util'; 

export abstract class SequentialList<E> implements Iterable<E> {
    protected head: Nullable<Node<E>>;
    protected tail: Nullable<Node<E>>;
    protected length: number;

    protected STRUCTURE = 'List'; //default
    protected ERROR_EMPTY_LIST = `${this.STRUCTURE} is empty!`;
    protected ERROR_ILLEGAL_ARG = 'Inappropriate argument!';

    constructor() {
        this.clear();
    }

    public iterator(): Iterator<E> {
        const sequential_list_iterator: Iterator<E> = new ListIterator(this.head);
        return sequential_list_iterator;
    }

    public clear(node: Nullable<Node<E>> = this.head): void {
        if(this.empty(node)) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        const next = node.next;
        node = null;

        return this.clear(next);
    }

    protected assertNotEmpty(node: Nullable<Node<E>> = this.head, message: string = this.ERROR_EMPTY_LIST): void {
        Node.assertNotEmpty<E>(this.head, this.ERROR_EMPTY_LIST);
    }

    public empty(node: Nullable<Node<E>> = this.head): boolean {
        return Node.empty<E>(node);
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

    public print(): void {
        console.log(this.STRUCTURE);

        const it = this.iterator();
        while(it.hasNext())
            console.log(`[${it.next()}]`);
        console.log(`[null]`);
    }

    protected addFirst(data: E): void {
        const node = new Node(data);

        if(this.empty())
            this.tail = node;

        node.next = this.head;
        this.head = node;
        this.length++;
    }

    protected addLast(data: E): void {
        const node = new Node(data);

        if(this.empty())
            this.head = node;
        else
            this.tail.next = node;

        this.tail = node;
        this.length++;
    }

    protected peekFirst(): E {
        this.assertNotEmpty();
        return this.head.data;
    }

    protected peekLast(): E {
        this.assertNotEmpty();
        return this.tail.data;
    }

    protected get(n: number): E {
        this.assertNotEmpty();
        return this.getNode(n, this.head).data;
    }

    protected getNode(n: number, node: Nullable<Node<E>>): Node<E> {
        this.assertNotEmpty(node, this.ERROR_ILLEGAL_ARG);
        
        if(n == 1)
            return node;

        return this.getNode(n-1, node.next);
    }

    protected removeFirst(): E {
        const element = this.peekFirst();
        this.head = this.head.next;

        if(this.empty())
            this.tail = null;
        
        this.length--;
        return element;
    }

    protected removeLast(): E {
        const element = this.peekLast();
        if(this.length == 1) {
            this.clear();
            return element;
        }

        const penult = this.getNode(this.length-1, this.head);
        this.tail = penult;
        this.tail.next = null;

        this.length--;
        return element;
    }

    protected clone_impl(node_dest: Nullable<Node<E>>, node_src: Nullable<Node<E>>): Nullable<Node<E>> {
        if(this.empty(node_src.next))
            return node_dest; 

        node_dest.next = new Node(node_src.next.data);

        return this.clone_impl(node_dest.next, node_src.next);
    }

}