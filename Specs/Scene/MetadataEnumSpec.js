import { MetadataEnum } from "../../Source/Cesium.js";
import { MetadataEnumType } from "../../Source/Cesium.js";

describe("Scene/MetadataEnum", function () {
  it("creates enum with default values", function () {
    var colorEnum = new MetadataEnum({
      id: "color",
      enum: {
        values: [
          {
            name: "RED",
            value: 0,
          },
          {
            name: "GREEN",
            value: 1,
          },
          {
            name: "BLUE",
            value: 2,
          },
        ],
      },
    });

    expect(colorEnum.values[0].name).toBe("RED");
    expect(colorEnum.values[1].name).toBe("GREEN");
    expect(colorEnum.values[2].name).toBe("BLUE");
    expect(colorEnum.valueType).toBe(MetadataEnumType.INT32);
    expect(colorEnum.id).toBe("color");
    expect(colorEnum.name).toBeUndefined();
    expect(colorEnum.description).toBeUndefined();
    expect(colorEnum.extras).toBeUndefined();
  });

  it("creates enum", function () {
    var extras = {
      gain: 0.5,
      offset: 0.1,
    };

    var colorEnum = new MetadataEnum({
      id: "color",
      enum: {
        name: "Color",
        description: "Common colors",
        extras: extras,
        valueType: MetadataEnumType.UINT64,
        values: [
          {
            name: "RED",
            value: 0,
          },
          {
            name: "GREEN",
            value: 1,
          },
          {
            name: "BLUE",
            value: 2,
          },
        ],
      },
    });

    expect(colorEnum.values[0].name).toBe("RED");
    expect(colorEnum.values[1].name).toBe("GREEN");
    expect(colorEnum.values[2].name).toBe("BLUE");
    expect(colorEnum.valueType).toBe(MetadataEnumType.UINT64);
    expect(colorEnum.id).toBe("color");
    expect(colorEnum.name).toBe("Color");
    expect(colorEnum.description).toBe("Common colors");
    expect(colorEnum.extras).toEqual(extras);
    expect(colorEnum.extras).not.toBe(extras); // Extras is cloned
  });

  it("constructor throws without id", function () {
    expect(function () {
      return new MetadataEnum({
        enum: {
          values: [
            {
              name: "RED",
              value: 0,
            },
          ],
        },
      });
    }).toThrowDeveloperError();
  });

  it("constructor throws without enum", function () {
    expect(function () {
      return new MetadataEnum({
        id: "enumId",
      });
    }).toThrowDeveloperError();
  });
});
