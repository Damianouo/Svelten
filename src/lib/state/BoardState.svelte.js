class BoardState {
  #data = $state({
    "list-1": {
      id: "list-1",
      title: "To-Do",
      cards: {
        "card-1": { id: "card-1", title: "Learn Svelte 5 $state" },
        "card-2": { id: "card-2", title: "Create Card component" },
      },
    },
    "list-2": {
      id: "list-2",
      title: "In Progress",
      cards: {
        "card-3": { id: "card-3", title: "Create List component" },
      },
    },
    "list-3": {
      id: "list-3",
      title: "Done",
      cards: {
        "card-4": { id: "card-4", title: "Read Svelte Docs" },
      },
    },
  });

  get data() {
    return this.#data;
  }

  addList(title) {
    this.#data[title] = {
      id: title,
      title,
      cards: {},
    };
  }

  deleteList(id) {
    const { [id]: _deletedList, ...rest } = this.#data;
    this.#data = rest;
  }
  addCard(listId, cardTitle, cardContent) {
    const targetList = this.#data[listId];
    const updatedList = {
      ...targetList,
      cards: {
        ...targetList.cards,
        [cardTitle]: { id: cardTitle, title: cardTitle, content: cardContent },
      },
    };
    this.#data = { ...this.#data, [listId]: updatedList };
  }
  deleteCard(listId, cardId) {
    const targetCards = this.#data[listId].cards;
    const { [cardId]: _deletedCard, ...rest } = targetCards;

    const updatedList = {
      ...this.#data[listId],
      cards: rest,
    };
    this.#data = { ...this.#data, [listId]: updatedList };
  }
}

export const board = new BoardState();
