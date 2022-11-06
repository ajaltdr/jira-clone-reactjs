export const getItems = () => {
  const data = read();
  const items = {
    todo: data[0].tickets,
    inProgress: data[1].tickets,
    done: data[2].tickets,
  };
  return items;
};

export const createTicket = (values) => {
  const data = read();
  const newTicket = {
    id: Math.floor(Math.random() * 1000),
    ...values,
  };

  data[0].tickets.push(newTicket);
  save(data);
};

export const read = () => {
  const json = localStorage.getItem("ticket-data");

  if (!json) {
    return [
      {
        id: 1,
        tickets: [],
      },
      {
        id: 2,
        tickets: [],
      },
      {
        id: 3,
        tickets: [],
      },
    ];
  }

  return JSON.parse(json);
};

export const save = (data) => {
  localStorage.setItem("ticket-data", JSON.stringify(data));
};
