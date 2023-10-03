import { createContext, useContext, useReducer, Dispatch } from "react";

export enum BackgroundActions {
  UPDATE_BACKGROUND = "UPDATE_BACKGROUND",
  UPLOAD_PROFILE_PICTURE = "UPDATE_PROFILE_PICTURE",
}

export type BackgroundType = {
  value?: string;
  label?: string;
  description?: string;
  href?: string;
  selected?: boolean;
  profilePicture?: string;
  templateID?: string;
  imageFile?: File;
};

type State = {
  backgrounds: BackgroundType[];
};

type SetBackground = {
  type: typeof BackgroundActions.UPDATE_BACKGROUND;
  option: BackgroundType;
};

type UpdatePofilePicture = {
  type: typeof BackgroundActions.UPLOAD_PROFILE_PICTURE;
  option: BackgroundType;
};

type BackgroundActionTypes = SetBackground | UpdatePofilePicture;

const initialState: State = {
  backgrounds: [
    {
      value: "true_altimetrian",
      label: "True Altimetran",
      href: new URL("/src/assets/images/true_altimetrian.png", import.meta.url)
        .href,
      description:
        "The profile pic of someone fully immersed in the Altiverse. Portraying honor and trust, it’s said that having it as a profile pic can boost project performance and overall professional results.",
      selected: true,
      profilePicture: "",
      templateID: "99a09936-9537-461b-99b2-2413fbbe4129",
      imageFile: undefined,
    },
    {
      value: "viva_mexico",
      label: "¡Viva Mexico!",
      href: new URL("/src/assets/images/viva_mexico.jpg", import.meta.url).href,
      description:
        "Tequila and tacos are but the tip of the iceberg. We’re the creatives behind a world popular cuisine, one of the most biodiverse countries and home of several UNESCO World Heritage sites… as well as a FIFA ban for screaming somewhat inadequate cheers to opposing sides in football.",
      selected: false,
      profilePicture: "",
      templateID: "6453f09e-a075-4e48-8422-ad15bd0583bb",
      imageFile: undefined,
    },
    {
      value: "viva_colombia",
      label: "¡Viva Colombia!",
      href: new URL("/src/assets/images/viva_colombia.jpg", import.meta.url)
        .href,
      description:
        "Happiness is our second name over at Colombia. We’re hosts of grandiose festivals, whose themes range from salsa dancing to ginormous flower sculptures. Some of the world’s most popular coffee comes from our fincas, spread around our beautifully biodiverse landscapes — where you can even find a liquid rainbow, if you know where to look.",
      selected: false,
      profilePicture: "",
      templateID: "99788989-be6c-411e-be79-8da7705f8829",
      imageFile: undefined,
    },
    {
      value: "spooky_season",
      label: "Spooky Season",
      href: new URL("/src/assets/images/spooky_season.jpg", import.meta.url)
        .href,
      description:
        "Did you know that Halloween was actually originated in Europe? Dating all the way back to medieval times, in Scotland an Ireland, young people dressed in songs went from door to door looking for food or money in exchange for performing songs, poems and other tricks. This tradition was known as “guising”.",
      selected: false,
      profilePicture: "",
      templateID: "c8c2360f-a1dd-4ea3-8d50-3284c2e53777",
      imageFile: undefined,
    },
    {
      value: "sugar_skull",
      label: "Sugar Skull",
      href: new URL("/src/assets/images/viva_colombia.jpg", import.meta.url)
        .href,
      description:
        "What do you know about The Day of the Dead? It is one of the most ancient Mexican tradition, with symbolisms that honor prehispanic cultures and rituals (like the cempasúchil flower, which is said to have spiritual traits that guided a deceased’s soul).",
      selected: false,
      profilePicture: "",
      templateID: "7c11b1be-6b2f-4801-a04b-8259f5b61642",
      imageFile: undefined,
    },
    {
      value: "christmas_fever",
      label: "Christmas Fever",
      href: new URL("/src/assets/images/christmas_fever.jpg", import.meta.url)
        .href,
      description:
        "A celebration we all know, love for the warmth and nostalgia it brings each year. Full of trees, hot cocoa and lots of jingles… Speaking of which, did you know that “Jingle Bells” was the first sing to be played in space? This was back in 1965, during NASA’s Gemini 6A space flight.",
      selected: false,
      profilePicture: "",
      templateID: "1c003715-c449-4b3a-af4b-380f41d34a0a",
      imageFile: undefined,
    },
    {
      value: "the_big_countdown",
      label: "The Big Countdown",
      href: new URL("/src/assets/images/the_big_countdown.jpg", import.meta.url)
        .href,
      description:
        "Okay, we have a deal for you. How many new year’s resolutions did you actually achieve this year? If the answer was less than none, then why don’t you try something out. Instead of overwhelming yourself with daunting quests that you’ll never achieve, why don’t you set a goal that actually sounds feasible (and interesting, for that matter)? It can be something like having a board games’ night with the kids once a month or singing up to some dance classes with you partner (talk to Pedro for more on that matter). Let’s set goals that we can and actually want to achieve. Because, lets be honest, we all hate the gym.",
      selected: false,
      profilePicture: "",
      templateID: "6377b0ed-ed98-41fb-9490-5821c27af649",
      imageFile: undefined,
    },
    {
      value: "royal_gift",
      label: "Royal Gift",
      href: new URL("/src/assets/images/royal_gift.jpg", import.meta.url).href,
      description:
        "Latin American children know that Santa was cool, but the real deal were the mighty Three Wise Men (also known as “Los Reyes Magos”). These were the guys who, for many of us, brought gifts home and for that they will be forever loved.",
      selected: false,
      profilePicture: "",
      templateID: "87e3079d-d41a-445f-985b-ccd34e32472e",
      imageFile: undefined,
    },
    {
      value: "love",
      label: "L.O.V.E",
      href: new URL("/src/assets/images/love.jpg", import.meta.url).href,
      description:
        "Giving red roses may be an obvious romantic gesture today, but it wasn't until the late 17th century that giving flowers became a popular custom. What kind of flowers are you planning to give this coming Valentine’s Day?",
      selected: false,
      profilePicture: "",
      templateID: "8183eca6-fff1-4325-8032-49ba0d7c9ed9",
      imageFile: undefined,
    },
    {
      value: "flower_mania",
      label: "Flower Mania",
      href: new URL("/src/assets/images/flower_mania.jpg", import.meta.url)
        .href,
      description:
        "Did you know that one of the most popular festivities in Colombia circles around big (and we mean really big) flower sculptures? La Feria de las Flores is a massive event taking place in Medellín, which celebrates women, fertility and life.",
      selected: false,
      profilePicture: "",
      templateID: "bf4599eb-461b-4fd7-9ef6-d089259dfddb",
      imageFile: undefined,
    },
    // {
    //   value: "no_background",
    //   label: "No Background",
    //   href: "",
    //   description: "",
    //   selected: false,
    //   profilePicture: "",
    //   templateID: "",
    //   imageFile: undefined,
    // },
  ],
};

const reducer = (state: State, action: BackgroundActionTypes): State => {
  const { value, profilePicture, imageFile } = action.option;
  const previous = state.backgrounds.findIndex((b) => b.selected);

  switch (action.type) {
    case BackgroundActions.UPDATE_BACKGROUND:
      const current = state.backgrounds.findIndex((b) => b.value === value);

      state.backgrounds[previous] = {
        ...state.backgrounds[previous],
        selected: false,
      };
      state.backgrounds = state.backgrounds.filter((b) => b.value !== value);
      state.backgrounds.splice(current, 0, action.option);

      return {
        ...state,
        backgrounds: [...state.backgrounds],
      };
    case BackgroundActions.UPLOAD_PROFILE_PICTURE:
      state.backgrounds = state.backgrounds.map((b) => {
        return { ...b, profilePicture, imageFile, href: profilePicture };
      });

      return {
        ...state,
        backgrounds: [...state.backgrounds],
      };
    default:
      return state;
  }
};

const BackgroundReducer = () => useReducer(reducer, initialState);
interface iFileUpload {
  children: React.ReactNode;
}

const FileUploadContext = createContext<
  [State, Dispatch<BackgroundActionTypes>]
>([{ backgrounds: [] }, () => {}]);

const FileUploadProvider = ({ children }: iFileUpload) => {
  const [state, dispatch] = BackgroundReducer();
  return (
    <FileUploadContext.Provider value={[state, dispatch]}>
      {children}
    </FileUploadContext.Provider>
  );
};

export default FileUploadProvider;
export const useFileUpload = () => useContext(FileUploadContext);
