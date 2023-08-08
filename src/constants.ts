export type TodoProp = {
  id: string;
  text: string;
  done: boolean;
}

export const initialTodos: TodoProp[] = [
  {
    id: '1',
    text: 'Drink a bottle of water',
    done: true
  },
  {
    id: '2',
    text: 'Buy groceries by 5pm',
    done: false
  },
  {
    id: '3',
    text: 'Read a book for an hour',
    done: false
  },
  {
    id: '4',
    text: 'Go to the gym by 6pm',
    done: false
  }
];
