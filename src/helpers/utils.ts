import { Dictionary, map, isEmpty } from 'lodash';

export const parseSplitGroup = (string: string) =>
    string ? string.split(';' || ' ') : [];

// convert selection dictionary to aq query params
/** e.g. @authorname==("bob jones","robert smith","rob johnson") */
export const queryStringify = (fieldsQuery: Dictionary<string[]>) => {
    return map(fieldsQuery, (values, key) =>
        isEmpty(values) ? '' : `(@${key}==${valuesToQuery(values)})`
    ).join(' ');
};

function valuesToQuery(values: string[]) {
    const valuesWithQuotes = values.map(value => `"${value}"`);
    return values.length <= 1
        ? `${valuesWithQuotes.join()}`
        : `(${valuesWithQuotes.join()})`;
}
