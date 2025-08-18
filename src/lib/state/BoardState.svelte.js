class BoardState {
  #data = $state({
    "list-1": {
      id: "list-1",
      title: "To-Do",
      cards: {
        "card-1": {
          id: "card-1",
          title: "Learn Svelte 5 $state",
          desc: "Master Svelte 5 $state, ",
        },
        "card-2": {
          id: "card-2",
          title: "Create Card component",
          desc: "Card component would display the card",
        },
      },
    },
    "list-2": {
      id: "list-2",
      title: "In Progress",
      cards: {
        "card-3": {
          id: "card-3",
          title: "Create List component",
          desc: "List component could showcase the list",
        },
      },
    },
    "list-3": {
      id: "list-3",
      title: "Done",
      cards: {
        "card-4": {
          id: "card-4",
          title: "Read Svelte Docs",
          desc: "Just read it, its really not that hard",
        },
      },
    },
  });

  get data() {
    return this.#data;
  }

  addList(title) {
    if (this.#data[title]) {
      return { success: false, message: "A list with the same title already exists." };
    }

    if (title.trim() === "") {
      return { success: false, message: "List title can not be empty." };
    }

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

  addCard(listId, cardTitle, cardDesc) {
    if (this.#data[listId].cards[cardTitle]) {
      return {
        success: false,
        message: "A card with the same title already exists in this list.",
      };
    }

    if (cardTitle.trim() === "") {
      return {
        success: false,
        message: "Card title can not be empty.",
      };
    }

    if (cardDesc.trim() === "") {
      return {
        success: false,
        message: "Card description can not be empty.",
      };
    }

    this.#data[listId].cards[cardTitle] = {
      id: cardTitle,
      title: cardTitle,
      desc: cardDesc,
    };

    return { success: true };
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
