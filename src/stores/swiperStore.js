import { defineStore } from "pinia";

export const useSwiperStore = defineStore("swiper", {
  state: () => ({
    boxes: [
      {
        id: 1,
        rate: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.!",
        name: "Alice Johnson",
        jobTitle: "Excellent Quality",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        rate: 5,
        description:
          "Lorem 0 aipsum dolor sit amet, consectet adipiscing elit. Integer porttitor vestibulum odio, eget convipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convllis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis..",
        name: "Bob Smith",
        jobTitle: "Worth the money",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        rate: 5,
        description:
          " Integer porttitor vestibulum odio, eget convipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convllis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis..",
        name: "Bob Smith",
        jobTitle: "Worth the money",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        rate: 5,
        description:
          "Lorem 0 aipsum dolor sit amet, consectetmattis vel ut felis..",
        name: "Bob Smith",
        jobTitle: "Worth the money",
        image: "https://via.placeholder.com/150",
      },
    ],
    selectedItem: null,
  }),
  actions: {
    addNewCard(card) {
      this.boxes.push(card);
    },
    deleteCard(id) {
      this.boxes = this.boxes.filter((card) => card.id !== id);
    },
    editCard(updatedCard) {
      const index = this.boxes.findIndex((card) => {
        return card.id === updatedCard.id;
      });
      if (index !== -1) {
        this.boxes[index] = { ...this.boxes[index], ...updatedCard };
      } else {
      }
    },
  },
});
