type infoMarkdown = {
  title: string;
  date: string;
  image: string;
  author: string
};
export function markdownHeadtoJson(markdown: string): infoMarkdown {
  const arrayInfo = markdown
    .split("---")[1]
    .split("\n")
    .filter((value) => value !== "");

  const resultinArrayObjects = arrayInfo.map((field) => {
    const key = field.split(":")[0].replace('"', "");
    
    const value = eval(field);

    return { [key]: value };
  });

  const resultinSingleObject = resultinArrayObjects.reduce((acc, obj) => {
    Object.assign(acc, obj);
    return acc;
  }, {});

  return resultinSingleObject as infoMarkdown;
}
