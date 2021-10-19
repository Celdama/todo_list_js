import { v4 as uuidv4 } from 'uuid';

const todoFactory = (title, description) => ({
  id: uuidv4(),
  title,
  description,
});

export default todoFactory;
