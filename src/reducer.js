export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};
//"BQBqAme-1x2k0pcNqR21d8ySso039n4IaMbdQElZfJeCEiSPwJJTFcJi8oX6s7SV1gAaAoKVviZqJ03sD-7-Rb-OGx0RIrgZANWfuwI39arAYja0z6iDXt0FndT1InYgS223Gb1X7SWLq7rCndwUColkYFkKskmICW8EEA229cmYbGe6_bROnl6gFjB6n5K3tdbo2oY",

// Remove token sting and set to null once finished developing

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
