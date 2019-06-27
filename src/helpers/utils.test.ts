import { queryStringify, parseSplitGroup } from './utils';

describe('utils.ts', () => {
    describe('parseSplitGroup', () => {
        it('should return empty array', () => {
            const res = parseSplitGroup('');
            expect(res).toEqual([]);
        });

        it('should return ["value1", "value2"]', () => {
            const res = parseSplitGroup('value1;value2');
            expect(res).toEqual(['value1', 'value2']);
        });
    });

    describe('queryStringify', () => {
        it('should return empty string', () => {
            const res = queryStringify({});
            expect(res).toEqual('');
        });

        it('should return (@tpproperty=="value")', () => {
            const res = queryStringify({ tpproperty: ['value'] });
            expect(res).toEqual('(@tpproperty=="value")');
        });

        it('should return (@tpproperty==("value","value2"))', () => {
            const res = queryStringify({ tpproperty: ['value', 'value2'] });
            expect(res).toEqual('(@tpproperty==("value","value2"))');
        });

        it('should return (@tpproperty==("value","value2")) (@tpprix=="10..30")', () => {
            const res = queryStringify({
                tpproperty: ['value', 'value2'],
                tpprix: ['10..30']
            });
            expect(res).toEqual(
                '(@tpproperty==("value","value2")) (@tpprix=="10..30")'
            );
        });
    });
});
