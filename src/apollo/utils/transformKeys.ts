import { camelCase, snakeCase } from "lodash";

const ignoringKeys = ["base64"];

/**
 * Transform the object keys from snake case to camel case or reverse
 *
 * @ignore
 * @function
 * @param {any} data - The data needs to transform
 * @param toSnakeCase {boolean} - Is from camel case to snake case or not
 * @returns {any}
 */
const dataTransform = (data?: any, toSnakeCase?: boolean): any => {
  if (
    !data ||
    typeof data === "string" ||
    typeof data === "number" ||
    typeof data === "boolean"
  ) {
    return data;
  }
  if (Array.isArray(data)) {
    return data.map((item): any => dataTransform(item, toSnakeCase));
  }
  // Notes: We no need to handle other types
  // The server only can return or accept the pure object
  // including `null`, `string`,`number`,`boolean`,`array` or `object`
  const newObject: any = {};
  for (const key of Object.keys(data)) {
    if (ignoringKeys.includes(key)) {
      newObject[key] = data[key];
      continue;
    }

    const newKey = toSnakeCase ? snakeCase(key) : camelCase(key);
    newObject[newKey] = dataTransform(data[key], toSnakeCase);
  }
  return newObject;
};

export default dataTransform;
