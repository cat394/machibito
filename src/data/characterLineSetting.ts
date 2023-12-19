export type StyleSetting = {
  ver: string;
  classes?: string[];
  styles?: string[];
};

export type Character = {
  name: string;
  styles: StyleSetting[];
  defaultVersion: string;
};

export type CharacterLineSetting = {
  base: StyleSetting;
  characters?: Character[];
};


export const characterLineSetting: CharacterLineSetting = {
  base: {
    ver: "base_v1",
    classes: ["my-[1.25rem]"]
  },
  // characters: [
  //   {
  //     name: "man",
  //     styles: [
  //       {
  //         ver: "simple",
  //         classes: ["w-full", "pl-3"],
  //         styles: ["border-left: 2px solid #24426F"]
  //       }
  //     ],
  //     defaultVersion: "simple"
  //   },
  //   {
  //     name: "anonymous",
  //     styles: [
  //       {
  //         ver: "simple",
  //         classes: ["w-full", "pl-3"],
  //         styles: ["border-left: 2px solid #24426F"]
  //       }
  //     ],
  //     defaultVersion: "simple"
  //   },
  //   {
  //     name: "girl",
  //     styles: [
  //       {
  //         ver: "simple",
  //         classes: ["w-full", "pl-3"],
  //         styles: ["border-left: 2px solid "]
  //       }
  //     ],
  //     defaultVersion: "simple"
  //   }
  // ]
}