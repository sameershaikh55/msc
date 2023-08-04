export type Item = {
  picture: string;
  title: string;
};

export type ItemDropped = {
  id: string;
  index: number | undefined;
};

export type Props = {
  correctPattern: string[];
  cosmicFeelings: Item[];
  btn: {
    link: string;
    text: string;
  };
};
