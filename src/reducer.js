export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // "--7-Rb-OGx0RIrgZANWfuwI39arAYja0z6iDXt0FndT1InYgS223Gb1X7SWLq7rCndwUColkYFkKskmICW8EEA229cmYbGe6_bROnl6gFjB6n5K3tdbo2oY",
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
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
