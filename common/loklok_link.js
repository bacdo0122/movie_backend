const Instance = require("../common/baseUrl");

const getSource = async (id, episode, category) => {
  const data = await Instance.get(
    `movieDrama/get?id=${id}&category=${category}`
  );
  const data1 = data.data.data;
  const sources = await Promise.all(
    data1.episodeVo[episode].definitionList.map(
      async (quality) =>
        (
          await Instance.get("media/previewInfo", {
            params: {
              category: 1,
              contentId: id,
              episodeId: data1.episodeVo[episode].id,
              definition: quality.code,
            },
          })
        ).data.data.mediaUrl
    )
  );

  const covert = sources
    .map((url, index) => ({
      quality: Number(
        data1.episodeVo[episode].definitionList[index].description
          .toLowerCase()
          .replace("p", "")
      ),
      url,
    }))
    .sort((a, b) => b.quality - a.quality);

  return covert;
};
module.exports = getSource;
