const USER = "USER";

export const localStorageServ = {
  user: {
    set: function (dataUser) {
      let dataJson = JSON.stringify(dataUser);
      localStorage.setItem(USER, dataJson);
    },
    get: function () {
      let dataJson = localStorage.getItem(USER);
      if (!dataJson) {
        return null;
      } else {
        return JSON.parse(dataJson);
      }
    },

    remove: function () {
      localStorage.removeItem(USER);
    },
  },
};
