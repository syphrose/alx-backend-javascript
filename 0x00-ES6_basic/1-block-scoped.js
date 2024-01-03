/* modifying variables*/
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
	  /*disable eslint*/
   const task = true;
   const task2 = false;
  }

  return [task, task2];
}
