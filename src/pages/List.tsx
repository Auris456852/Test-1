import { useState } from "react";
import { ListItem } from "../models/ListItem";


function List() {
    const [list, setList] = useState<ListItem[]>([{ id: 0, text: 'Eat' }, { id: 1, text: 'Code' }, { id: 2, text: 'Sleep' }]);
    const [newItem, setNewItem] = useState('')

    /* Pirmai uþduoèiai nebuvau labai ásitikinæs.
     * Daþniausiai, jei ruoðiu sàraðà, að noriu tà sàraðà kur nors iðsaugoti. Daþniausiai SQL duomenø bazëje. 
     * Man tam reikëtø sukurti API. Að nelabai þinau kaip prisijungti prie duomenø bazës be API, kurá sukurèiau per .NET Core. 
     * Taèiau uþduoèiai reikia naudoti tik React ir Typescript.
     */
    const addToList = (toBack: boolean) => {
        if (newItem !== '') {
            const newId = list?.length > 0 ? Math.max(...list.map(item => item.id)) + 1 : 0;
            const newListItem: ListItem = {
                id: newId,
                text: newItem
            };
            if (toBack)
                setList([...list, newListItem]);
            else
                setList([newListItem, ...list]);

            setNewItem('');
        }
    };

    const removeItem = (id: number) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
    };

    const renameItem = (id: number, newText: string) => {
        const updatedList = list.map((item) => {
            if (item.id === id) {
                return { ...item, text: newText };
            }
            return item;
        });
        setList(updatedList);
    }

    const shiftUp = (id: number) => {
        const updatedList = [...list];
        const index = updatedList.findIndex((item) => item.id === id)
        if (index > 0) {
            const temp = updatedList[index]
            updatedList[index] = updatedList[index - 1]
            updatedList[index - 1] = temp
        }
        setList(updatedList);
    }

    const shiftDown = (id: number) => {
        const updatedList = [...list];
        const index = updatedList.findIndex((item) => item.id === id)
        if (index < updatedList.length) {
            const temp = updatedList[index]
            updatedList[index] = updatedList[index + 1]
            updatedList[index + 1] = temp
        }
        setList(updatedList);
    }

  return (
      <div>
          <ul>
          {list.map((item) => (
              <li key={item.id}>
                  <span>
                      <input
                          type="text"
                          value={item.text}
                          onChange={(e) => renameItem(item.id, e.target.value)}
                      />
                  </span>
                  <button onClick={() => shiftUp(item.id)}>Shift Up</button>
                  <button onClick={() => shiftDown(item.id)}>Shift Down</button>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
          ))}
        </ul>
          <div className="card">
              <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
              />
              <button onClick={() => { addToList(false) }}>Add To Front</button>
              <button onClick={() => { addToList(true) }}>Add To Back</button>
          </div>
        </div>
  );
}

export default List;