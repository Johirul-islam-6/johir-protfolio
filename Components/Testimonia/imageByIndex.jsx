import jorna from "@/app/assets/review/jorna.jpg";
import monowar from "@/app/assets/review/monowar.jpg";
import rakib from "@/app/assets/review/rakib.jpg";
const image1 = {
  imag: monowar,
  name: "Md.Monowar",
  possition: "SSL Wireless",
  title:
    " He is such a hard working man who does not know how to give up. I know he will shine in programming field by any means. Best of luck Johirul islam (rasel).",
  email: "cse.monowar@gmail.com",
  phone: "01771238454",
};
const image2 = {
  imag: "",
  name: "Rasel Khan",
  possition: "Mocdit",
  title:
    " He is such a hard working man who does not know how to give up. I know he will shine in programming field by any means. Best of luck boy.",
  email: "rasel@gmail.com",
  phone: "01824842336",
};
const image3 = {
  imag: "",
  name: "Rasel Khan",
  possition: "Mocdit",
  title:
    " He is such a hard working man who does not know how to give up. I know he will shine in programming field by any means. Best of luck boy.",
  email: "rasel@gmail.com",
  phone: "01824842336",
};
const image4 = {
  imag: "",
  name: "Rasel Khan",
  possition: "Mocdit",
  title:
    " He is such a hard working man who does not know how to give up. I know he will shine in programming field by any means. Best of luck boy.",
  email: "rasel@gmail.com",
  phone: "01824842336",
};

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
