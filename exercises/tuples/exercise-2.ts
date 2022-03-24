export {} // empty export to ensure the compiler treats this file as a module

type ItemRecord = { item: string; shelves: number[]; total: number }

const itemRecords: ItemRecord[] = [
  { item: "Apple", total: 16, shelves: [4, 6] },
  { item: "Banana", total: 14, shelves: [2, 4] },
  { item: "Orange", total: 22, shelves: [1, 3, 6] },
  { item: "Guava", total: 7, shelves: [5, 6] },
  { item: "Pear", total: 15, shelves: [3, 6] },
  { item: "Mangosteen", total: 4, shelves: [3, 4] },
  { item: "Watermelon", total: 2, shelves: [2] },
]

function getDescription (itemRecord: ItemRecord, threshold: number): [description: string, warning?: string] {
  const description = `We have ${itemRecord.total} ${itemRecord.item}(s) on shelves ${itemRecord.shelves.join(', ')}`
  
  // let warning;
  // if (itemRecord.total < (threshold / 2)) {
  //   warning = `We need to restock ${itemRecord.item} urgently!`
  // } else if (itemRecord.total < threshold) {
  //   warning = `We need to restock ${itemRecord.item} soon.`
  // }

  if (itemRecord.total < (threshold / 2)) {
    return [description, `We need to restock ${itemRecord.item} urgently!`]
  }
  
  if (itemRecord.total < threshold) {
   return [description, `We need to restock ${itemRecord.item} soon.`]
  }

  return [description]
}

for (const itemRecord of itemRecords) {
  const [description, warning] = getDescription(itemRecord, 10)
  console.log(description)
  if (typeof warning !== 'undefined') {
    console.log(warning);
  }
}
