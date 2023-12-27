import { LEVEL } from './levels.enum';

export class Task {
  name = '';
  description = '';
  completed = false;
  priority = LEVEL.normal;

  constructor(name, description, completed, priority) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.priority = priority;
  }
}
