import { Group, Image, Rect, Text } from "@zwight/g6-extension-vue";

const VariableGNode = ({
  data,
  size,
}: {
  data: any;
  size: [width: number, height: number];
}) => {
  const [width, height] = size;
  const { name, type, status, success, time, failure } = data.data;
  const color = status === "success" ? "#30BF78" : "#F4664A";
  const radius = 4;

  const titleMap: { [key in string]: string } = {
    success: "Success",
    time: "Time",
    failure: "Failure",
  };

  const format = (category: string, value: number) => {
    if (category === "success") return `${value}%`;
    if (category === "time") return `${value}min`;
    return value.toString();
  };

  const highlight = (category: string, value: number) => {
    if (category === "success") {
      if (value >= 90) return "green";
      if (value < 60) return "red";
      return "gray";
    }
    if (category === "time") {
      if (value <= 10) return "green";
      if (value >= 30) return "red";
      return "gray";
    }
    if (value >= 20) return "red";
    if (value >= 5) return "orange";
    return "gray";
  };
  return (
    <Group>
      <Rect
        width={width}
        height={height}
        stroke={color}
        fill={"white"}
        radius={radius}
        onClick={() => console.log(1122)}
      >
        <Rect
          width={width}
          height={20}
          fill={color}
          radius={[radius, radius, 0, 0]}
        >
          <Image
            src={
              type === "module"
                ? "https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*0HC-SawWYUoAAAAAAAAAAABkARQnAQ"
                : "https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*sxK0RJ1UhNkAAAAAAAAAAABkARQnAQ"
            }
            x={2}
            y={2}
            width={16}
            height={16}
          />
          <Text
            text={name}
            textBaseline="top"
            fill="#fff"
            fontSize={14}
            dx={20}
            dy={2}
          />
        </Rect>
        <Group transform="translate(5,40)">
          {Object.entries({ success, time, failure }).map(
            ([key, value], index) => (
              <Group
                key={index}
                transform={`translate(${(index * width) / 3}, 0)`}
              >
                <Text text={titleMap[key]} fontSize={12} fill="gray" />
                <Text
                  text={format(key, value)}
                  fontSize={12}
                  dy={16}
                  fill={highlight(key, value)}
                />
              </Group>
            ),
          )}
        </Group>
      </Rect>
    </Group>
  );
};
export default VariableGNode;
