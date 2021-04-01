

## Estruturas de Dados |  Typescript

:books: Lib para **estruturas de dados** sequenciais clássicas

<h3 id="content">Tabela de Conteúdo</h3>
<ul>
	<li><a href="#about">1. Sobre</a></li>
	<li><a href="#requirements">2. Pré-requisitos</a></li>
	<li><a href="#how-to-use">3. Como Utilizar</a></li>
	<li><a href="#examples">4. Exemplos de Utilização</a></li>
	<li><a href="#linkedlist">5. Lista Encadeada</a></li>
    <ul>
		<li><a href="#linkedlist-import">5.1. Importação</a></li>
		<li><a href="#linkedlist-new">5.2. Criação</a></li>
		<li><a href="#linkedlist-addFirst">5.3. Inserção no início</a></li>
		<li><a href="#linkedlist-addLast">5.4. Inserção no fim</a></li>
		<li><a href="#linkedlist-peekFirst">5.5. Recuperação do início</a></li>
		<li><a href="#linkedlist-peekLast">5.6. Recuperação do fim</a></li>
		<li><a href="#linkedlist-removeFirst">5.7. Remoção do início</a></li>
		<li><a href="#linkedlist-removeLast">5.8. Remoção do fim</a></li>
		<li><a href="#linkedlist-clone">5.9. Clonar</a></li>
    </ul>
	<li><a href="#stack">6. Pilha</a></li>
	<ul>
		<li><a href="#stack-import">6.1. Importação</a></li>
		<li><a href="#stack-new">6.2. Criação</a></li>
		<li><a href="#stack-add">6.3. Inserção</a></li>
		<li><a href="#stack-peek">6.4. Recuperação</a></li>
		<li><a href="#stack-remove">6.5. Remoção</a></li>
	</ul>
	<li><a href="#queue">7. Fila</a></li>
	<ul>
		<li><a href="#queue-import">7.1. Importação</a></li>
		<li><a href="#queue-new">7.2. Criação</a></li>
		<li><a href="#queue-add">7.3. Inserção</a></li>
		<li><a href="#queue-peek">7.4. Recuperação</a></li>
		<li><a href="#queue-remove">7.5. Remoção</a></li>
	</ul>
	<li><a href="#general-functions">8. Funcionalidades Gerais</a></li>
	<ul>
		<li><a href="#general-empty">8.1. Vazio</a></li>
		<li><a href="#general-size">8.2. Tamanho</a></li>
		<li><a href="#general-contains">8.3. Contém</a></li>
		<li><a href="#general-clear">8.4. Limpar</a></li>
		<li><a href="#general-iterator">8.5. Iterador</a></li>
		<li><a href="#general-print">8.6. Printar [debug only]</a></li>
	</ul>
	<li><a href="#custom">9. Customização</a></li>
</ul>

<h3 id="about">1. Sobre</h3>

Este repositório tem por objetivo prover uma pequena biblioteca livre escrita em Typescript puro para Estruturas de Dados Sequenciais Clássicas, isto é, para **Listas Encadeadas** , **Pilhas** e **Filas**.

<h3 id="requirements">2. Pré-requisitos</h3>

Os pré-requisitos para a utilização da biblioteca são mínimos:

<ul>
	<li>Instalar <a href="https://www.typescriptlang.org/download">Typescript Transpiler</a> em sua máquina;</li>
	<li>Possuir um editor de código que suporte Typescript.</li>
</ul>

<h3 id="how-to-use">3. Como Utilizar</h3>

Veja como é simples utilizar esta biblioteca em seu projeto:

<ul>
	<li>Faça o <a target="_blank" href="https://github.com/guiIher-me/typescript-sequential-structures/archive/refs/heads/main.zip">download</a>/clone desta biblioteca para sua máquina;</li>
	<li>Extraia o diretório "lib/" localizado em "src/lib/" para seu projeto;</li>
	<li>Importe a estrutura de dados que deseja utilizar usando a diretiva "import" do Typescript. </li>
</ul>

<h3 id="examples">4. Exemplos de Utilização</h3>

Cada Estrutura de Dados conta com um exemplo de utilização contido no diretório "src/". Já, para ver o exemplo em funcionamento, abra o respectivo exemplo.html de sua escolha contido no diretório "dist/".

<h3 id="linkedlist">5. Lista Encadeada</h3>

Lista Encadeada é uma estrutura de dados linear, composta de nós interligados. Confira a seguir as principais funcionalidades implementadas que caracterizam-na:

<h4 id="linkedlist-import">5.1. Importação</h4>

Para importar a classe **LinkedList** para seu projeto, utilize a diretiva "import" do Typescript. Por padrão:

```
import { LinkedList } from "./lib/collection/LinkedList";
```

<h4 id="linkedlist-new">5.2. Criação</h4>

Para criar uma nova Lista Encadeada, instancie um novo objeto a partir da Classe LinkedList e escolha o tipo de dado que quer armazenar.

Exemplos:

```
const list = new LinkedList(); //por padrão [any]
```
```
const list = new LinkedList<number>(); //para números
```
```
const list = new LinkedList<string>(); //para caracteres
```

<h4 id="linkedlist-addFirst">5.3. Inserção no início</h4>

Para inserir elementos no início da lista, utilize a função **addFirst**, ou ainda, utilize a função de apelido **add**.

Exemplos:

```
list.addFirst(20);
//list.add(20); //alternativa...
```
```
list.addFirst('a');
//list.add('a'); //alternativa...
```

<h4 id="linkedlist-addLast">5.4. Inserção no fim</h4>

Para inserir elementos no fim da lista, utilize a função **addLast**.

Exemplos:

```
list.addLast(20);
```
```
list.addLast('z');
```

<h4 id="linkedlist-peekFirst">5.5. Recuperação do início</h4>

Para pegar/recuperar o início da lista, sem removê-lo, utilize a função **peekFirst**, ou ainda, utilize a função de apelido **peek**.

Exemplo: 
```
const element = list.peekFirst();
//const element = list.peek(); //alternativa...
```

<h4 id="linkedlist-peekLast">5.6. Recuperação do fim</h4>

Para pegar/recuperar o fim da lista, sem removê-lo, utilize a função **peekFirst**, ou ainda, utilize a função de apelido **peek**.

Exemplo: 
```
const element = list.peekLast();
```

<h4 id="linkedlist-removeFirst">5.7. Remoção do início</h4>

Para remover o início da lista e retorná-lo, utilize a função **removeFirst**, ou ainda, utilize a função de apelido **remove**.

Exemplo: 
```
const element = list.removeFirst();
//const element = list.remove();

```
<h4 id="linkedlist-removeLast">5.8. Remoção do fim</h4>

Para remover o fim da lista e retorná-lo, utilize a função **removeFirst**.

Exemplo: 
```
const element = list.removeLast();
```

<h4 id="linkedlist-clone">5.9. Clonar</h4>
Para clonar todos os elementos de uma lista para uma nova lista, utilize a função **clone**.

Exemplo:

```
const cloned_list = list.clone();
```

<h3 id="stack">6. Pilha</h3>

Pilha é uma estrutura de dados do tipo LIFO (last-in first-out), onde o último elemento a ser inserido, será o primeiro a ser retirado.
Confira a seguir as principais funcionalidades implementadas que caracterizam-na:

<h4 id="stack-import">6.1. Importação</h4>
Para importar a classe **Stack** para seu projeto, utilize a diretiva "import" do Typescript. Por padrão:

```
import { Stack } from "./lib/collection/Stack";
```

<h4 id="stack-new">6.2. Criação</h4>

Para criar uma nova Pilha, instancie um novo objeto a partir da Classe Stack e escolha o tipo de dado que quer armazenar.

Exemplos:

```
const stack = new Stack(); //por padrão [any]
```
```
const stack = new Stack<number>(); //para números
```
```
const stack = new Stack<string>(); //para caracteres
```

<h4 id="stack-add">6.3. Inserção</h4>

Na Pilha, inserções ocorrem sempre no **início**/topo, para isso, utilize a função **push**, com uma nova pilha instanciada.

Exemplos:

```
stack.push(20); //para números
```
```
stack.push('a'); //para caracteres
```

<h4 id="stack-peek">6.4. Recuperação</h4>

Para pegar/recuperar o início/topo da Pilha, sem removê-lo, utilize a função **peek**.

Exemplo: 
```
const element = stack.peek();
```

<h4 id="stack-remove">6.5. Remoção</h4>

Para remover o início/topo da Pilha e retorná-lo, utilize a função **pop**.

Exemplo: 
```
const element = stack.pop();
```

<h3 id="queue">7. Fila</h3>

Filas são **estruturas de dados** do tipo FIFO (first-in first-out), onde o primeiro elemento a ser inserido, será o primeiro a ser retirado.  Confira a seguir as principais funcionalidades implementadas que caracterizam-na:

<h4 id="queue-import">7.1. Importação</h4>
Para importar a classe **Queue** para seu projeto, utilize a diretiva "import" do Typescript. Por padrão:

```
import { Queue } from "./lib/collection/Queue";
```

<h4 id="queue-new">7.2. Criação</h4>

Para criar uma nova Fila, instancie um novo objeto a partir da Classe Queue e escolha o tipo de dado que quer armazenar.

Exemplos:

```
const queue = new Queue(); //por padrão [any]
```
```
const queue = new Queue<number>(); //para números
```
```
const queue = new Queue<string>();; //para caracteres
```

<h4 id="queue-add">7.3. Inserção</h4>

Na Fila, inserções ocorrem sempre no **fim**, para isso, utilize a função **add**, com uma nova fila instanciada.

Exemplos:

```
queue.add(10); //para números
```
```
queue.add('a'); //para caracteres
```

<h4 id="queue-peek">7.4. Recuperação</h4>

Para pegar/recuperar o **fim** da Fila, sem removê-lo, utilize a função **peek**.

Exemplo: 
```
const element = queue.peek();
```

<h4 id="queue-remove">7.5. Remoção</h4>

Para remover o **início** da Fila e retorná-lo, utilize a função **remove**.

Exemplo: 
```
const element = queue.remove();
```

<h3 id="general-functions">8. Funcionalidades Gerais</h3>

Além das funcionalidades específicas listadas de cada estrutura de dados apresentada, a **estrutura base** de todas elas possui funcionalidades padrões, comuns à todas, confira a seguir:

<h4 id="general-empty">8.1. Vazio</h4>

Para verificar se uma estrutura está vazia, utilize a função **empty**.

Exemplos:
```
if(list.empty())  console.log("Lista vazia");
```
```
if(stack.empty()) console.log("Pilha vazia");
```
```
if(queue.empty()) console.log("Fila vazia");
```

<h4 id="general-size">8.2. Tamanho</h4>

Para retornar a quantidade de elementos atuais na estrutura, utilize a função **size**.

Exemplos:

```
let size = list.size(); //tamanho da lista
```
```
let size = stack.size(); //tamanho da pilha
```
```
let size = queue.size(); //tamanho da fila
```

<h4 id="general-contains">8.3. Contém</h4>

Para verificar se um estrutura contém um determinado elemento, utilize a função **contains**.

Exemplos:
```
if(list.contains(20))  console.log("Contém 20");
```
```
if(stack.contains('+')) console.log("Contém +");
```
```
if(queue.contains(1.5)) console.log("contém 1.5");
```

<h4 id="general-clear">8.4. Limpar</h4>

Para remover todos os elementos de uma estrutura, utilize a função **clear**.

Exemplos:

```
list.clear();
```
```
stack.clear();
```
```
queue.clear();
```

<h4 id="general-iterator">8.5. Iterador</h4>

Para iterar sobre elementos de uma estrutura, utilize o padrão **Iterator** em conjunto com as funções **hasNext** e **next**

Exemplos

```
const it = list.iterator(); //retorna um Iterator de lista
while(it.hasNext()) //enquanto tiver elementos...
	console.log(it.next()); //printa o elemento
```
```
const it = stack.iterator(); //retorna um Iterator de pilha
while(it.hasNext()) //enquanto tiver elementos...
	console.log(it.next()); //printa o elemento
```
```
const it = queue.iterator(); //retorna um Iterator de fila
while(it.hasNext()) //enquanto tiver elementos...
	console.log(it.next()); //printa o elemento
```

<h4 id="general-print">8.6. Printar [debug only]</h4>

[apenas para debug] Para printar todos os elementos de uma estrutura utilize a função **print**. 

**Atenção**: Você pode/deve remover esta função em ambiente de **produção**.

Exemplos:
```
list.print();
```
```
stack.print();
```
```
queue.print();
```

<h3 id="custom">9. Customização</h3>

Para implementar sua própria estrutura de dados customizada, você pode estender a classe base abstrata **SequentialList** ou estender uma das estruturas sequenciais da biblioteca, criando, assim, novas funcionalidades ou especializando funcionalidades já existentes.

Exemplo:

```
import { SequentialList } from './lib/collection/SequentialList';

export class Queue<E> extends SequentialList<E> {

    constructor() {
        super();
        this.STRUCTURE = 'myCustomSequentialList';
    }
    
	//functions...
	
}
```

