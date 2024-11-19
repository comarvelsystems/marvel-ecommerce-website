import { getPlaiceholder } from "plaiceholder";

const getImage = async (src: string) => {
  try {
    const buffer = await fetch(src).then(async res =>
      Buffer.from(await res.arrayBuffer()),
    );

    const {
      metadata: { width, height },
      ...placeholder
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
      ...placeholder,
      img: { src, width, height },
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
    }

    console.log(error);
  }
};

export default getImage;
