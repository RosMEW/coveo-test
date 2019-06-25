import { product } from '../shared/types';
import { Dictionary } from 'lodash';

export type querySearchParams = {
    q: string;
    /** e.g. '@tpdisponibilite=="En Succursale"' */
    aq: string;
    /** e.g. 'fielddescending' or 'fieldascending' */
    sortCriteria: string;
    /** e.g. '@tpmillesime' */
    sortField: string;
    numberOfResults: number;
    /** pagination offset */
    firstResult: number;
};

export type searchReponse = {
    totalCountFiltered: number;
    results: product[];
    groupByResults: groupByResult[];
};

export type product = {
    uniqueId: string;
    title: string;
    clickUri: string;
    raw: productRawData;
};

export type productRawData = {
    /** imgURL */
    tpthumbnailuri: string;
    tppays: string;
    tpregion: string;
    /** e.g. '19.0' */
    tpprixnum: number;

    // labels
    tpcategorie: string;
    tpformat: string;
    tpobservationsgustativestexture: string;
    tpcepagenomsplitgroup: string;

    /** e.g. 'En Succursale;En Ligne' */
    tpdisponibilite: string;
    /** e.g. ['true'] */
    tpenspecial: string;
    /** Long text describing the product */
    tpnotededegustation: string;
};

export type groupByResult = {
    field: string;
    values: groupByResultValue[];
};

export type groupByResultValue = {
    value: string;
    numberOfResults: number;
};

export type querySelection = Dictionary<string[]>;

export type searchState = {
    query: {
        searchTerm: string;
        selection: querySelection;
        sortOrder: string;
        sortField: string;
        resultPerPage: number;
        firstResult: number;
    };
    results: product[];
    total: number;
    loading: boolean;
    error: boolean;
};

export type termSelected = {
    field: string;
    value: string;
    text?: string;
};

export type selectionState = {
    termSelected: termSelected[];
    groupBy: groupByResult[];
};

export type state = {
    search: searchState;
    selection: selectionState;
};
