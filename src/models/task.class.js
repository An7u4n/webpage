import { LEVEL } from './levels.enum';

export class Task {
  id = '';
  name = '';
  description = '';
  completed = false;
  priority = LEVEL.normal;

  constructor(id, name, description, completed, priority) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.priority = priority;
  }
}
