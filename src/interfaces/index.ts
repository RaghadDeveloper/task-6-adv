export interface Blog {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  categories: string[];
  author: string;
  sections: Array<Section>;
}

interface Description {
  subTitle?: string;
  p: string;
}

interface MiniSec {
  subTitle?: string;
  description?: Array<Description>;
  img?: { src: string; desc: string };
}

interface Section {
  title?: string;
  description?: Array<Description>;
  img?: { src: string; desc: string };
  secs?: Array<MiniSec>;
  ul?: string[];
}
